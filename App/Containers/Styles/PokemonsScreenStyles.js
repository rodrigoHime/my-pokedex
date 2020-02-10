import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

const { pokemonsScreenMetrics } = Metrics

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackground
  },
  loadingScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loadingScreenText: {
    ...pokemonsScreenMetrics.loadingScreenText,
    ...Fonts.style.regular,
    color: 'grey'
  },
  pokemonList: {
    ...pokemonsScreenMetrics.pokemonList
  },
  pokemonListColumn: {
    ...pokemonsScreenMetrics.pokemonListColumn,
    width: '100%'
  },
  pokemonListFooter: {
    ...pokemonsScreenMetrics.pokemonListFooter
  }
})
