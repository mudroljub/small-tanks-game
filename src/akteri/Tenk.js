import {proveriTipke} from 'akcije/kontrole'
import Predmet from 'core/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'

export default class Tenk extends Predmet {

  constructor(src) {
    super(src)
    this.x = 150
    this.y = 350
    this.cev = new Cev(this, slikaTenkCev)
    this.granata = new Granata(this, slikaGranata)
  }

  update() {
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
    this.x--
  }

  nadesno() {
    this.x++
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
}
