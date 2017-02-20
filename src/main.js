import {ucitaj} from 'utils'
import tenkiciScena from './scene/tenkiciScena'
import stanje from './stanje'

const slike = [
  'assets/slike/tenkovi/jna-tenk-podnozje.png',
  'assets/slike/tenkovi/jna-tenk-cev.png',
  'assets/slike/granata.gif',
  'assets/slike/tenkovi/nemacki-tenk-unisten.png'
]

/** INIT **/

Promise.all(slike.map(ucitaj)).then(tenkiciScena)

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') tenkiciScena()
})
