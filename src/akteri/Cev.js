import Predmet from 'core/Predmet'
import {podloga} from 'io/platno'

const PI = Math.PI

export default class Cev extends Predmet {
  constructor(vlasnik, src) {
    super(src)
    this.vlasnik = vlasnik
    this.ugao = -Math.PI / 16
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

  nagore() {
    if (this.ugao < -PI/8) return
    this.ugao -= 0.01
  }

  nadole() {
    if (this.ugao > 0) return
    this.ugao += 0.01
  }
}
