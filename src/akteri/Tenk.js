import tipke, {A, S, W, D, RAZMAK} from 'io/tipke'
import Vreme from 'klase/Vreme'
import Predmet from 'klase/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkPodnozje from 'slike/tenkovi/jna-tenk-podnozje.png'
import slikaTenkCev from 'slike/tenkovi/jna-tenk-cev.png'

const PI = Math.PI
const potisak = 0.5
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
const vremePunjenja = 1000
const brojGranata = 10

export default class Tenk extends Predmet {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.x = 150
    this.cev = new Cev(this, slikaTenkCev)
    this.vreme = new Vreme()
    this.granate = []
    this.praviGranate()
    this.ugaoSlike = 2 * PI
  }

  update() {
    this.trenje()
    super.update()
    this.cev.update()
    this.granate.map((granata, i) => {
      granata.update()
      if (granata.nestala) this.granate.splice(i, 1)
    })
  }

  render() {
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
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
    if (tipke[A]) {
      this.dodajSilu(potisak * 0.6, PI)
    }

    if (tipke[D]) {
      this.dodajSilu(potisak, 0)
    }

    if (tipke[W]) {
      this.cev.nagore()
    }

    if (tipke[S]) {
      this.cev.nadole()
    }

    if (tipke[RAZMAK]) {
      if (this.vreme.proteklo < vremePunjenja || !this.granate.length) return
      this.granate[this.granate.length-1].pucaj()
      this.trzaj()
      this.vreme.reset()
    }
  }

  trzaj() {
    this.dodajSilu(potisak * 2, PI)
  }
}
