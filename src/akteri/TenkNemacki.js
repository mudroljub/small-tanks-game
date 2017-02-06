import * as $ from 'konstante'
import TenkBocnoIgrac from './TenkBocnoIgrac'
import slikaTenkPodnozje from 'slike/2d-bocno/nemacki-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/2d-bocno/nemacki-tenk-cev.png'

export default class TenkNemacki extends TenkBocnoIgrac  {

  constructor(x = 650, y = 450) {
    super(slikaTenkPodnozje)
    this.polozaj(x, y)
    this.prevelicanjeObecaj('sirina', 82)
    this.postaviCev(slikaTenkCev, 100, 7)
    this.okrenutNadesno = false
    this.podesiTipke($.LEVO, $.DESNO, $.GORE, $.DOLE, $.M)
  }

}
