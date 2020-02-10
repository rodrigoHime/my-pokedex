import React from 'react'
import {
  Text,
  Image,
  View,
  TouchableOpacity
} from 'react-native'

import * as R from 'ramda'
import _ from 'lodash'

// Styles
import styles from './Styles/PokemonsListItemStyles'

// Utils
import { Helpers } from '../Utils'

export default function PokemonListItem ({ pokemon, onPress }) {
  const pokemonSortedTypes = R.sortBy(R.prop('slot'), pokemon.types)

  function _renderBackgrounds () {
    return pokemonSortedTypes.map(({ type }) => (
      <View
        key={type.name}
        style={[
          styles.pokemonTypeColor,
          { backgroundColor: Helpers.getColorByPokemonType(type.name) }
        ]}
      />
    ))
  }

  return (
    <TouchableOpacity
      style={styles.pokemonItemWrapper}
      onPress={() => onPress()}
    >
      <View style={styles.pokemonItem}>
        <View style={styles.pokemonBackground}>
          { _renderBackgrounds() }
        </View>
        <Image
          style={styles.pokemonItemImage}
          source={{ uri: pokemon.sprites.front_default }}
        />
        <View style={styles.pokemonItemTextWrapper}>
          <Text style={styles.pokemonItemText}>
            { `#${pokemon.order} - ${_.capitalize(pokemon.name)}` }
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}
