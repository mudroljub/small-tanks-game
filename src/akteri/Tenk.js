import {proveriTipke} from 'akcije/kontrole'
import Predmet from 'core/Predmet'
import Cev from './Cev'
import Granata from './Granata'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'

const PI = Math.PI
const potisak = 0.5
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
let ukupnoGranata = 10

// da ispaljuje jednu po jednu, kad izleti sa ekrana, smanjuje se broj i moze drugu?

export default class Tenk extends Predmet {

  constructor(src) {
    super(src)
    this.x = 150
    this.y = 350
    this.cev = new Cev(this, slikaTenkCev)
    this.granate = []
    this.praviGranate()
    this.ugaoSlike = 2*PI
  }

  praviGranate() {
    for (let i = ukupnoGranata; i > 0; i--) {
      this.granate[i-1] = new Granata(this.cev, slikaGranata)
    }
  }

  update() {
    this.trenje()
    super.update()
    this.cev.update()
    this.granate.map(g => g.update())
  }

  render() {
    // this.granate[ukupnoGranata-1].render()
    // this.granate.map(g => g.render)
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
  }

  skaliranjeObecaj(posto) {
    super.skaliranjeObecaj(posto)
    this.cev.skaliranjeObecaj(posto)
  }

  proveriTipke() {
    proveriTipke(this)
  }

  nalevo() {
    this.ugao = PI
    this.dodajSilu(potisak)
  }

  nadesno() {
    this.ugao = 0
    this.dodajSilu(potisak)
  }

  nagore() {
    this.cev.ugao -= 0.01
  }

  nadole() {
    this.cev.ugao += 0.01
  }

  pucaj() {
    this.granate[ukupnoGranata-1].pucaj()
    console.log(ukupnoGranata)
    ukupnoGranata--
  }

  trenje() {
    const koeficijent = this.brzina > 0.1 ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }
}
