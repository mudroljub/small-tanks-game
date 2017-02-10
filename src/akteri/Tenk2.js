import tipke, {LEVO, DESNO, GORE, DOLE, ENTER} from 'io/tipke'
import platno from 'io/platno'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'
import slikaTenkCev from 'slike/tenkovi/nemacki-tenk-cev.png'

const potisak = 0.5
const vremePunjenja = 1000

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.x = platno.width * 0.8
    // this.ugaoSlike = Math.PI
    this.cev = new Cev2(this, slikaTenkCev)
  }

  proveriTipke() {
    if (tipke[LEVO]) {
      this.dodajSilu(potisak, Math.PI)
    }

    if (tipke[DESNO]) {
      this.dodajSilu(potisak * 0.6, 0)
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
