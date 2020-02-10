import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles, Colors, Fonts } from '../../Themes/'

const { pokemonDetailsScreenMetrics } = Metrics

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    backgroundColor: Colors.screenBackground
  },
  content: {
    ...pokemonDetailsScreenMetrics.content,
  },
  pokemonOrderText: {
    ...Fonts.style.title,
    fontWeight: '600'
  },
  pokemonItemImage: {
    ...pokemonDetailsScreenMetrics.pokemonItemImage
  },
  section: {
    ...pokemonDetailsScreenMetrics.section
  },
  sectionInfos: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  pokemonTypes: {
    flexDirection: 'row'
  },
  pokemonTypeBadge: {
    ...pokemonDetailsScreenMetrics.pokemonTypeBadge
  },
  pokemonTypeBadgeText: {
    color: 'white',
    fontWeight: '600'
  },
  sectionHeader: {
    ...pokemonDetailsScreenMetrics.sectionHeader,
    justifyContent: 'center'
  },
  sectionHeaderTitle: {
    ...Fonts.style.regular,
    color: 'white',
    fontWeight: '600'
  },
  profileInfos: {
    flex: 1
  },
  profileInfoColumn: {
    flex: 0.5
  },
  profileInfoItem: {
    ...pokemonDetailsScreenMetrics.profileInfoItem,
    flexDirection: 'row'
  },
  profileInfoLabel: {
    fontWeight: '700'
  }
})
