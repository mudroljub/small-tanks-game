import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import platno from 'io/platno'
import Vreme from 'klase/Vreme'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import stanje from '../stanje'
import {gravitacija} from '../konstante'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'

const napred = Math.PI
const nazad = 0
const vremeGasa = new Vreme()
const vremeSmera = new Vreme()
const vremePucanja = new Vreme()
let pripremi = false

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.cev = new Cev2(this)
    this.ime = 'Desni tenk'
    this.init()
  }

  init() {
    this.ugao = Math.PI
    this.x = this.platno.width - Math.random() * this.platno.width * 0.3 - 100
    this.praviGranate()
    this.energija = 100
    this.ziv = true
  }

  automatuj(predmet) {
    if (this.mrtav || predmet.mrtav) return
    this.mrdajNasumicno()
    this.nisani(predmet)
    this.pucajNasumicno()
    this.ograniciPolozaj()
  }

  nisani(predmet) {
    this.cev.ugao = Math.PI + this.razmakDo(predmet) / (gravitacija * gravitacija * 0.8)
  }

  mrdajNasumicno() {
    const random = Math.random()
    if (vremeGasa.proteklo > 70) {
      this.dodajSilu((random * this.potisak))
      vremeGasa.reset()
    }
    if (vremeSmera.proteklo > 300) {
      this.ugao = random > 0.55 ? nazad : napred
      vremeSmera.reset()
    }
    if (this.x > platno.width * 0.9) this.ugao = napred
    if (this.x < platno.width / 2) this.ugao = nazad
  }

  ograniciPolozaj() {
    if (this.x < platno.width / 2) this.x = platno.width / 2
    if (this.x > platno.width) this.x = platno.width
  }

  pucajNasumicno() {
    if (vremePucanja.proteklo < 2500) return
    this.pucaj()
    vremePucanja.reset()
  }

  proveriTipke() {
    if (this.mrtav || !stanje.dvaIgraca) return
    if (tipke[LEVO] && this.x > platno.width / 2) this.dodajSilu(this.potisak, napred)
    if (tipke[DESNO] && this.x < platno.width) this.dodajSilu(this.potisak * 0.6, nazad)
    if (tipke[GORE]) this.cev.nagore()
    if (tipke[DOLE]) this.cev.nadole()

    if (tipke[ENTER]) pripremi = true
    if (pripremi && !tipke[ENTER]) {
      this.pucaj()
      pripremi = false
    }
    this.ograniciPolozaj()
  }

  trzaj() {
    this.dodajSilu(this.potisak * 2, nazad)
  }
}
