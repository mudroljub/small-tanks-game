import {ucitaj} from 'utils'
import platno from 'io/platno'
import UI from 'core/UI'
import Scena from 'core/Scena'
import Pozadina from 'core/Pozadina'
import TenkPartizanski from './akteri/TenkPartizanski'
import TenkNemacki from './akteri/TenkNemacki'
import html from './sablon.html'

import slikaPozadina from 'slike/pozadine/razrusen-grad-savremen.jpg'
import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/2d-bocno/partizanski-tenk-cev.png'

const slike = [slikaPozadina, slikaTenkPodnozje, slikaTenkCev]

function init() {

  /*** KONFIG ***/

  const visinaTla = platno.height * 0.85

  /*** INIT ***/

  const tenk1 = new TenkPartizanski(100, visinaTla)
  const tenk2 = new TenkNemacki(650, visinaTla)
  const pozadina = new Pozadina(slikaPozadina)
  const scena = new Scena()
  const interfejs = new UI(() => html)

  /*** FUNKCIJE ***/

  const reset = () => {
    const x1 = (Math.random() * platno.width / 2)
    const x2 = (Math.random() * platno.width / 2) + platno.width / 2
    tenk1.polozaj(x1, visinaTla)
    tenk2.polozaj(x2, visinaTla)
    tenk1.energija = tenk2.energija = 100
  }

  const proveriPogodak = (granata, tenk, pomak) => {
    if (granata.sudara(tenk)) {
      tenk.energija -= Math.round(Math.random() * 100)
      granata.nestani()
      tenk.x += pomak
      if (tenk.energija <= 0) {
        tenk.energija = 0
        reset()
      }
    }
  }

  /*** LOGIKA ***/

  scena.update = () => {
    tenk2.proveriTipke()
    tenk1.update()
    tenk2.update()
    proveriPogodak(tenk1.granata, tenk2, 2)
    proveriPogodak(tenk2.granata, tenk1, -2)
  }

  scena.render = () => {
    pozadina.render()
    interfejs.render()
    tenk1.render()
    tenk2.render()
  }

  reset()
  scena.start()
}

Promise.all(slike.map(ucitaj)).then(init)
