import {nestani} from 'akcije/granice'
import Predmet from 'core/Predmet'

export default class Granata extends Predmet {
  constructor(cev, src) {
    super(src)
    this.cev = cev
    this.ispaljena = false
    this.granice = nestani
    this.sakrij()
  }

  update() {
    super.update()
    if (!this.ispaljena) this.pratiCev()
  }

  pratiCev() {
    // this.x = Math.cos(this.cev.ugao) * this.cev.dijagonala + this.cev.x * 1.01
    // this.y = Math.sin(this.cev.ugao) * this.cev.dijagonala + this.cev.y * 1.05
    this.x = this.cev.x
    this.y = this.cev.y
    this.ugao = this.cev.ugao
  }

  pucaj() {
    this.pokazi()
    this.dodajSilu(2)
    this.ispaljena = true
  }
}
