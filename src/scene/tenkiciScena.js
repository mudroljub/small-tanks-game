import {platno, ograniciVisinu} from 'io/platno'
import UI from 'klase/UI'
import Scena from 'klase/Scena'
import Pozadina from 'klase/Pozadina'
import Slika from 'klase/Slika'
import stanje from '../stanje'
import Tenk from '../akteri/Tenk'
import Tenk2 from '../akteri/Tenk2'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import slikaPlamen from 'slike/plamen.gif'
import sablon from './sablon.html'
import './style.scss'

const skalarTenka = window.innerWidth > 1280 ? 0.5 : 0.4

export default function tenkiciScena() {

  /** INIT **/

  ograniciVisinu()
  const nivoTla = platno.height * 0.8

  const pozadina = new Pozadina(slikaPozadina)
  const plamen = new Slika(slikaPlamen)
  plamen.skaliranjeObecaj(0.2)

  const tenk = new Tenk()
  tenk.y = nivoTla
  tenk.skaliranjeObecaj(skalarTenka)

  const tenk2 = new Tenk2()
  tenk2.y = nivoTla
  tenk2.skaliranjeObecaj(skalarTenka)

  const stanjeIgre = stanje  // mora u istom opsegu zbog sablona?
  const ui = new UI(() => eval('`' + sablon + '`'))

  const scena = new Scena()

  /** LOOP **/

  const proveriKraj = () => {
    if (tenk.mrtav || tenk2.mrtav) scena.stop()
  }

  scena.update = (dt) => {
    tenk.proveriTipke()
    tenk2.proveriTipke()
    if (!stanjeIgre.dvaIgraca) tenk2.automatuj(tenk)
    tenk.update(dt)
    tenk2.update(dt)
    tenk.proveriPogodak(tenk2)
    tenk2.proveriPogodak(tenk)
    proveriKraj()
  }

  scena.render = () => {
    pozadina.render()
    tenk.render()
    tenk2.render()
    ui.render()
    // plamen.x = tenk.x
    // plamen.y = tenk.y - tenk.visina
    // plamen.render()
  }
}
