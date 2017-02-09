import {ucitaj} from 'utils'
import sceneController from './scene/Tenkici'
import slikaTenkPodnozje from 'slike/tenkovi/partizanski-tenk-bez-cevi.png'
import slikaTenkCev from 'slike/tenkovi/partizanski-tenk-cev2.png'
import slikaGranata from 'slike/granata.gif'

const slike = [slikaTenkPodnozje, slikaTenkCev, slikaGranata]
Promise.all(slike.map(ucitaj)).then(sceneController)
