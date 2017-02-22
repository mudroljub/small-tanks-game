import stanje from './stanje'
import TenkiciScena from './scena/TenkiciScena'
import '../game-ui/style.css'

/** INIT **/

const scena = new TenkiciScena()
scena.start()

document.querySelector('#screen').style.display = 'none'
document.querySelector('#platno').style.display = 'block'
document.querySelector('#ui').style.display = 'block'

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') stanje.dvaIgraca = !stanje.dvaIgraca
  if (e.target.id == 'igraj-opet') scena.start()
})

document.addEventListener('keydown', e => {
  if (!TenkiciScena.ide && e.keyCode == 13) scena.start()
})
