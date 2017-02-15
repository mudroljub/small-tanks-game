import {nestani} from 'akcije/granice'
import {sudara} from 'akcije/sudari'
import Predmet from 'klase/Predmet'
import slikaGranata from 'slike/granata.gif'

const potisak = 800
const gravitacija = 200
const silaUdara = 5
let energijaMete = 0

export default class Granata extends Predmet {
  constructor(vlasnik, src = slikaGranata) {
    super(src)
    this.vlasnik = vlasnik
    this.z = vlasnik.z
    this.nivoTla = vlasnik.y + 200
    this.ispaljena = false
    this.nestala = false
    this.granice = nestani
    this.sakrij()
  }

  update(dt) {
    if (!this.ispaljena) return
    this.dodajSilu(gravitacija * dt, Math.PI/2)
    this.azurirajUgao()
    this.proveriTlo()
    super.update(dt)
  }

  // TODO: prebaciti na Predmet
  azurirajUgao() {
    this.ugao = Math.atan2(this.dy, this.dx)
  }

  postavi() {
    this.x = Math.cos(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.x
    this.y = Math.sin(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.y
    this.ugao = this.vlasnik.ugao
  }

  pucaj() {
    this.pokazi()
    this.postavi()
    this.dodajSilu(potisak)
    this.ispaljena = true
  }

  sudara(predmet) {
    return sudara(this, predmet)
  }

  proveriTlo() {
    if (this.y > this.nivoTla) this.nestani()
  }

  proveriPogodak(predmet) {
    if (!this.sudara(predmet)) return
    this.nestani()  // eksplodiraj
    energijaMete = energijaMete || predmet.energija
    predmet.dodajSilu(silaUdara, 0)
    predmet.skiniEnergiju(Math.round(Math.random() * energijaMete / 2))
  }

  nestani() {
    super.nestani()
    this.nestala = true
  }
}
