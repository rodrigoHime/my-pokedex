import { combineReducers } from 'redux'
import { reducer as NavReducer } from './NavigationRedux'
import { reducer as PokemonReducer } from './PokemonRedux'

const rootReducer = combineReducers({
  nav: NavReducer,
  pokemon: PokemonReducer
})

export default rootReducer
