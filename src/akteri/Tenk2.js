// import tipke, {A, S, W, D, RAZMAK} from 'io/tipke'
import platno from 'io/platno'
import Tenk from './Tenk'
import Cev2 from './Cev2'
import slikaTenkPodnozje from 'slike/tenkovi/nemacki-tenk-podnozje.png'
import slikaTenkCev from 'slike/tenkovi/nemacki-tenk-cev.png'

export default class Tenk2 extends Tenk {

  constructor(src = slikaTenkPodnozje) {
    super(src)
    this.x = platno.width * 0.8
    // this.ugaoSlike = Math.PI
    this.cev = new Cev2(this, slikaTenkCev)
  }

}
