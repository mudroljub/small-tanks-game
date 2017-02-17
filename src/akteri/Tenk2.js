import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import Vreme from 'klase/Vreme'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'

const napred = Math.PI
const nazad = 0
const vremeGasa = new Vreme()
const vremeSmera = new Vreme()
let pripremi = false

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.ugao = Math.PI
    this.x = Math.random() * this.platno.width * 0.3 + this.platno.width * 0.7
    this.cev = new Cev2(this)
    this.praviGranate()
  }

  mrdaNasumicno() {
    this.pucaj()
    if (vremeGasa.proteklo < 100) return
    this.dodajSilu((Math.random() * this.potisak))
    if (vremeSmera.proteklo < 300) return
    this.ugao = Math.random() > 0.5 ? nazad : napred
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
    vremeGasa.reset()
    vremeSmera.reset()
  }

  proveriTipke() {
    if (this.mrtav) return
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
