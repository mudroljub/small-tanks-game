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
const brojGranata = 10

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
    this.granate.map((granata, i) => {
      granata.update()
      if (granata.nestala) this.granate.splice(i, 1)
    })
  }

  render() {
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
  }

  praviGranate() {
    for (let i = brojGranata - 1; i >= 0; i--) {
      this.granate[i] = new Granata(this.cev, slikaGranata)
    }
  }

  skaliranjeObecaj(odsto) {
    super.skaliranjeObecaj(odsto)
    this.cev.skaliranjeObecaj(odsto)
  }

  trenje() {
    const koeficijent = (this.brzina > 0.1) ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }

  proveriTipke() {
    proveriTipke(this)
  }

  /* TIPKE */

  nalevo() {
    this.dodajSilu(potisak * 0.6, PI)
  }

  nadesno() {
    this.dodajSilu(potisak, 0)
  }

  nagore() {
    this.cev.nagore()
  }

  nadole() {
    this.cev.nadole()
  }

  trzaj() {
    this.dodajSilu(potisak * 2, PI)
  }

  pucaj() {
    if (this.vreme.proteklo < vremePunjenja || !this.granate.length) return
    this.granate[this.granate.length-1].pucaj()
    this.trzaj()
    this.vreme.reset()
  }
}
