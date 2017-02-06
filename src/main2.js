import {ucitaj} from 'utils'
import Slika from 'core/Slika'
import Scena from 'core/Scena'
import slikaTenkPodnozje from 'slike/predmeti/partizanski-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/predmeti/partizanski-tenk-cev.png'
const slike = [slikaTenkPodnozje, slikaTenkCev]

function init() {

  const scena = new Scena()
  const tenk = new Slika(slikaTenkPodnozje)

  tenk.prevelicaj('visina', 200)

  scena.start()
  scena.render = () => {
    tenk.render()
  }

}

Promise.all(slike.map(ucitaj)).then(init)
