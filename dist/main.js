/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 33);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return platno; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return podloga; });
/* unused harmony export sakrijPlatno */
/* unused harmony export pokaziPlatno */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ograniciVisinu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return dijagonalaPlatna; });
const platno = document.getElementById('platno') || document.createElement('canvas')
const podloga = platno.getContext('2d')
const dijagonalaPlatna = Math.sqrt(platno.height * platno.height + platno.width * platno.width)

if (!document.getElementById('platno')) {
  document.body.appendChild(platno)
  platno.id = 'platno'
}

platno.height = window.innerHeight || 600 // mora prvo visina
platno.width = document.body.clientWidth || 800
platno.style.backgroundColor = 'lightgray'
platno.focus()

/** FUNKCIJE **/

const sakrijPlatno = () => {
  platno.style.display = 'none'
}

const pokaziPlatno = () => {
  platno.style.display = 'block'
}

const ograniciVisinu = () => {
  if (platno.height > platno.width) platno.height = platno.width * 0.8
}

/** EXPORT **/


/* harmony default export */ __webpack_exports__["d"] = platno;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io_platno__ = __webpack_require__(0);
/* unused harmony export dajSliku */
/* harmony export (immutable) */ __webpack_exports__["a"] = ucitaj;
/* unused harmony export uRadijane */
/* unused harmony export uStepene */
/* harmony export (immutable) */ __webpack_exports__["b"] = pitagora;
/* unused harmony export randomRange */
/* unused harmony export nasumicnoOkruglo */
/* unused harmony export skaliranRazmak */


/** SLIKE **/

function dajSliku(src) {
  const slika = new Image()
  slika.src = src
  return slika
}

// vraca obecanje, rezultat se koristi sa .then()
function ucitaj(src) {
  return new Promise((uspeh, neuspeh) => {
    const img = new Image()
    img.onload = () => uspeh()
    img.onerror = () => neuspeh()
    img.src = src
  })
}

/** UGLOVI **/

function uRadijane(ugao) {
  return ugao * Math.PI / 180
}

function uStepene(uRadijane) {
  return uRadijane * 180 / Math.PI
}

function pitagora(x1, x2, y1, y2) {
  const duzinaX = x1 - x2
  const duzinaY = y1 - y2
  return Math.sqrt((duzinaX * duzinaX) + (duzinaY * duzinaY))
}

/** RANDOM **/

function randomRange(min, max) {
  return Math.random() * (max - min) + min
}

function nasumicnoOkruglo(min, max) {
  return Math.floor(randomRange(min, max + 1))
}

