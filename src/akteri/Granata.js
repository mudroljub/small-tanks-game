import {nestani} from 'akcije/granice'
import Predmet from 'core/Predmet'

const potisak = 50

export default class Granata extends Predmet {
  constructor(cev, src) {
    super(src)
    this.cev = cev
    this.ispaljena = false
    this.granice = nestani
    this.sakrij()
  }

  update() {
    if (!this.ispaljena) return
    super.update()
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
}
