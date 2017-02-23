import {platno, ograniciVisinu} from 'io/platno'
import {tipke, tipkeReset, ENTER} from 'io/tipke'
import Scena from 'klase/Scena'
import UI from 'klase/UI'
import Pozadina from 'klase/Pozadina'
import stanje from '../stanje'
import Tenk from '../akteri/Tenk'
import Tenk2 from '../akteri/Tenk2'
import Plamen from '../efekti/Plamen'
import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import sablon from './sablon.html'
import './style.scss'

const nivoTla = platno.height * 0.8
const skalarTenka = window.innerWidth > 1280 ? 0.5 : 0.4
const zapaljivostTenka = 20
let brojac = 0
let gotovo = false

/** INIT **/

const pozadina = new Pozadina(slikaPozadina)
const tenk = new Tenk()
const tenk2 = new Tenk2()
const stanjeIgre = stanje  // mora u istom opsegu zbog sablona?
const plamen = new Plamen()
const plamen2 = new Plamen()
const ui = new UI(() => eval('`' + sablon + '`'))

/** POMOCNO **/

const proveriPlamen = (tenk, plamen) => {
  if (tenk.energija > zapaljivostTenka) return
  plamen.x = tenk.x
  plamen.y = tenk.y
  plamen.update()
}

/** LOOP **/

export default class TenkiciScena extends Scena {

  static init() {
    tipkeReset()
    ograniciVisinu()
    tenk.init()
    tenk2.init()
    tenk.y = nivoTla
    tenk2.y = nivoTla
    tenk.skaliranjeObecaj(skalarTenka)
    tenk2.skaliranjeObecaj(skalarTenka)
    gotovo = false
  }

  start() {
    TenkiciScena.init()
    super.start()
  }

  obradiUnose() {
    tenk.proveriTipke()
    if (stanje.dvaIgraca) tenk2.proveriTipke()
    if (gotovo && tipke[ENTER]) TenkiciScena.init()
  }

  update(dt) {
    if (!stanjeIgre.dvaIgraca) tenk2.automatuj(tenk)
    if (!gotovo) {
      tenk.proveriPogodak(tenk2)
      tenk2.proveriPogodak(tenk)
    }
    tenk.update(dt)
    tenk2.update(dt)
    proveriPlamen(tenk, plamen)
    proveriPlamen(tenk2, plamen2)
    if (tenk.mrtav || tenk2.mrtav) gotovo = true
    brojac++
  }

  render() {
    if (brojac % 2 === 0) return
    pozadina.render()
    tenk.render()
    tenk2.render()
    if (tenk.energija < zapaljivostTenka) plamen.render()
    if (tenk2.energija < zapaljivostTenka) plamen2.render()
    ui.render()
  }
}

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') TenkiciScena.init()
})