// vraca od 0 do 1 zavisno od razmaka dva predmeta, u odnosu na scenu
function skaliranRazmak(predmet, predmet2) {
  const razmak = predmet.razmakDo(predmet2)
  return 1 - razmak / __WEBPACK_IMPORTED_MODULE_0__io_platno__["e" /* dijagonalaPlatna */]
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = {
  dvaIgraca: false
};


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = sudara;
/* harmony export (immutable) */ __webpack_exports__["b"] = unutar;
/* POMOCNE FUNKCIJE */

const levo = predmet => {
  return predmet.x - predmet.sirina / 2
}

const desno = predmet => {
  return predmet.x + predmet.sirina / 2
}

const gore = predmet => {
  return predmet.y - predmet.visina / 2
}

const dole = predmet => {
  return predmet.y + predmet.visina / 2
}

/* SUDARNE FUNKCIJE */

function sudara(kvadrat1, kvadrat2) {
  return (
    dole(kvadrat1) > gore(kvadrat2) &&
    gore(kvadrat1) < dole(kvadrat2) &&
    desno(kvadrat1) > levo(kvadrat2) &&
    levo(kvadrat1) < desno(kvadrat2)
  )
}

function unutar(tacka, kvadrat) {
  return (
    tacka.x > levo(kvadrat) &&
    tacka.x < desno(kvadrat) &&
    tacka.y > gore(kvadrat) &&
    tacka.y < dole(kvadrat)
  )
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Slika__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_platno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__io_mish__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__akcije_sudari__ = __webpack_require__(3);






class Predmet extends __WEBPACK_IMPORTED_MODULE_0__Slika__["a" /* default */] {

  constructor(src, sirina, visina) {
    super(src, sirina, visina)
    this.dx = 0
    this.dy = 0
    this.ugao = 0
    this.brzina = 0
    this.platno = __WEBPACK_IMPORTED_MODULE_1__io_platno__["b" /* platno */]
    this.ziv = true
    this.vidljiv = true
    this.oznake = {}
  }

  update(delta) {
    this.x += this.dx * delta
    this.y += this.dy * delta
    this.proveriGranice()
  }

  /* POLOZAJ */

  tlo(y) {
    this.y = y - this.visina / 2
  }

  polozaj(x, y) {
    this.x = x
    this.y = y
  }

  /* KRETANJE */

  azurirajSilu(jacina = this.brzina, ugao = this.ugao) {
    this.dx = jacina * Math.cos(ugao)
    this.dy = jacina * Math.sin(ugao)
  }

  dodajSilu(jacina, ugao = this.ugao) {
    this.dx += jacina * Math.cos(ugao)
    this.dy += jacina * Math.sin(ugao)
  }

  get brzina() {
    return Math.sqrt(this.dx * this.dx + this.dy * this.dy)
  }

  set brzina(novaBrzina) {
    this.azurirajSilu(novaBrzina, this.ugao)
  }

  trenje(koeficijent = 0.1) {
    const modifikator = 1 - koeficijent
    this.dx *= modifikator
    this.dy *= modifikator
  }

  pomeri(razmak) {
    this.x += razmak * Math.cos(this.ugao)
    this.y += razmak * Math.sin(this.ugao)
  }

  stani() {
    this.brzina = 0
  }

  /* UGLOVI */

  get ugao() {
    return this._ugao
    // return Math.atan2(this.dy, this.dx)
  }

  set ugao(noviUgao) {
    this._ugao = noviUgao % (Math.PI * 2)
    if (this._ugao < 0) this._ugao += Math.PI * 2
    this.azurirajSilu()
  }

  ugaoKa(predmet) {
    const mojX = this.x + this.sirina / 2
    const mojY = this.y + this.visina / 2
    const tudjX = predmet.x + predmet.sirina / 2
    const tudjY = predmet.y + predmet.visina / 2
    return Math.atan2(tudjY - mojY, tudjX - mojX)
  }

  /* VIDLJIVOST */

  pokazi() {
    this.vidljiv = true
  }

  sakrij() {
    this.vidljiv = false
  }

  nestani() {
    this.sakrij()
    this.stani()
  }

  /* STANJE */

  get mrtav() {
    return !this.ziv
  }

  umri() {
    this.stani()
    this.zameniSliku(this.slikaMrtav)
    this.ziv = false
  }

  /* GRANICE */

  proveriGranice() {
    if (this.granice) this.granice(this)
  }

  /* KOLIZIJA */

  sudara(predmet) {
    if (!this.vidljiv || !predmet.vidljiv) return false
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__akcije_sudari__["a" /* sudara */])(this, predmet)
  }

  razmakDo(predmet) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* pitagora */])(this.x, predmet.x, this.y, predmet.y)
  }

  /* MISH */

  pratiMisha() {
    this.x = __WEBPACK_IMPORTED_MODULE_2__io_mish__["a" /* default */].x - __WEBPACK_IMPORTED_MODULE_1__io_platno__["b" /* platno */].offsetLeft
    this.y = __WEBPACK_IMPORTED_MODULE_2__io_mish__["a" /* default */].y - __WEBPACK_IMPORTED_MODULE_1__io_platno__["b" /* platno */].offsetTop
  }

  /* RENDER */

  render() {
    if (!this.vidljiv) return
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].save()
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].translate(this.x, this.y)
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].rotate(isNaN(this.ugaoSlike) ? this.ugao : this.ugaoSlike)
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].scale(this.z, this.z)
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].drawImage(this.slika, -this.sirina / 2, -this.visina / 2, this.sirina, this.visina)
    __WEBPACK_IMPORTED_MODULE_1__io_platno__["c" /* podloga */].restore()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Predmet;



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const A = 65, B = 66, C = 67, D = 68, E = 69, F = 70, G = 71, H = 72,
  I = 73, J = 74, K = 75, L = 76, M = 77, N = 78, O = 79, P = 80, Q = 81,
  R = 82, S = 83, T = 84, U = 85, V = 86, W = 87, X = 88, Y = 89, Z = 90,
  LEVO = 37, DESNO = 39, GORE = 38, DOLE = 40, RAZMAK = 32, SPEJS = 32,
  ENTER = 13, IZLAZ = 27, PGUP = 33, PGDOWN = 34, HOME = 36, END = 35,
  BR_0 = 48, BR_1 = 49, BR_2 = 50, BR_3 = 51, BR_4 = 52, BR_5 = 53, BR_6 = 54, BR_7 = 55, BR_8 = 56, BR_9 = 57
/* unused harmony export BR_9 */

/* unused harmony export BR_8 */

/* unused harmony export BR_7 */

/* unused harmony export BR_6 */

/* unused harmony export BR_5 */

/* unused harmony export BR_4 */

/* unused harmony export BR_3 */

/* unused harmony export BR_2 */

/* unused harmony export BR_1 */

/* unused harmony export BR_0 */

/* unused harmony export END */

/* unused harmony export HOME */

/* unused harmony export PGDOWN */

/* unused harmony export PGUP */

/* unused harmony export IZLAZ */

/* harmony export (immutable) */ __webpack_exports__["f"] = ENTER;

/* unused harmony export SPEJS */

/* harmony export (immutable) */ __webpack_exports__["k"] = RAZMAK;

/* harmony export (immutable) */ __webpack_exports__["e"] = DOLE;

/* harmony export (immutable) */ __webpack_exports__["d"] = GORE;

/* harmony export (immutable) */ __webpack_exports__["c"] = DESNO;

/* harmony export (immutable) */ __webpack_exports__["b"] = LEVO;

/* unused harmony export Z */

/* unused harmony export Y */

/* unused harmony export X */

/* harmony export (immutable) */ __webpack_exports__["i"] = W;

/* unused harmony export V */

/* unused harmony export U */

/* unused harmony export T */

/* harmony export (immutable) */ __webpack_exports__["j"] = S;

/* unused harmony export R */

/* unused harmony export Q */

