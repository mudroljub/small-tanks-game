import Predmet from 'core/Predmet'
import {podloga} from 'io/platno'

export default class Cev extends Predmet {
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
