import { Colors } from '../Themes'

const getColorByPokemonType = (pokemonType) => Colors[`${pokemonType}PokemonType`]

export default {
  getColorByPokemonType
}