/* unused harmony export P */

/* unused harmony export O */

/* unused harmony export N */

/* unused harmony export M */

/* unused harmony export L */

/* unused harmony export K */

/* unused harmony export J */

/* unused harmony export I */

/* unused harmony export H */

/* unused harmony export G */

/* unused harmony export F */

/* unused harmony export E */

/* harmony export (immutable) */ __webpack_exports__["h"] = D;

/* unused harmony export C */

/* unused harmony export B */

/* harmony export (immutable) */ __webpack_exports__["g"] = A;


const tipke = []

/* FUNCTIONS */

const neTresi = e => {
  if (e.keyCode === RAZMAK || e.keyCode === GORE || e.keyCode === DOLE) e.preventDefault()
}

const odluciKomandu = dodir => {
  if (dodir.pageY < window.innerHeight / 2) tipke[GORE] = true
  if (dodir.pageY >= window.innerHeight / 2) tipke[DOLE] = true
  if (dodir.pageX < window.innerWidth / 2) tipke[LEVO] = true
  if (dodir.pageX >= window.innerWidth / 2) tipke[DESNO] = true
}

/* EVENTS */

document.addEventListener('keydown', neTresi)
document.addEventListener('keydown', e => tipke[e.keyCode] = true)
document.addEventListener('keyup', e => tipke[e.keyCode] = false)

document.addEventListener('touchstart', e => odluciKomandu(e.touches[0]))
document.addEventListener('touchmove', e => odluciKomandu(e.touches[0]))

/* harmony default export */ __webpack_exports__["a"] = tipke;


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io_platno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_utils__ = __webpack_require__(1);



class Slika {

  constructor(src, sirina, visina) {
    this.x = Math.round(__WEBPACK_IMPORTED_MODULE_0__io_platno__["b" /* platno */].width / 2)
    this.y = Math.round(__WEBPACK_IMPORTED_MODULE_0__io_platno__["b" /* platno */].height / 2)
    this.z = 1
    this.ucitano = false
    const slika = this.slika = new Image()
    slika.addEventListener('load', () => {  // radi samo slika, nece this.slika
      this.sirina = sirina || this.slika.naturalWidth
      this.visina = visina || this.slika.naturalHeight
      this.ucitano = true
    })
    slika.src = this.slikaMrtav = src
  }

  get dijagonala() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_utils__["b" /* pitagora */])(0, this.sirina, 0, this.visina)
  }

  zameniSliku(src) {
    this.slika.src = src
  }

  /* VELICINA */

  velicina(sirina, visina) {
    this.sirina = sirina
    this.visina = visina
  }

  skaliraj(procenat) {
    this.sirina = Math.round(this.sirina * procenat)
    this.visina = Math.round(this.visina * procenat)
  }

  skaliranjeObecaj(procenat) {
    if (this.ucitano) this.skaliraj(procenat)
    else this.slika.onload = () => this.skaliraj(procenat)
  }

  // @param atribut string: 'sirina' ili 'visina'
  prevelicaj(atribut, novaVelicina) {
    const razmera = novaVelicina / this[atribut]
    this.skaliraj(razmera)
  }

  prevelicanjeObecaj(atribut, novaVelicina) {
    if (this.ucitano) this.prevelicaj(atribut, novaVelicina)
    else this.slika.onload = () => this.prevelicaj(atribut, novaVelicina)
  }

  /* RENDER */

  render() {
    const x = Math.round(this.x -this.sirina / 2)
    const y = Math.round(this.y -this.visina / 2)
    __WEBPACK_IMPORTED_MODULE_0__io_platno__["c" /* podloga */].drawImage(this.slika, x, y, this.sirina, this.visina)
  }

  renderObecaj() {
    if (this.ucitano) this.render()
    else this.slika.onload = () => this.render()
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Slika;



/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Vreme {

  constructor() {
    this.reset()
  }

  reset() {
    this.upamceno = Date.now()
  }

  get trenutno() {
    return Date.now()
  }

  get proteklo() {
    return this.trenutno - this.upamceno
  }

  get protekloSekundi() {
    return this.proteklo / 1000
  }

  get korak() {
    const prosloUpamceno = this.upamceno
    this.upamceno = this.trenutno
    return this.upamceno - prosloUpamceno
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Vreme;



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_klase_Predmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_io_platno__ = __webpack_require__(0);



class Cev extends __WEBPACK_IMPORTED_MODULE_0_klase_Predmet__["a" /* default */] {
  constructor(vlasnik, src) {
    super(src)
    this.vlasnik = vlasnik
    this.ugao = Math.PI + Math.PI * 0.9
  }

  update() {
    this.pratiTenk()
  }

  pratiTenk() {
    this.x = this.vlasnik.x * 1.01
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.33
  }

  nagore() {
    if (this.ugao > Math.PI && this.ugao < Math.PI * 1.8) return
    this.ugao -= 0.01
  }

  nadole() {
    if (this.ugao < Math.PI) return
    this.ugao += 0.01
  }

  render() {
    if (!this.vidljiv) return
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].save()
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].translate(this.x, this.y)
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].rotate(this.ugao)
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].scale(this.vlasnik.z, this.vlasnik.z)
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].drawImage(this.slika, 0, 0, this.sirina, this.visina)
    __WEBPACK_IMPORTED_MODULE_1_io_platno__["c" /* podloga */].restore()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cev;



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_io_tipke__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_io_platno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_klase_Predmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cev__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Granata__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_slike_tenkovi_jna_tenk_podnozje_png__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_slike_tenkovi_jna_tenk_podnozje_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_slike_tenkovi_jna_tenk_podnozje_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_jna_tenk_cev_png__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_jna_tenk_cev_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_jna_tenk_cev_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_jna_tenk_unisten_png__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_jna_tenk_unisten_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_jna_tenk_unisten_png__);










