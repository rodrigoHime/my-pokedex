import normalize from 'react-native-normalize'

const metrics = {
  /*
    * navigationMetrics
    * */
  navigationMetrics: {
    headerLeftImage: {
      width: normalize(22)
    },
    headerLeftContainerStyle: {
      marginLeft: normalize(15)
    }
  },
  /*
    * pokemonsScreenMetrics
    * */
  pokemonsScreenMetrics: {
    loadingScreenText: {
      marginTop: normalize(10)
    },
    pokemonList: {
      marginTop: normalize(10),
      paddingHorizontal: normalize(10)
    },
    pokemonListColumn: {
      marginTop: normalize(10)
    },
    pokemonListFooter: {
      paddingVertical: normalize(10),
      height: normalize(40)
    }
  },
  /*
   * pokemonDetailsScreenMetrics
   * */
  pokemonDetailsScreenMetrics: {
    content: {
      marginHorizontal: normalize(20),
      paddingVertical: normalize(5, 'height')
    },
    pokemonItemImage: {
      width: normalize(100),
      height: normalize(100)
    },
    section: {
      paddingTop: normalize(20)
    },
    pokemonTypeBadge: {
      height: normalize(35),
      padding: normalize(10),
      margin: normalize(5)
    },
    sectionHeader: {
      height: normalize(40),
      padding: normalize(10),
      marginBottom: normalize(20)
    },
    profileInfoItem: {
      marginBottom: normalize(8)
    }
  },
  /*
    * pokemonListItemMetrics
    * */
  pokemonListItemMetrics: {
    pokemonItem: {
      width: normalize(160),
      height: normalize(160)
    },
    pokemonItemImage: {
      marginBottom: normalize(15),
      width: normalize(120),
      height: normalize(120)
    },
    pokemonItemTextWrapper: {
      height: normalize(30)
    }
  }
}

export default metrics
