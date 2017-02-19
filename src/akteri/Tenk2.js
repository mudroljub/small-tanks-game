import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import Vreme from 'klase/Vreme'
import Tenk from './Tenk'
import Cev2 from './Cev2'
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
    this.ugao = Math.PI
    this.x = Math.random() * this.platno.width * 0.3 + this.platno.width * 0.7
    this.cev = new Cev2(this)
    this.praviGranate()
    this.ime = 'Desni tenk'
    this.igrac = false
  }

  nisani(predmet) {
    this.cev.ugao = Math.PI + this.razmakDo(predmet) / (gravitacija * gravitacija)
  }

  igrajProtiv(predmet) {
    this.nisani(predmet)
    this.mrdajNasumicno()
    this.pucajNasumicno()
  }

  pucajNasumicno() {
    if (vremePucanja.proteklo < 2500) return
    this.pucaj()
    vremePucanja.reset()
  }

  mrdajNasumicno() {
    if (vremeGasa.proteklo > 100) {
      this.dodajSilu((Math.random() * this.potisak))
      vremeGasa.reset()
    }
    if (vremeSmera.proteklo > 300) {
      this.ugao = Math.random() > 0.5 ? nazad : napred
      vremeSmera.reset()
    }
    // this.dodajSilu((Math.random() * this.potisak) - this.potisak/2)
    // if(this.x >= 600) {
    //   this.brzina((Math.random() * 10) - 5)
    //   this.ugao(Math.PI)
    // }
    // if(this.x >= this.platno.width - 10) {
    //   this.x = this.platno.width - 10
    // }
    // if(this.x <= 450) {
    //   this.brzina((Math.random() * 10) - 5)
    //   this.ugao(0)
    // }
  }

  proveriTipke() {
    if (this.mrtav || !this.igrac) return
    if (tipke[LEVO]) this.dodajSilu(this.potisak, napred)
    if (tipke[DESNO]) this.dodajSilu(this.potisak * 0.6, nazad)
    if (tipke[GORE]) this.cev.nagore()
    if (tipke[DOLE]) this.cev.nadole()

    if (tipke[ENTER]) pripremi = true
    if (pripremi && !tipke[ENTER]) {
      this.pucaj()
      pripremi = false
    }
  }

}