const napred = 0
const nazad = Math.PI
const statickoTrenje = 0.3
const kinetickoTrenje = 0.1
const vremePunjenja = 1000
const brojGranata = 100
let pripremi = false

class Tenk extends __WEBPACK_IMPORTED_MODULE_3_klase_Predmet__["a" /* default */] {

  constructor(src = __WEBPACK_IMPORTED_MODULE_6_slike_tenkovi_jna_tenk_podnozje_png___default.a) {
    super(src)
    this.x = Math.random() * this.platno.width * 0.3
    this.potisak = 30
    this.cev = new __WEBPACK_IMPORTED_MODULE_4__Cev__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_jna_tenk_cev_png___default.a)
    this.vreme = new __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__["a" /* default */]()
    this.granate = []
    this.praviGranate()
    this.ugaoSlike = napred
    this.energija = 100
    this.ime = 'Levi tenk'
    this.slikaMrtav = __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_jna_tenk_unisten_png___default.a
  }

  update(dt) {
    this.trenje()
    super.update(dt)
    this.cev.update(dt)
    this.granate.map((granata, i) => {
      granata.update(dt)
      if (granata.nestala) this.granate.splice(i, 1)
    })
    this.proveriSmrt()
  }

  render() {
    this.granate.map(g => g.render())
    this.cev.render()
    super.render()
  }

  skiniEnergiju(steta) {
    this.energija -= steta
    if (this.energija <= 0) this.energija = 0
  }

  proveriSmrt() {
    if (this.energija <= 0) this.umri()
  }

  proveriPogodak(predmet) {
    this.granate
      .filter(granata => granata.ispaljena)
      .map(granata => granata.proveriPogodak(predmet))
  }

  praviGranate() {
    for (let i = brojGranata - 1; i >= 0; i--) {
      this.granate[i] = new __WEBPACK_IMPORTED_MODULE_5__Granata__["a" /* default */](this.cev)
    }
  }

  skaliranjeObecaj(odsto) {
    super.skaliranjeObecaj(odsto)
    this.cev.skaliranjeObecaj(odsto)
    this.granate.map(g => g.skaliranjeObecaj(odsto))
  }

  trenje() {
    const koeficijent = (this.brzina > 0.1) ? kinetickoTrenje : statickoTrenje
    super.trenje(koeficijent)
  }

  proveriTipke() {
    if (this.mrtav) return
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["g" /* A */]] && this.x > 0) this.dodajSilu(this.potisak * 0.6, nazad)
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["h" /* D */]] && this.x < __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width / 2) this.dodajSilu(this.potisak, napred)
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["i" /* W */]]) this.cev.nagore()
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["j" /* S */]]) this.cev.nadole()

    // prebaciti nekako na tipke?
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["k" /* RAZMAK */]]) pripremi = true
    if (pripremi && !__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["k" /* RAZMAK */]]) {
      this.pucaj()
      pripremi = false
    }
  }

  pucaj() {
    if (this.vreme.proteklo < vremePunjenja || !this.granate.length) return
    let i = this.granate.length - 1
    while (this.granate[i].ispaljena && i > 0) i--  // trazi neispaljenu
    if (this.granate[i].ispaljena) return
    this.granate[i].pucaj()
    this.trzaj()
    this.vreme.reset()
  }

  trzaj() {
    this.dodajSilu(this.potisak * 2, nazad)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tenk;



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const gravitacija = 90
/* harmony export (immutable) */ __webpack_exports__["a"] = gravitacija;



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_io_platno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_klase_UI__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_klase_Scena__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_klase_Pozadina__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__stanje__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__akteri_Tenk__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__akteri_Tenk2__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_pozadine_razrusen_grad_savremen_jpg__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_pozadine_razrusen_grad_savremen_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slike_pozadine_razrusen_grad_savremen_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sablon_html__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sablon_html___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__sablon_html__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_scss__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__style_scss__);
/* harmony export (immutable) */ __webpack_exports__["a"] = tenkiciScena;











const skalarTenka = window.innerWidth > 1280 ? 0.5 : 0.4

