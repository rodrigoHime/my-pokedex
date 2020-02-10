import React, { useEffect } from 'react'
import { BackHandler, Platform } from 'react-native'
import { connect } from 'react-redux'

import {
  createReduxContainer,
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'

import AppNavigation from './AppNavigation'

export const appNavigatorMiddleware = createReactNavigationReduxMiddleware(
  (state) => state.nav,
  'root'
)

const ReduxAppNavigator = createReduxContainer(AppNavigation, 'root')

function ReduxNavigation (props) {
  useEffect(() => {
    if (Platform.OS === 'ios') return
    BackHandler.addEventListener('hardwareBackPress', () => {
      const { dispatch, nav } = props
      // change to whatever is your first screen, otherwise unpredictable results may occur
      if (nav.routes.length === 1 && (nav.routes[0].routeName === 'LaunchScreen')) {
        return false
      }
      // if (shouldCloseApp(nav)) return false
      dispatch({ type: 'Navigation/BACK' })
      return true
    })

    return () => {
      if (Platform.OS === 'ios') return
      BackHandler.removeEventListener('hardwareBackPress', undefined)
    }
  }, [])

  return <ReduxAppNavigator dispatch={props.dispatch} state={props.nav} />
}

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(ReduxNavigation)
