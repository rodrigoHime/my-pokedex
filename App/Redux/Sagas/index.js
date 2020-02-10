import { takeLatest, all } from 'redux-saga/effects'
import API from '../../Services/Api'

/* ------------- Types ------------- */

import { StartupTypes } from '../Ducks/StartupRedux'
import { PokemonTypes } from '../Ducks/PokemonRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { listPokemons, getPokemonSpecie } from './PokemonSagas'

/* ------------- API ------------- */

const api = API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    takeLatest(StartupTypes.STARTUP, startup),
    takeLatest(PokemonTypes.POKEMONS_REQUEST, listPokemons, api),
    takeLatest(PokemonTypes.POKEMONS_SPECIE_REQUEST, getPokemonSpecie, api)
  ])
}
