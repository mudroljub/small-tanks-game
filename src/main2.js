import {ucitaj} from 'utils'
import {proveriTipke} from 'akcije/kontrole'
import {nestani} from 'akcije/granice'
import {podloga} from 'io/platno'
import Predmet from 'core/Predmet'
import Scena from 'core/Scena'

import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'
const slike = [slikaTenkPodnozje, slikaTenkCev, slikaGranata]

class Cev extends Predmet {
  constructor(vlasnik, src) {
    super(src)
    this.vlasnik = vlasnik
  }

  update() {
    this.pratiTenk()
  }

  render() {
    podloga.save()
    podloga.translate(this.x, this.y)
    podloga.rotate(this.ugao)
    podloga.drawImage(this.slika, 0, 0, this.sirina, this.visina)
    podloga.restore()
  }

  pratiTenk() {
    this.x = this.vlasnik.x * 1.01
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.33
  }
}

class Granata extends Predmet {
  constructor(vlasnik, src) {
    super(src)
    this.vlasnik = vlasnik
    this.cev = vlasnik.cev
    this.ispaljena = false
    this.granice = nestani
    // this.sakrij()
  }

  update() {
    if (!this.ispaljena) this.pratiCev()
    if (this.ispaljena) this.leti()
  }

  pratiCev() {
    // this.x = Math.cos(this.cev.ugao) * this.cev.dijagonala + this.cev.x * 1.01
    // this.y = Math.sin(this.cev.ugao) * this.cev.dijagonala + this.cev.y * 1.05
    this.x = this.cev.x
    this.y = this.cev.y
    this.ugao = this.cev.ugao
  }

  pucaj() {
    this.ispaljena = true
  }

  leti() {

  }
}

class Tenk extends Predmet {

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
