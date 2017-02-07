import {proveriTipke} from 'akcije/kontrole'
import Predmet from 'core/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'

const PI = Math.PI
const potisak = 0.5
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1

export default class Tenk extends Predmet {

  constructor(src) {
    super(src)
    this.x = 150
    this.y = 350
    this.cev = new Cev(this, slikaTenkCev)
    this.granata = new Granata(this, slikaGranata)
  }

  update() {
    this.trenje()
    super.update()
    this.cev.update()
    this.granata.update()
  }

  render() {
    this.granata.render()
    this.cev.render()
    super.render()
  }

  skaliranjeObecaj(posto) {
    super.skaliranjeObecaj(posto)
    this.cev.skaliranjeObecaj(posto)
  }

  proveriTipke() {
    proveriTipke(this)
  }

  nalevo() {
    this.ugao = PI
    this.dodajSilu(potisak)
  }

  nadesno() {
    this.ugao = 0
    this.dodajSilu(potisak)
  }

  nagore() {
    this.cev.ugao -= 0.01
  }

  nadole() {
    this.cev.ugao += 0.01
  }

  pucaj() {
    this.granata.pucaj()
  }

  trenje() {
    const koeficijent = this.brzina > 0.1 ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }
}
