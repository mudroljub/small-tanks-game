import Scena from 'core/Scena'
import Tenk from '../akteri/Tenk'
import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'

export default function sceneController() {

  const scena = new Scena()
  const tenk = new Tenk(slikaTenkPodnozje)

  tenk.skaliranjeObecaj(0.75)

  scena.update = () => {
    tenk.proveriTipke()
    tenk.update()
  }

  scena.render = () => {
    tenk.render()
  }

}
