import React from 'react'
import { Image, TouchableOpacity } from 'react-native'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import PokemonsScreen from '../Containers/PokemonsScreen'
import PokemonDetailsScreen from '../Containers/PokemonDetailsScreen'

import * as R from 'ramda'
import _ from 'lodash'

// Theme
import { Colors, Images } from '../Themes'

// Styles
import styles, {
  primaryNavStackStyles,
  pokemonsScreenStyles,
  pokemonDetailsStyles
} from './Styles/NavigationStyles'

// Utils
import { Helpers } from '../Utils'

const PrimaryNav = createStackNavigator({
  PokemonsScreen: {
    screen: PokemonsScreen,
    navigationOptions: {
      ...pokemonsScreenStyles,
      headerTitle: 'MyPokedex',
      headerTruncatedBackTitle: 'Voltar'
    }
  },
  PokemonDetailsScreen: {
    screen: PokemonDetailsScreen,
    navigationOptions: ({ navigation }) => {
      const { name, types } = navigation.state.params.pokemon
      const mainType = R.sortBy(R.prop('slot'), types)[0].type

      return {
        ...pokemonDetailsStyles,
        headerStyle: {
          backgroundColor: Helpers.getColorByPokemonType(mainType.name)
        },
        headerTitle: _.capitalize(name),
        headerLeft: () => {
          return (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              hitSlop={{top: 10, left: 10, bottom: 10, right: 10}}
            >
              <Image
                style={styles.headerLeftImage}
                source={Images.backIcon}
                tintColor="white"
              />
            </TouchableOpacity>
          )
        },
      }
    },
  }
}, {
  initialRouteName: 'PokemonsScreen',
  defaultNavigationOptions: {
    ...primaryNavStackStyles
  }
})

export default createAppContainer(PrimaryNav)
