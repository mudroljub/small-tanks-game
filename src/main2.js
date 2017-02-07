import {ucitaj} from 'utils'
import {proveriTipke} from 'akcije/kontrole'
import Predmet from 'core/Predmet'
import Scena from 'core/Scena'
import {podloga} from 'io/platno'

import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev.png'
const slike = [slikaTenkPodnozje, slikaTenkCev]

class Cev extends Predmet {
  constructor(src, vlasnik) {
    super(src)
    this.vlasnik = vlasnik
  }

  update() {
    this.pratiTenk()
  }

  // http://stackoverflow.com/questions/8936803/rotating-around-an-arbitrary-point-html5-canvas
  // render() {
  //   podloga.translate(this.x + this.sirina/2, this.y + this.visina/2)
  //   podloga.rotate(this.ugao)
  //   podloga.rect(-this.sirina/2, -this.visina/2, this.sirina, this.visina)
  // }

  pratiTenk() {
    this.x = this.vlasnik.x + this.vlasnik.sirina * 0.17
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.29
  }
}

class Tenk extends Predmet {

  constructor(src) {
    super(src)
    this.cev = new Cev(slikaTenkCev, this)
  }

  update() {
    super.update()
    this.cev.update()
  }

  render() {
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

  puca() {

  }

}


const init = () => {

  const scena = new Scena()
  const tenk1 = new Tenk(slikaTenkPodnozje)

  tenk1.skaliranjeObecaj(0.75)

  scena.update = () => {
    tenk1.proveriTipke()
    tenk1.update()
  }

  scena.render = () => {
    tenk1.render()
  }

}

Promise.all(slike.map(ucitaj)).then(init)
