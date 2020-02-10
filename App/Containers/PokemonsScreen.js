import React, { useState, useEffect } from 'react'
import {
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Alert
} from 'react-native'

// Actions
import { useSelector, useDispatch } from 'react-redux'
import PokemonActions from '../Redux/Ducks/PokemonRedux'

// Components
import PokemonListItem from '../Components/PokemonListItem'

// Styles
import styles from './Styles/PokemonsScreenStyles'

export default function PokemonsScreen (props) {
  const limit = 12

  const [offset, setOffset] = useState(0)
  const [requesting, setRequesting] = useState(false)
  const [refreshing, setRefreshing] = useState(false)
  const [requestingMore, setRequestingMore] = useState(false)

  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemon.pokemons)
  const pokemonsRequesting = useSelector(state => state.pokemon.pokemonsRequesting)
  const pokemonsRequestingError = useSelector(state => state.pokemon.pokemonsRequestingError)

  // componentDidMount
  useEffect(() => {
    setRequesting(true)
    dispatch(PokemonActions.pokemonsRequest(limit, offset))
  }, [])

  // pokemonsRequesting update
  useEffect(() => {
    if (!pokemonsRequesting && (requesting || refreshing || requestingMore)) {
      setRequesting(false)
      setRefreshing(false)
      setRequestingMore(false)
      if (pokemonsRequestingError) {
        Alert.alert('Ops! Ocorreu um problema na comunicação com nossos servidores. :/')
      }
    }
  }, [pokemonsRequesting])

  function refreshPokemons () {
    setRefreshing(true)
    dispatch(PokemonActions.pokemonsRequest(limit, offset))
  }

  function requestMorePokemons () {
    if (!requestingMore) {
      setRequestingMore(true)
      const newOffset = offset + limit
      setOffset(newOffset)
      dispatch(PokemonActions.pokemonsRequest(limit, newOffset))
    }
  }

  function _renderPokemonListFooter () {
    if (requestingMore) {
      return (
        <View style={styles.pokemonListFooter}>
          <ActivityIndicator />
        </View>
      )
    }
    return <View />
  }

  function _renderPokemonList () {
    if (!requesting && pokemons.length) {
      return (
        <FlatList
          style={styles.pokemonList}
          columnWrapperStyle={styles.pokemonListColumn}
          numColumns={2}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          data={pokemons}
          renderItem={({ item: pokemon }) => (
            <PokemonListItem
              pokemon={pokemon}
              onPress={() => props.navigation.navigate('PokemonDetailsScreen', { pokemon })}
            />
          )}
          keyExtractor={pokemon => `${pokemon.id}-${pokemon.order}-${pokemon.name}`}
          onRefresh={refreshPokemons}
          onEndReached={requestMorePokemons}
          onEndReachedThreshold={1.8}
          ListFooterComponent={_renderPokemonListFooter}
        />
      )
    }
  }

  function _renderLoadingScreen () {
    if (requesting) {
      return (
        <View style={styles.loadingScreen}>
          <ActivityIndicator size='large' />
          <Text style={styles.loadingScreenText}>Conectando...</Text>
        </View>
      )
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      { _renderLoadingScreen() }
      { _renderPokemonList() }
    </SafeAreaView>
  )
}
