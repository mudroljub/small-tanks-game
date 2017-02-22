import {platno, ograniciVisinu} from 'io/platno'
import UI from 'klase/UI'
import Scena from 'klase/Scena'
import Pozadina from 'klase/Pozadina'
import stanje from '../stanje'
import Tenk from '../akteri/Tenk'
import Tenk2 from '../akteri/Tenk2'
import Plamen from '../efekti/Plamen'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import sablon from './sablon.html'
import './style.scss'

const skalarTenka = window.innerWidth > 1280 ? 0.5 : 0.4

export default function tenkiciScena() {

  /** INIT **/

  ograniciVisinu()
  const nivoTla = platno.height * 0.8

  const pozadina = new Pozadina(slikaPozadina)

  const tenk = new Tenk()
  tenk.y = nivoTla
  tenk.skaliranjeObecaj(skalarTenka)

  const tenk2 = new Tenk2()
  tenk2.y = nivoTla
  tenk2.skaliranjeObecaj(skalarTenka)

  const stanjeIgre = stanje  // mora u istom opsegu zbog sablona?
  const ui = new UI(() => eval('`' + sablon + '`'))

  const scena = new Scena()

  const plamen = new Plamen()
  const plamen2 = new Plamen()

  /** POMOCNO **/

  const proveriKraj = () => {
    if (tenk.mrtav || tenk2.mrtav) scena.stop()
  }

  const proveriPlamen = (tenk, plamen) => {
    if (tenk.energija < 20) {
      plamen.x = tenk.x
      plamen.y = tenk.y
      plamen.update()
    }
  }

  /** LOOP **/

  scena.update = (dt) => {
    tenk.proveriTipke()
    tenk2.proveriTipke()
    if (!stanjeIgre.dvaIgraca) tenk2.automatuj(tenk)
    tenk.update(dt)
    tenk2.update(dt)
    tenk.proveriPogodak(tenk2)
    tenk2.proveriPogodak(tenk)
    proveriPlamen(tenk, plamen)
    proveriPlamen(tenk2, plamen2)
    proveriKraj()
  }

  scena.render = () => {
    pozadina.render()
    tenk.render()
    tenk2.render()
    if (tenk.energija < 20) plamen.render()
    if (tenk2.energija < 20) plamen2.render()
    ui.render()
  }
}

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') tenkiciScena()
})
