import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  pokemonsRequest: ['limit', 'offset'],
  pokemonsRequestSuccess: ['pokemons'],
  pokemonsRequestFailure: null,
  pokemonsSpecieRequest: ['pokemonId'],
  pokemonsSpecieRequestSuccess: ['pokemonSpecie'],
  pokemonsSpecieRequestFailure: null
})

export const PokemonTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  pokemons: [],
  pokemonsRequesting: false,
  pokemonsRequestingError: false,
  pokemonSpecie: {},
  pokemonSpecieRequesting: false,
  pokemonSpecieRequestingError: false
})

/* ------------- Reducers ------------- */

export const pokemonsRequest = (state) =>
  state.merge({ pokemonsRequesting: true })

export const pokemonsRequestSuccess = (state, { pokemons }) => {
  return state.merge({ pokemonsRequesting: false, pokemonsRequestingError: false, pokemons: [...state.pokemons, ...pokemons] })
}

export const pokemonsRequestFailure = state =>
  state.merge({ pokemonsRequesting: false, pokemonsRequestingError: true })

export const pokemonsSpecieRequest = (state) =>
  state.merge({ pokemonSpecieRequesting: true, pokemonSpecie: {} })

export const pokemonsSpecieRequestSuccess = (state, { pokemonSpecie }) => {
  return state.merge({ pokemonSpecieRequesting: false, pokemonSpecieRequestingError: null, pokemonSpecie })
}

export const pokemonsSpecieRequestFailure = state =>
  state.merge({ pokemonSpecieRequesting: false, pokemonSpecieRequestingError: true })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.POKEMONS_REQUEST]: pokemonsRequest,
  [Types.POKEMONS_REQUEST_SUCCESS]: pokemonsRequestSuccess,
  [Types.POKEMONS_REQUEST_FAILURE]: pokemonsRequestFailure,
  [Types.POKEMONS_SPECIE_REQUEST]: pokemonsSpecieRequest,
  [Types.POKEMONS_SPECIE_REQUEST_SUCCESS]: pokemonsSpecieRequestSuccess,
  [Types.POKEMONS_SPECIE_REQUEST_FAILURE]: pokemonsSpecieRequestFailure
})
