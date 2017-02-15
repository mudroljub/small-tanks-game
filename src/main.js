import {ucitaj} from 'utils'
import tenkiciScena from './scene/tenkiciScena'
window.tenkiciScena = tenkiciScena

const slike = [
  'assets/slike/tenkovi/jna-tenk-podnozje.png',
  'assets/slike/tenkovi/jna-tenk-cev.png',
  'assets/slike/granata.gif'
]

Promise.all(slike.map(ucitaj)).then(tenkiciScena)
