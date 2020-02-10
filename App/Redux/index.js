import { persistReducer } from 'redux-persist'
import configureStore from './CreateStore'
import ReduxPersist from '../Config/ReduxPersist'
import rootSaga from './Sagas'
import rootReducer from './Ducks'

export default () => {
  let finalReducers = rootReducer

  // If rehydration is on use persistReducer otherwise default combineReducers
  if (ReduxPersist.active) {
    const persistConfig = ReduxPersist.storeConfig
    finalReducers = persistReducer(persistConfig, rootReducer)
  }

  let { store, sagasManager, sagaMiddleware } = configureStore(finalReducers, rootSaga)

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('./Ducks').reducers
      store.replaceReducer(nextRootReducer)

      const newYieldedSagas = require('./Sagas').default
      sagasManager.cancel()
      sagasManager.done.then(() => {
        sagasManager = sagaMiddleware(newYieldedSagas)
      })
    })
  }

  return store
}
