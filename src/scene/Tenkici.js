import platno from 'io/platno'
import UI from 'klase/UI'
import Scena from 'klase/Scena'
import Pozadina from 'klase/Pozadina'
import Tenk from '../akteri/Tenk'
import Tenk2 from '../akteri/Tenk2'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import sablon from './sablon.html'
import './style.css'

const nivoTla = platno.height * 0.8
const skalarSlikeTenka = 0.6

export default function sceneController() {

  const scena = new Scena()
  const pozadina = new Pozadina(slikaPozadina)
  const tenk = new Tenk()
  tenk.y = nivoTla

  const tenk2 = new Tenk2()
  tenk2.y = nivoTla
  tenk2.x = platno.width * 0.8

  tenk.skaliranjeObecaj(skalarSlikeTenka)
  tenk2.skaliranjeObecaj(skalarSlikeTenka)

  const ui = new UI(() => eval('`' + sablon + '`'))

  scena.update = () => {
    tenk.proveriTipke()
    tenk2.proveriTipke()
    tenk.update()
    tenk2.update()
  }

  scena.render = () => {
    pozadina.render()
    tenk.render()
    tenk2.render()
    ui.render()
  }

}
