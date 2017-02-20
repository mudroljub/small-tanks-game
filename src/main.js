import {ucitaj} from 'utils'
import tenkiciScena from './scene/tenkiciScena'
import stanje from './stanje'

const slike = [
  'assets/slike/pozadine/razrusen-grad-savremen.jpg',
  'assets/slike/tenkovi/jna-tenk-podnozje.png',
  'assets/slike/tenkovi/jna-tenk-cev.png',
  'assets/slike/tenkovi/jna-tenk-unisten.png',
  'assets/slike/tenkovi/nemacki-tenk-podnozje.png',
  'assets/slike/tenkovi/nemacki-tenk-cev.png',
  'assets/slike/tenkovi/nemacki-tenk-unisten.png',
  'assets/slike/granata.gif'
]

/** INIT **/

Promise.all(slike.map(ucitaj)).then(() => {
  document.querySelector('#screen').classList.add('hide')
  document.querySelector('#platno').classList.remove('hide')
  document.querySelector('#ui').classList.remove('hide')
  tenkiciScena()
})

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') tenkiciScena()
})
