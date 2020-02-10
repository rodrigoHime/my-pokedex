import { StyleSheet } from 'react-native'
import { Metrics, Colors } from '../../Themes'

const { pokemonListItemMetrics } = Metrics

export default StyleSheet.create({
  pokemonItemWrapper: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5
  },
  pokemonItem: {
    ...pokemonListItemMetrics.pokemonItem,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  pokemonBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    flexDirection: 'row'
  },
  pokemonTypeColor: {
    flex: 1
  },
  pokemonItemImage: {
    ...pokemonListItemMetrics.pokemonItemImage,
    alignSelf: 'center'
  },
  pokemonItemTextWrapper: {
    ...pokemonListItemMetrics.pokemonItemTextWrapper,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.transparentBlack0_7,
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  pokemonItemText: {
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'white'
  }
})
