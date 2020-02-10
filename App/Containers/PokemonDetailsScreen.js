import React, { useState, useEffect } from 'react'
import { ScrollView, Text, Image, View, SafeAreaView, FlatList } from 'react-native'

import * as R from 'ramda'
import _ from 'lodash'

// Actions
import { useSelector, useDispatch } from 'react-redux'
import PokemonActions from '../Redux/Ducks/PokemonRedux'

// Themes
import { Colors, Images } from '../Themes'

// Styles
import styles from './Styles/PokemonDetailsScreenStyles'

// Utils
import { Helpers } from '../Utils'

export default function PokemonDetailsScreen (props) {
  const { pokemon } = props.navigation.state.params

  const pokemonSortedTypes = R.sortBy(R.prop('slot'), pokemon.types)
  const pokemonMainType = pokemonSortedTypes[0]
  const [requesting, setRequesting] = useState(false)

  const dispatch = useDispatch()
  const pokemonSpecie = useSelector(state => state.pokemon.pokemonSpecie)
  const pokemonSpecieRequesting = useSelector(state => state.pokemon.pokemonSpecieRequesting)

  // componentDidMount
  useEffect(() => {
    setRequesting(true)
    dispatch(PokemonActions.pokemonsSpecieRequest(pokemon.id))
  }, [])

  function pokemonTypesBadges () {
    return pokemonSortedTypes.map(({ type }) => (
      <View
        key={type.name}
        style={[
          styles.pokemonTypeBadge,
          { backgroundColor: Helpers.getColorByPokemonType(type.name) }
        ]}
      >
        <Text style={styles.pokemonTypeBadgeText}>{ _.upperCase(type.name) }</Text>
      </View>
    ))
  }

  function pokemonAbilities () {
    return R.compose(
        R.join(', '),
        R.pluck('name'),
        R.pluck('ability')
      )(pokemon.abilities)
  }

  function pokemonGroups () {
    return R.compose(
        R.join(', '),
        R.pluck('name')
      )(pokemonSpecie.egg_groups || [])
  }

  function pokemonMoves () {
    return pokemon.moves.map(({ move }) => (
      <View key={move.name}>
        <Text> - { move.name }</Text>
      </View>
    ))
  }

  function _renderSectionInfos () {
    return (
      <View style={[styles.section, styles.sectionInfos]}>
        <View>
          <Text style={styles.pokemonOrderText}>#{ pokemon.order }</Text>
        </View>
        <Image
          style={styles.pokemonItemImage}
          source={{ uri: pokemon.sprites.front_default }}
        />
        <View style={styles.pokemonTypes}>
          { pokemonTypesBadges() }
        </View>
      </View>
    )
  }

  function _renderProfileSection () {
    return (
      <View style={styles.section}>
        <View style={[styles.sectionHeader, { backgroundColor: Helpers.getColorByPokemonType(pokemonMainType.type.name) }]}>
          <Text style={styles.sectionHeaderTitle}>Perfil</Text>
        </View>
        <View style={styles.profileInfos}>
          <View style={styles.profileInfoColumn}>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Peso: </Text>
              <Text>{ pokemon.weight / 10 } kg</Text>
            </View>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Altura: </Text>
              <Text>{ pokemon.height / 10 } m</Text>
            </View>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Grupos: </Text>
              <Text>{ pokemonGroups() }</Text>
            </View>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Abilidades: </Text>
              <Text>{ pokemonAbilities() }</Text>
            </View>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Taxa de captura: </Text>
              <Text>{ pokemonSpecie.capture_rate && pokemonSpecie.capture_rate / 10 } %</Text>
            </View>
            <View style={styles.profileInfoItem}>
              <Text style={styles.profileInfoLabel}> - Habitat: </Text>
              <Text>{ pokemonSpecie.habitat && pokemonSpecie.habitat.name }</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }

  function _renderMovesSection () {
    return (
      <View style={styles.section}>
        <View style={[styles.sectionHeader, { backgroundColor: Helpers.getColorByPokemonType(pokemonMainType.type.name) }]}>
          <Text style={styles.sectionHeaderTitle}>Movimentos</Text>
        </View>
        { pokemonMoves() }
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
        { _renderSectionInfos() }
        { _renderProfileSection() }
        { _renderMovesSection() }
      </ScrollView>
    </SafeAreaView>
  )
}