function tenkiciScena() {

  /** INIT **/

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_io_platno__["a" /* ograniciVisinu */])()
  const nivoTla = __WEBPACK_IMPORTED_MODULE_0_io_platno__["b" /* platno */].height * 0.8

  const pozadina = new __WEBPACK_IMPORTED_MODULE_3_klase_Pozadina__["a" /* default */](__WEBPACK_IMPORTED_MODULE_7_slike_pozadine_razrusen_grad_savremen_jpg___default.a)

  const tenk = new __WEBPACK_IMPORTED_MODULE_5__akteri_Tenk__["a" /* default */]()
  tenk.y = nivoTla
  tenk.skaliranjeObecaj(skalarTenka)

  const tenk2 = new __WEBPACK_IMPORTED_MODULE_6__akteri_Tenk2__["a" /* default */]()
  tenk2.y = nivoTla
  tenk2.skaliranjeObecaj(skalarTenka)

  const stanjeIgre = __WEBPACK_IMPORTED_MODULE_4__stanje__["a" /* default */]  // mora u istom opsegu zbog sablona?
  const ui = new __WEBPACK_IMPORTED_MODULE_1_klase_UI__["a" /* default */](() => eval('`' + __WEBPACK_IMPORTED_MODULE_8__sablon_html___default.a + '`'))

  const scena = new __WEBPACK_IMPORTED_MODULE_2_klase_Scena__["a" /* default */]()

  /** LOOP **/

  const proveriKraj = () => {
    if (tenk.mrtav || tenk2.mrtav) scena.stop()
  }

  scena.update = (dt) => {
    tenk.proveriTipke()
    tenk2.proveriTipke()
    if (!stanjeIgre.dvaIgraca) tenk2.automatuj(tenk)
    tenk.update(dt)
    tenk2.update(dt)
    tenk.proveriPogodak(tenk2)
    tenk2.proveriPogodak(tenk)
    proveriKraj()
  }

  scena.render = () => {
    pozadina.render()
    tenk.render()
    tenk2.render()
    ui.render()
  }
}


/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akcije_sudari__ = __webpack_require__(3);


const mish = {
  stisnut: false,

  iznad(predmet) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_akcije_sudari__["b" /* unutar */])(mish, predmet)
  },

  stisnutIznad(predmet) {
    return mish.stisnut && mish.iznad(predmet)
  },

  dodajNishan() {
    document.body.setAttribute('style', 'cursor:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGIAAABhCAMAAAAa74SSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAF1QTFRFSkpKISEh7+/vCAgIpaWlEBAQGRkZMzMzKSkptbW1ra2tWlpa5ubm1tbWQkJCc3Nze3t7ZmZmUlJSmZmZhISE3t7excXFOjo6vb29zMzMjIyMa2trlJSUAAAA////c5NlVAAAAB90Uk5T////////////////////////////////////////AM0ZdhAAAAQySURBVHja7JrXlqQgEEBRJJlza6f//8ydbTATpZ2HPVtPPWeUC1VQVBC8XYTFjLE4dnrnDZyexq+PZBciAo7orkek1yPC6xHv/witdD3iiCgLv4/o2yQnWBBeCAW3uojC7yH6imL4OggKwD38BiIrqWT4SXDNfBFDgl8Gud19EJ0Z8COQPE8jih0ATebGaKs7CMZTiIFshid1yzrBHMemyoM1BpcnEOVqCQjc+8PR6+KKriAgc0XUyxyDR6Y63dFt9VjshOgWJdFS60BYjua13h0Q/UzAj9Dko6LbbPWHNWIIppfy3sYNFkjLkCCyiYAKyyuJTauGhRUinZ4PIutbL6w19jgi8snOmcvFWomthSMz4jG5ns7t7i6RamZ7RCNmQzrX8KAUbwIDIg3UWjJFIJOuSj0iERodzgQ5wuZ41CEirlDYnoqjQrEXax1CHNTkZKg28BmiSI14CkOEZ6PBBzdHrkbwhcL7+YBTjBCpEI1sDm6Ip2QIcLAEZD5hM+Bj9HKEMBbwiszZcVOtBqz4doj9gn+uikCO4Ka6eeYXLddUI0MwrqfCE9EF+6MFdng8+mZJ3AeRUILge4F45xf3z75FgwTBX6+8ESkPwJ5HRAZNh8I2S6K7uc6ImG9Zq9R+1IfJu+M1/yq5B9S/LC4dqi1RtLuRwPbgAfP0jOdz/EwErxBR00QxY1yDhA1/6yjRXuI4ZskqSKaN6ik2iEu8HVj8M3bzBunrYklBCK8lwF9AhP8I4hfM/a7BR/jBxUAt68wO5ernRDR143/VIdj64FpzpMJgWX2pqzfArSuaEYXZl/cTA2r9MQ9kgiMisnCDoXCD0dt8J+USZ87nN/o7c7K7WcFuhqU3QgzUSm693BQKWiJ4dL/yxQuC2zsIvxMe0FSCiKA2tbBFhHR/8Sw/O2q+lCwQYqalNBrkeRTu/RBcTziTIkQWVnkhRnTYNeAQneDMB1Efc5g1gu8p3TKMCLEIqkphxKFB/XmEqG60ylxPLCM/jbgjST66QaTU4KoNiKnMVGry7lZfPDAhRCxHtAUKkdvT9AyigLLMfo8QqZLqjGsR4lwdag/7sYTFFTUKHaLBitoDUBXVEkfEtIZjRH1AdFOgUTshGqQMHI5KZ1MlO0/tES1SLx6ol/wisS0igRr1Ao1aX6iyQiw9gpt1QTuaq/6EGe/utJqr5iC1L8svDLRpFh0RYbnEiIlTc6Gnq+ZFrESkj+U5WDj2L1KwJAWIFp0MEYFVGyVo3Bs96zbMC5Iqzua8O32nfZtv/q9uwujaVT3YZjeIkqkUTXaNrKA923R7UqsUClWdR+uwJUYITjqv7uTPXbk0i2RCHqNpBIs2bl+olhIkjcVnCHbN6Kyt6aYlCRG+FczqXZeW+tBMfankHjt8CvL/84YrEb/wqcmVH8zg6z/7AeQjbqv4I8AAaIQJ4m79R7UAAAAASUVORK5CYII=) 50 50, crosshair')
  },

  ukloniNishan() {
    document.body.setAttribute('style', 'cursor:auto')
  }
}

