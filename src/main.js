import {ucitaj} from 'utils'
import sceneController from './scene/Tenkici'
import slikaTenkPodnozje from 'slike/tenkovi/jna-tenk-podnozje.png'
import slikaTenkCev from 'slike/tenkovi/jna-tenk-cev.png'
import slikaGranata from 'slike/granata.gif'

const slike = [slikaTenkPodnozje, slikaTenkCev, slikaGranata]
Promise.all(slike.map(ucitaj)).then(sceneController)
