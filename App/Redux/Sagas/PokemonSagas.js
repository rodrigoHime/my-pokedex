import { call, put, all } from 'redux-saga/effects'
import PokemonActions from '../Ducks/PokemonRedux'
import { path } from 'ramda'

export function * listPokemons (api, { limit, offset }) {
  const response = yield call(api.pokemon.index, limit, offset)

  if (response.ok) {
    const pokemonList = path(['data', 'results'], response)

    const re = new RegExp('/pokemon.*/([^/]+)/?$')

    const pokemonInfos = yield all(pokemonList.map(pokemon => {
      const pokemonId = pokemon.url.match(re)[1]
      return call(api.pokemon.show, pokemonId)
    }))

    const pokemonInfosParsed = pokemonInfos.map(pokemonInfo => {
      return pokemonInfo.data
    })

    yield put(PokemonActions.pokemonsRequestSuccess(pokemonInfosParsed))
  } else {
    yield put(PokemonActions.pokemonsRequestFailure())
  }
}

export function * getPokemonSpecie (api, { pokemonId }) {
  const response = yield call(api.pokemon.specie, pokemonId)

  if (response.ok) {
    yield put(PokemonActions.pokemonsSpecieRequestSuccess(response.data))
  } else {
    yield put(PokemonActions.pokemonSpecieRequestFailure())
  }
}

