import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'

const vremePunjenja = 1000

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.ugao = Math.PI
    this.x = Math.random() * this.platno.width * 0.3 + this.platno.width * 0.7
    this.cev = new Cev2(this)
    this.praviGranate()
  }

  mrdaNasumicno() {
    // this.pucaj()
    this.dodajSilu((Math.random() * this.potisak) - this.potisak/2)
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
    if (this.mrtav) return
    if (tipke[LEVO]) {
      this.ugao = Math.PI
      this.dodajSilu(this.potisak)
    }

    if (tipke[DESNO]) {
      this.ugao = 0
      this.dodajSilu(this.potisak * 0.6)
    }

    if (tipke[GORE]) {
      this.cev.nagore()
    }

    if (tipke[DOLE]) {
      this.cev.nadole()
    }

    if (tipke[ENTER]) {
      if (this.vreme.proteklo < vremePunjenja || !this.granate.length) return
      this.granate[this.granate.length-1].pucaj()
      this.trzaj()
      this.vreme.reset()
    }
  }

}
