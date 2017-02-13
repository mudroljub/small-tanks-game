import {nestani} from 'akcije/granice'
import Predmet from 'klase/Predmet'
import slikaGranata from 'slike/granata.gif'

const potisak = 40
const gravitacija = .6

export default class Granata extends Predmet {
  constructor(vlasnik, src = slikaGranata) {
    super(src)
    this.vlasnik = vlasnik
    this.z = vlasnik.z
    this.ispaljena = false
    this.nestala = false
    this.granice = nestani
    this.sakrij()
  }

  update() {
    if (!this.ispaljena) return
    this.dodajSilu(gravitacija, Math.PI/2)
    super.update()
    this.ugao = Math.atan2(this.dy, this.dx)
  }

  postavi() {
    this.x = Math.cos(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.x * 1.01
    this.y = Math.sin(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.y * 1.02
    this.ugao = this.vlasnik.ugao
  }

  pucaj() {
    this.pokazi()
    this.postavi()
    this.dodajSilu(potisak)
    this.ispaljena = true
  }

  nestani() {
    super.nestani()
    this.nestala = true
  }
}
