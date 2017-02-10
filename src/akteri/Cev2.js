import Cev from './Cev'

export default class Cev2 extends Cev {

  constructor(vlasnik, src) {
    super(vlasnik, src)
    this.ugao = -Math.PI * 7/8
  }

  pratiTenk() {
    this.x = this.vlasnik.x - this.vlasnik.sirina * 0.16
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.2
  }

  nagore() {
    if (this.ugao > -Math.PI * 0.8) return
    this.ugao += 0.01
  }

  nadole() {
    if (this.ugao < -Math.PI) return
    this.ugao -= 0.01
  }
}
