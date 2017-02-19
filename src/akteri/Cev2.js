import Cev from './Cev'
import slikaTenkCev from 'slike/tenkovi/nemacki-tenk-cev.png'

export default class Cev2 extends Cev {

  constructor(vlasnik, src = slikaTenkCev) {
    super(vlasnik, src)
    this.ugao = -Math.PI * Math.PI * 15/16
  }

  pratiTenk() {
    this.x = this.vlasnik.x - this.vlasnik.sirina * 0.16
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.2
  }

  nagore() {
    if (this.ugao > Math.PI * 1.20) return
    this.ugao += 0.01
  }

  nadole() {
    if (this.ugao < Math.PI) return
    this.ugao -= 0.01
  }
}
