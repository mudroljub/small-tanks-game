import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import platno from 'io/platno'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'

const vremePunjenja = 1000

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.ugao = Math.PI
    this.x = platno.width * 0.8
    this.cev = new Cev2(this)
    this.praviGranate()
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
