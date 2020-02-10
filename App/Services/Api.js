import apisauce from 'apisauce'
import Config from 'react-native-config'
import DeviceInfo from 'react-native-device-info'

// Api Controllers
import PokemonApiController from './Controllers/PokemonApiController'

const create = (baseURL = Config.API_URL) => {
  const http = apisauce.create({
    baseURL,
    headers: {
      'Cache-Control': 'no-cache',
      'App-Version': DeviceInfo.getVersion()
    },
    timeout: 10000
  })

  return {
    ...PokemonApiController.create(http)
  }
}

export default {
  create
}
