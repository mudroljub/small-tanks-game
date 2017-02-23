import TenkiciScena from './scena/TenkiciScena'
import '../game-ui/style.css'

/** INIT **/

const scena = new TenkiciScena()
scena.start()

document.querySelector('#screen').style.display = 'none'
document.querySelector('#platno').style.display = 'block'
document.querySelector('#ui').style.display = 'block'
