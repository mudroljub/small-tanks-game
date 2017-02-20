import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import platno from 'io/platno'
import Vreme from 'klase/Vreme'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import stanje from '../stanje'
import {gravitacija} from '../konstante'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'
import unistenTenk from 'slike/tenkovi/nemacki-tenk-unisten.png'

const napred = Math.PI
const nazad = 0
const vremeGasa = new Vreme()
const vremeSmera = new Vreme()
const vremePucanja = new Vreme()
let pripremi = false

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.ugao = Math.PI
    this.x = this.platno.width - Math.random() * this.platno.width * 0.4
    this.cev = new Cev2(this)
    this.praviGranate()
    this.ime = 'Desni tenk'
    this.slikaMrtav = unistenTenk
  }

  automatuj(predmet) {
    if (predmet.mrtav) return
    this.nisani(predmet)
    this.mrdajNasumicno()
    this.pucajNasumicno()
  }

  nisani(predmet) {
    this.cev.ugao = Math.PI + this.razmakDo(predmet) / (gravitacija * gravitacija * 0.8)
  }

  mrdajNasumicno() {
    const random = Math.random()
    if (vremeGasa.proteklo > 100) {
      this.dodajSilu((random * this.potisak))
      vremeGasa.reset()
    }
    if (vremeSmera.proteklo > 300) {
      this.ugao = random > 0.5 ? nazad : napred
      if (this.x > platno.width) this.ugao = napred
      if (this.x < platno.width / 2) this.ugao = nazad
      vremeSmera.reset()
    }
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
  }

  trzaj() {
    this.dodajSilu(this.potisak * 2, nazad)
  }
}
