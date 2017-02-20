import {ucitaj} from 'utils'
import tenkiciScena from './scena/tenkiciScena'
import stanje from './stanje'
import '../game-ui/style.css'

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
  document.querySelector('#screen').style.display = 'none'
  document.querySelector('#platno').style.display = 'block'
  document.querySelector('#ui').style.display = 'block'
  tenkiciScena()
})

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') tenkiciScena()
})
