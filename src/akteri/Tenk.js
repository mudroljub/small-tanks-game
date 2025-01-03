import tipke, {A, S, W, D, RAZMAK} from '/game-engine/io/tipke.js'
import platno from '/game-engine/io/platno.js'
import Vreme from '/game-engine/core/Vreme.js'
import Predmet from '/game-engine/core/Predmet.js'
import Cev from './Cev.js'
import Granata from './Granata.js'

const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
const vremePunjenja = 1000
const brojGranata = 100
let pripremi = false

export default class Tenk extends Predmet {

  constructor(src = '/assets/slike/tenkovi/jna-tenk-podnozje.png') {
    super(src)
    this.napred = 0
    this.nazad = Math.PI
    this.potisak = 30
    this.cev = new Cev(this, '/assets/slike/tenkovi/jna-tenk-cev.png')
    this.vreme = new Vreme()
    this.ugaoSlike = this.napred
    this.ime = 'Levi tenk'
    this.init()
  }

  init() {
    this.x = Math.random() * this.platno.width * 0.3
    this.granate = []
    this.praviGranate()
    this.energija = 100
    this.ziv = true
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
    this.ograniciPolozaj()

    if (tipke[A] && this.x > 0) this.dodajSilu(this.potisak * 0.6, this.nazad)
    if (tipke[D] && this.x < platno.width / 2) this.dodajSilu(this.potisak, this.napred)
    if (tipke[W]) this.cev.nagore()
    if (tipke[S]) this.cev.nadole()

    // prebaciti nekako na tipke?
    if (tipke[RAZMAK]) pripremi = true
    if (pripremi && !tipke[RAZMAK]) {
      this.pucaj()
      pripremi = false
    }
  }

  ograniciPolozaj() {
    if (this.x < 0) this.x = 0
    if (this.x > platno.width / 2) this.x = platno.width / 2
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
    this.dodajSilu(this.potisak, this.nazad)
  }
}
