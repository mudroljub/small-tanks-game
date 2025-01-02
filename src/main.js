import TenkiciScena from './scena/TenkiciScena.js'

const scena = new TenkiciScena()
scena.start()

document.querySelector('#screen').style.display = 'none'
document.querySelector('#platno').style.display = 'block'
document.querySelector('#ui').style.display = 'block'
