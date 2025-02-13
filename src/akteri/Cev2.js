import Cev from './Cev.js'

export default class Cev2 extends Cev {

  constructor(vlasnik, src = '/assets/slike/tenkovi/nemacki-tenk-cev.png') {
    super(vlasnik, src)
    this.ugao = Math.PI * 1.1
  }

  pratiTenk() {
    this.x = this.vlasnik.x - this.vlasnik.sirina * 0.16
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.2
  }

  nagore() {
    if (this.ugao > Math.PI * 1.2) return
    this.ugao += 0.01
  }

  nadole() {
    if (this.ugao < Math.PI) return
    this.ugao -= 0.01
  }
}
