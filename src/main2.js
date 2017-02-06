import Slika from 'core/Slika'
import slikaTenkPodnozje from 'slike/2d-bocno/partizanski-tenk-bez-cevi.png'

// 75, 32
const tenk = new Slika(slikaTenkPodnozje)
tenk.prevelicaj(0.5)
console.log(tenk.visina)
tenk.renderAsync()
