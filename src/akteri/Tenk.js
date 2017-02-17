import tipke, {A, S, W, D, RAZMAK} from 'io/tipke'
import Vreme from 'klase/Vreme'
import Predmet from 'klase/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkPodnozje from 'slike/tenkovi/jna-tenk-podnozje.png'
import slikaTenkCev from 'slike/tenkovi/jna-tenk-cev.png'

const napred = 0
const nazad = Math.PI
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
const vremePunjenja = 1000
const brojGranata = 10
let pripremi = false

export default class Tenk extends Predmet {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.x = Math.random() * this.platno.width * 0.3
    this.potisak = 30
    this.cev = new Cev(this, slikaTenkCev)
    this.vreme = new Vreme()
    this.granate = []
    this.praviGranate()
    this.ugaoSlike = napred
    this.energija = 100
  }

  update(dt) {
    this.trenje()
    super.update(dt)
    this.cev.update(dt)
    this.granate.map((granata, i) => {
      granata.update(dt)
      if (granata.nestala) this.granate.splice(i, 1)
    })
    this.proveriSmrt()
  }

  render() {
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
  }

  skiniEnergiju(steta) {
    this.energija -= steta
    if (this.energija <= 0) this.energija = 0
  }

  proveriSmrt() {
    if (this.energija <= 0) this.umri()
  }

  proveriPogodak(predmet) {
    this.granate
      .filter(granata => granata.ispaljena)
      .map(granata => granata.proveriPogodak(predmet))
  }

  praviGranate() {
    for (let i = brojGranata - 1; i >= 0; i--) {
      this.granate[i] = new Granata(this.cev)
    }
  }

  skaliranjeObecaj(odsto) {
    super.skaliranjeObecaj(odsto)
    this.cev.skaliranjeObecaj(odsto)
    this.granate.map(g => g.skaliranjeObecaj(odsto))
  }

  trenje() {
    const koeficijent = (this.brzina > 0.1) ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }

  proveriTipke() {
    if (this.mrtav) return
    if (tipke[A]) this.dodajSilu(this.potisak * 0.6, nazad)
    if (tipke[D]) this.dodajSilu(this.potisak, napred)
    if (tipke[W]) this.cev.nagore()
    if (tipke[S]) this.cev.nadole()

    // prebaciti nekako na tipke?
    if (tipke[RAZMAK]) pripremi = true
    if (pripremi && !tipke[RAZMAK]) {
      this.pucaj()
      pripremi = false
    }
  }

  pucaj() {
    if (this.vreme.proteklo < vremePunjenja || !this.granate.length) return
    let i = this.granate.length - 1
    while (this.granate[i].ispaljena && i > 0) i--  // trazi neispaljenu
    if (this.granate[i].ispaljena) return
    this.granate[i].pucaj()
    this.trzaj()
    this.vreme.reset()
  }

  trzaj() {
    this.dodajSilu(this.potisak * 2, nazad)
  }
}
