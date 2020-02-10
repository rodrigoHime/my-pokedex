import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../Themes/'

const { navigationMetrics } = Metrics

export default StyleSheet.create({
  headerLeftImage: {
    ...navigationMetrics.headerLeftImage,
    resizeMode: 'contain',
    tintColor: 'white'
  }
})

export const primaryNavStackStyles = StyleSheet.create({
  headerStyle: {
    backgroundColor: Colors.defaultHeaderBackgroundColor
  }
})

export const pokemonsScreenStyles = StyleSheet.create({
  headerTitleStyle: {
    color: 'white'
  },
  headerBackTitleStyle: {
    color: 'white'
  }
})

export const pokemonDetailsStyles = StyleSheet.create({
  headerTitleStyle: {
    color: 'white'
  },
  headerBackTitleStyle: {
    color: 'white'
  },
  headerLeftContainerStyle: {
    ...navigationMetrics.headerLeftContainerStyle
  }
})