document.onmousemove = e => {
  mish.x = e.pageX
  mish.y = e.pageY
}
document.onmousedown = () => mish.stisnut = true
document.onmouseup = () => mish.stisnut = false

/* harmony default export */ __webpack_exports__["a"] = mish;


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__klase_Slika__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__io_platno__ = __webpack_require__(0);



class Pozadina extends __WEBPACK_IMPORTED_MODULE_0__klase_Slika__["a" /* default */] {

  constructor(slika) {
    super(slika, __WEBPACK_IMPORTED_MODULE_1__io_platno__["d" /* default */].width, __WEBPACK_IMPORTED_MODULE_1__io_platno__["d" /* default */].height)
    this.x = __WEBPACK_IMPORTED_MODULE_1__io_platno__["d" /* default */].width / 2
    this.y = __WEBPACK_IMPORTED_MODULE_1__io_platno__["d" /* default */].height / 2
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Pozadina;



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__io_platno__ = __webpack_require__(0);


let then = 0

class Scena {

  constructor() {
    this.predmeti = []
    this.platno = __WEBPACK_IMPORTED_MODULE_0__io_platno__["b" /* platno */]
    this.podloga = __WEBPACK_IMPORTED_MODULE_0__io_platno__["c" /* podloga */]
    this.nivoTla = this.visina
    this.loopID = null
    this.start()
  }

  dodaj(...premeti) {
    this.predmeti.push(...premeti)
  }

  /* PETLJA */

  proveriUnose() {
    this.predmeti
      .filter(predmet => 'proveriTipke' in predmet)
      .map(predmet => predmet.proveriTipke())
  }

  update(dt) {
    this.predmeti
      .filter(predmet => 'update' in predmet)
      .map(predmet => predmet.update(dt))
  }

  render() {
    this.predmeti
      .filter(predmet => 'render' in predmet)
      .map(predmet => predmet.render())
  }

  loop(time) {
    const now = time / 1000 || 0
    const delta = now - then
    this.loopID = window.requestAnimationFrame(this.loop.bind(this))
    this.proveriUnose()
    this.update(delta)
    if (this.customUpdate) this.customUpdate()
    this.cisti()
    this.render()
    then = now
  }

  start() {
    if (this.loopID) return
    this.loop()
  }

  stop() {
    if (!this.loopID) return
    window.cancelAnimationFrame(this.loopID)
    this.loopID = null
  }

  end() {
    this.stop()
    this.cisti()
    this.predmeti = []
  }

  get ide() {
    return Boolean(this.loopID)
  }

  /* POZADINA */

  set bojaPozadine(boja) {
    // this.platno.style.backgroundColor = boja
    this.podloga.fillStyle = boja
  }

  get bojaPozadine() {
    return this.podloga.fillStyle
  }

  cisti() {
    this.podloga.clearRect(0, 0, this.sirina, this.visina)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scena;



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/*
* @param sablon: funkcija koja vraca sablon
*/
class UI {

  constructor(sablon, id = 'ui') {
    this.upamcen = ''
    this.sablon = sablon
    this.element = document.getElementById(id) || document.createElement('div')
    if (!document.getElementById(id)) {
      document.body.appendChild(this.element)
      this.element.id = id
    }
  }

  render() {
    if (this.upamcen === this.sablon()) return
    this.element.innerHTML = this.sablon()
    this.upamcen = this.sablon()
  }

  clear() {
    this.element.innerHTML = ''
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = UI;



/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "body {\n  font-size: 100%;\n  background-color: black; }\n\n.progress {\n  background: #4D5234;\n  color: #4D5234;\n  margin-bottom: 5px; }\n\n.progress::-webkit-progress-bar {\n  background: #4D5234;\n  color: #4D5234; }\n\n.progress::-webkit-progress-value {\n  background: #4D5234;\n  color: #4D5234; }\n\n.progress::-moz-progress-bar {\n  background: #4D5234;\n  color: #4D5234; }\n\n.komande1,\n.komande2 {\n  width: 140px; }\n\n.prozorce {\n  background-color: rgba(0, 0, 0, 0.8); }\n\n#dva-igraca {\n  padding: 5px 10px;\n  font-size: 16px; }\n\nbutton.bg-avocado:hover {\n  background-color: #4D5234; }\n", ""]);

// exports


/***/ }),
/* 17 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/granata.1c4cd671cc4d0e39ae2df33baa993fed.gif";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/plamen.b571248e011c7daa3e33ded18bd7f544.gif";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/pozadine/razrusen-grad-savremen.ae55b0fd51f032edf8cb627a1cc49b14.jpg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/jna-tenk-cev.82ed0aac7d6de7654a69bb3d4fb4609f.png";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/jna-tenk-podnozje.5b15b0f3310e50c84a34fbefa20a2aad.png";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/jna-tenk-unisten.b2734afd26a200fd7e9c57e363b858fb.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/nemacki-tenk-cev.be95abcc860d72d85f06929eb8378c7f.png";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/nemacki-tenk-podnozje.3337c1c82136078fe0ec6a40f2095774.png";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/slike/tenkovi/nemacki-tenk-unisten.6742526c9dd6245bdc434b2df91ad252.png";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<div class='interfejs bg-poluprovidno komande1'>\n  <b>${tenk.ime}</b>\n  <div class=\"progress-wrapper\">\n    <progress class=\"progress\" value='${tenk.energija}' max='100'></progress>\n    <div class=\"energija\">${tenk.energija}</div>\n  </div>\n    A - levo<br>\n    D - desno<br>\n    W - gore<br>\n    S - dole<br>\n    space - puca\n</div>\n\n<div class='interfejs bg-poluprovidno komande2'>\n  <span class='bold'>${tenk2.ime}</span>\n  <div class=\"progress-wrapper\">\n    <progress class=\"progress\" value='${tenk2.energija}' max='100'></progress>\n    <div class=\"energija\">${tenk2.energija}</div>\n  </div>\n  <div class=\"${stanjeIgre.dvaIgraca ? '' : 'hide'}\">\n    ← levo<br>\n    → desno<br>\n    ↑ gore<br>\n    ↓ dole<br>\n    enter - puca\n  </div>\n  <button id=\"dva-igraca\" class=\"${stanjeIgre.dvaIgraca ? 'bg-avocado' : ''} full\">${stanjeIgre.dvaIgraca ? 'Uključi<br> neprijatelja' : 'Dodaj igrača'}</button>\n</div>\n\n<div class=\"${scena.ide ? 'hide' : ''} prozorce pointer bg-black\">\n  <p class=\"avocado\">${tenk.mrtav ? tenk.ime : tenk2.ime} je uništen.</p>\n  <p class=\"valencia\">${tenk.ziv ? tenk.ime : tenk2.ime} je pobedio ovu borbu.</p>\n  <h2><button id=\"igraj-opet\" class=\"white\">Igraj opet</button></h2>\n</div>\n";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(28)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./style.scss", function() {
			var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/sass-loader/lib/loader.js!./style.scss");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cev__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slike_tenkovi_nemacki_tenk_cev_png__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_slike_tenkovi_nemacki_tenk_cev_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_slike_tenkovi_nemacki_tenk_cev_png__);



class Cev2 extends __WEBPACK_IMPORTED_MODULE_0__Cev__["a" /* default */] {

