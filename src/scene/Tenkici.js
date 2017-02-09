import Scena from 'klase/Scena'
import Pozadina from 'klase/Pozadina'
import Tenk from '../akteri/Tenk'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'

const nivoTla = window.innerHeight * 0.8

export default function sceneController() {

  const scena = new Scena()
  const pozadina = new Pozadina(slikaPozadina)
  const tenk = new Tenk()
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
