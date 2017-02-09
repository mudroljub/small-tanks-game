import Scena from 'core/Scena'
import Pozadina from 'core/Pozadina'
import Tenk from '../akteri/Tenk'
import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'

const nivoTla = window.innerHeight * 0.8

export default function sceneController() {

  const scena = new Scena()
  const pozadina = new Pozadina(slikaPozadina)
  const tenk = new Tenk(slikaTenkPodnozje)
  tenk.y = nivoTla

  tenk.skaliranjeObecaj(0.6)

  scena.update = () => {
    tenk.proveriTipke()
    tenk.update()
  }

  scena.render = () => {
    pozadina.render()
    tenk.render()
  }

}