  constructor(vlasnik, src = __WEBPACK_IMPORTED_MODULE_1_slike_tenkovi_nemacki_tenk_cev_png___default.a) {
    super(vlasnik, src)
    this.ugao = Math.PI * 1.1
  }

  pratiTenk() {
    this.x = this.vlasnik.x - this.vlasnik.sirina * 0.16
    this.y = this.vlasnik.y - this.vlasnik.visina * 0.2
  }

  nagore() {
    if (this.ugao > Math.PI * 1.2) return
    this.ugao += 0.01
  }

  nadole() {
    if (this.ugao < Math.PI) return
    this.ugao -= 0.01
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Cev2;



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_akcije_sudari__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_klase_Predmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__konstante__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slike_plamen_gif__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_slike_plamen_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_slike_plamen_gif__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_slike_granata_gif__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_slike_granata_gif___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_slike_granata_gif__);






const potisak = 500
const silaUdara = 50
let energijaMete = 0

class Granata extends __WEBPACK_IMPORTED_MODULE_1_klase_Predmet__["a" /* default */] {
  constructor(vlasnik, src = __WEBPACK_IMPORTED_MODULE_4_slike_granata_gif___default.a) {
    super(src)
    this.vlasnik = vlasnik
    this.z = vlasnik.z
    this.nivoTla = this.platno.height - Math.random() * this.platno.height * 0.2
    this.ispaljena = false
    this.nestala = false
    this.plamen = new __WEBPACK_IMPORTED_MODULE_1_klase_Predmet__["a" /* default */](__WEBPACK_IMPORTED_MODULE_3_slike_plamen_gif___default.a)
    this.plamen.skaliranjeObecaj(0.4)
    this.plamen.sakrij()
    this.sakrij()
  }

  update(dt) {
    if (!this.ispaljena) return
    this.dodajSilu(__WEBPACK_IMPORTED_MODULE_2__konstante__["a" /* gravitacija */] * dt, Math.PI / 2)
    this.azurirajUgao()
    this.proveriTlo()
    super.update(dt)
  }

  // TODO: prebaciti na Predmet
  azurirajUgao() {
    this.ugao = Math.atan2(this.dy, this.dx)
  }

  postavi() {
    this.x = Math.cos(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.x
    this.y = Math.sin(this.vlasnik.ugao) * this.vlasnik.dijagonala + this.vlasnik.y
    this.ugao = this.vlasnik.ugao
  }

  pucaj() {
    this.pokazi()
    this.postavi()
    this.dodajSilu(potisak)
    this.ispaljena = true
  }

  sudara(predmet) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_akcije_sudari__["a" /* sudara */])(this, predmet)
  }

