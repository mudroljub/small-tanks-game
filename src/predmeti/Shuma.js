import Predmet from 'klase/Predmet'
import platno from 'io/platno'
import {vracaVodoravno} from 'akcije/granice'
import slikaShumarak from 'slike/predmeti/priroda/shumarak.png'

export default class Shuma extends Predmet {

  constructor(nivoTla = platno.height, src = slikaShumarak) {
    super(src)
    this.procenatVracanja = 1
    this.x = Math.random() * platno.width
    this.tlo(nivoTla + 5)
  }

  proveriGranice() {
    vracaVodoravno(this)
  }
}
