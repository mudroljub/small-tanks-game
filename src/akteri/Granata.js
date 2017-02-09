import {nestani} from 'akcije/granice'
import Predmet from 'klase/Predmet'

const potisak = 50
const gravitacija = .6

export default class Granata extends Predmet {
  constructor(cev, src) {
    super(src)
    this.cev = cev
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
    this.x = Math.cos(this.cev.ugao) * this.cev.dijagonala + this.cev.x * 1.01
    this.y = Math.sin(this.cev.ugao) * this.cev.dijagonala + this.cev.y * 1.02
    this.ugao = this.cev.ugao
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
