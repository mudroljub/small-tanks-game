// odvojiti Granatu
// srediti pojavljivanje granate
// napraviti niz granata, da puca zaredom
// popraviti granatu, da menja ugaoCevi sukladno gravitaciji

import * as $ from 'konstante'
import * as _ from 'utils'
import Predmet from 'core/Predmet'
import Igrac from 'core/Igrac'
import platno from 'io/platno'
import {ogranici} from 'akcije/granice'
import slikaGranata from 'slike/granata.gif'
const PI = Math.PI

export default class TenkBocnoIgrac extends Igrac {

  constructor(src) {
    super(src)
    this.x = 100
    this.energija = 100
    this.granice = ogranici
    this.okrenutNadesno = true
    this.podesiTipke($.A, $.D, $.W, $.S, $.RAZMAK)
  }

  update() {
    this.cev.polozaj(this.x + 1, this.y - 9)
    super.update()
    this.praviGravitaciju()
    this.granata.update()
    this.ograniciCev()
  }

  render() {
    super.render()
    this.cev.render()
    this.granata.render()
  }

  postaviCev(cevSrc, sirina, visina) {
    this.cev = new Predmet(cevSrc, sirina, visina)
    this.podesiUgaoCevi()
    this.postaviGranatu()
  }

  podesiUgaoCevi() {
    if (this.okrenutNadesno) {
      const ugaoCevi = -0.17
      this.cev.ugao = ugaoCevi
      this.pomerajCevi = -0.02
    }

    if (!this.okrenutNadesno) {
      const ugaoCevi = 0.17
      this.cev.ugao = ugaoCevi
      this.pomerajCevi = 0.02
    }
  }

  postaviGranatu() {
    this.granata = new Predmet(slikaGranata, 12, 3)
    this.granata.sakrij()
  }

  praviGravitaciju(gravitacija = 0.3) {
    this.granata.dodajSilu(gravitacija, _.uRadijane(90))
  }

  ograniciCev() {
    if (this.okrenutNadesno) {
      if (this.cev.ugao > 0) this.cev.ugao = 0
      if (this.cev.ugao < -PI/4) this.cev.ugao = -PI/4
    }
    if (!this.okrenutNadesno) {
      console.log('cev.ugao:', this.cev.ugao)
    }
  }

  nagore() {
    this.cev.ugao += this.pomerajCevi
  }

  nadole() {
    this.cev.ugao -= this.pomerajCevi
  }

  reset() {
    this.polozaj(Math.random() * 400, 450)
    this.energija = 100
  }

  mrdaNasumicno() {
    this.brzina = Math.random() * 10 - 5
    if (this.x >= 600) {
      this.brzina = Math.random() * 10 - 5
      this.ugaoKretanja = 180
    }
    if (this.x >= platno.width - 10) {
      this.x = platno.width - 10
    }
    if (this.x <= 450) {
      this.brzina = Math.random() * 10 - 5
      this.ugaoKretanja = 0
    }
  }

  puca() {
    const ugaoCevi = this.okrenutNadesno ? 0 : 180
    this.granata.ugaoKretanja = this.cev.ugao - ugaoCevi
    this.granata.ugao = this.cev.ugao - ugaoCevi
    this.granata.polozaj(this.cev.x, this.cev.y)
    this.granata.brzina = 20
    this.granata.pokazi()
  }

}
