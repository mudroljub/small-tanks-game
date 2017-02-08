// putanja projektila
// drugi tenk
// ui

import {proveriTipke} from 'akcije/kontrole'
import Vreme from 'core/Vreme'
import Predmet from 'core/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'

const PI = Math.PI
const potisak = 0.5
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
const vremePunjenja = 1000
let ukupnoGranata = 10

export default class Tenk extends Predmet {

  constructor(src) {
    super(src)
    this.x = 150
    this.y = 350
    this.cev = new Cev(this, slikaTenkCev)
    this.vreme = new Vreme()
    this.granate = []
    this.praviGranate()
    this.ugaoSlike = 2 * PI
  }

  update() {
    this.trenje()
    super.update()
    this.cev.update()
    this.granate.map(g => g.update())
  }

  render() {
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
  }

  praviGranate() {
    for (let i = ukupnoGranata; i > 0; i--) {
      this.granate[i - 1] = new Granata(this.cev, slikaGranata)
    }
  }

  skaliranjeObecaj(posto) {
    super.skaliranjeObecaj(posto)
    this.cev.skaliranjeObecaj(posto)
  }

  trenje() {
    const koeficijent = this.brzina > 0.1 ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }

  proveriTipke() {
    proveriTipke(this)
  }

  /* TIPKE */

  nalevo() {
    this.ugao = PI
    this.dodajSilu(potisak)
  }

  nadesno() {
    this.ugao = 0
    this.dodajSilu(potisak)
  }

  nagore() {
    if (this.cev.ugao < -PI/8) return
    this.cev.ugao -= 0.01
  }

  nadole() {
    if (this.cev.ugao > 0) return
    this.cev.ugao += 0.01
  }

  pucaj() {
    if (this.vreme.proteklo < vremePunjenja || !ukupnoGranata) return
    this.granate[ukupnoGranata - 1].pucaj()
    this.nalevo() // trzaj
    ukupnoGranata--
    this.vreme.reset()
  }
}