  proveriTlo() {
    if (this.y > this.nivoTla) this.nestani()
  }

  proveriPogodak(predmet) {
    if (!this.sudara(predmet)) return
    this.eksplodiraj()
    this.nestani()
    energijaMete = energijaMete || predmet.energija
    predmet.dodajSilu(-silaUdara)
    predmet.skiniEnergiju(Math.round(Math.random() * energijaMete / 3))
  }

  eksplodiraj() {
    this.plamen.x = this.x
    this.plamen.y = this.y
    this.plamen.pokazi()
  }

  nestani() {
    super.nestani()
    this.nestala = true
  }

  render() {
    super.render()
    this.plamen.render()
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Granata;



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_io_tipke__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_io_platno__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Tenk__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Cev2__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__stanje__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__konstante__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_nemacki_tenk_podnozje_png__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_nemacki_tenk_podnozje_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_nemacki_tenk_podnozje_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_nemacki_tenk_unisten_png__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_nemacki_tenk_unisten_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_nemacki_tenk_unisten_png__);










const napred = Math.PI
const nazad = 0
const vremeGasa = new __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__["a" /* default */]()
const vremeSmera = new __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__["a" /* default */]()
const vremePucanja = new __WEBPACK_IMPORTED_MODULE_2_klase_Vreme__["a" /* default */]()
let pripremi = false

class Tenk2 extends __WEBPACK_IMPORTED_MODULE_3__Tenk__["a" /* default */] {

  constructor(src = __WEBPACK_IMPORTED_MODULE_7_slike_tenkovi_nemacki_tenk_podnozje_png___default.a) {
    super(src)
    this.ugao = Math.PI
    this.x = this.platno.width - Math.random() * this.platno.width * 0.3 - 100
    this.cev = new __WEBPACK_IMPORTED_MODULE_4__Cev2__["a" /* default */](this)
    this.praviGranate()
    this.ime = 'Desni tenk'
    this.slikaMrtav = __WEBPACK_IMPORTED_MODULE_8_slike_tenkovi_nemacki_tenk_unisten_png___default.a
  }

  automatuj(predmet) {
    if (predmet.mrtav) return
    this.mrdajNasumicno()
    this.nisani(predmet)
    this.pucajNasumicno()
  }

  nisani(predmet) {
    this.cev.ugao = Math.PI + this.razmakDo(predmet) / (__WEBPACK_IMPORTED_MODULE_6__konstante__["a" /* gravitacija */] * __WEBPACK_IMPORTED_MODULE_6__konstante__["a" /* gravitacija */] * 0.8)
  }

  mrdajNasumicno() {
    const random = Math.random()
    if (vremeGasa.proteklo > 70) {
      this.dodajSilu((random * this.potisak))
      vremeGasa.reset()
    }
    if (vremeSmera.proteklo > 300) {
      this.ugao = random > 0.55 ? nazad : napred
      vremeSmera.reset()
    }
    if (this.x > __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width) this.x = __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width
    if (this.x > __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width * 0.9) this.ugao = napred
    if (this.x < __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width / 2) this.ugao = nazad
  }

  pucajNasumicno() {
    if (vremePucanja.proteklo < 2500) return
    this.pucaj()
    vremePucanja.reset()
  }

  proveriTipke() {
    if (this.mrtav || !__WEBPACK_IMPORTED_MODULE_5__stanje__["a" /* default */].dvaIgraca) return
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["b" /* LEVO */]] && this.x > __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width / 2) this.dodajSilu(this.potisak, napred)
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["c" /* DESNO */]] && this.x < __WEBPACK_IMPORTED_MODULE_1_io_platno__["d" /* default */].width) this.dodajSilu(this.potisak * 0.6, nazad)
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["d" /* GORE */]]) this.cev.nagore()
    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["e" /* DOLE */]]) this.cev.nadole()

    if (__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["f" /* ENTER */]]) pripremi = true
    if (pripremi && !__WEBPACK_IMPORTED_MODULE_0_io_tipke__["a" /* default */][__WEBPACK_IMPORTED_MODULE_0_io_tipke__["f" /* ENTER */]]) {
      this.pucaj()
      pripremi = false
    }
  }

  trzaj() {
    this.dodajSilu(this.potisak * 2, nazad)
  }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Tenk2;



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scene_tenkiciScena__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stanje__ = __webpack_require__(2);




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

Promise.all(slike.map(__WEBPACK_IMPORTED_MODULE_0_utils__["a" /* ucitaj */])).then(() => {
  document.querySelector('#screen').classList.add('hide')
  document.querySelector('#platno').classList.remove('hide')
  document.querySelector('#ui').classList.remove('hide')
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__scene_tenkiciScena__["a" /* default */])()
})

/** EVENTS **/

document.addEventListener('click', e => {
  if (e.target.id == 'dva-igraca') __WEBPACK_IMPORTED_MODULE_2__stanje__["a" /* default */].dvaIgraca = !__WEBPACK_IMPORTED_MODULE_2__stanje__["a" /* default */].dvaIgraca
  if (e.target.id == 'igraj-opet') __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__scene_tenkiciScena__["a" /* default */])()
})


/***/ })
/******/ ]);
//# sourceMappingURL=main.js.map