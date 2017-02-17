import {platno, ograniciVisinu} from 'io/platno'
import UI from 'klase/UI'
import Scena from 'klase/Scena'
import Pozadina from 'klase/Pozadina'
import Tenk from '../akteri/Tenk'
import Tenk2 from '../akteri/Tenk2'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import sablon from './sablon.html'
import './style.scss'

const skalarTenka = window.innerWidth > 1280 ? 0.6 : 0.5

export default function tenkiciScena() {

  /** INIT **/

  ograniciVisinu()
  const nivoTla = platno.height * 0.8

  const scena = new Scena()
  const pozadina = new Pozadina(slikaPozadina)

  const tenk = new Tenk()
  tenk.y = nivoTla
  tenk.skaliranjeObecaj(skalarTenka)

  const tenk2 = new Tenk2()
  tenk2.y = nivoTla
  tenk2.skaliranjeObecaj(skalarTenka)

  const ui = new UI(() => eval('`' + sablon + '`'))

  scena.dodaj(pozadina, tenk, tenk2, ui)

  /** LOOP **/

  scena.customUpdate = () => {
    tenk2.igrajSamostalno()
    tenk.proveriPogodak(tenk2)
    tenk2.proveriPogodak(tenk)
    if (tenk.mrtav || tenk2.mrtav) scena.stop()
  }
}
