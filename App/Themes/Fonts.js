import normalize from 'react-native-normalize'

const type = {
  base: 'Avenir-Book'
}

const size = {
  title: normalize(30),
  regular: normalize(16)
}

const style = {
  title: {
    fontFamily: type.base,
    fontSize: size.title
  },
  regular: {
    fontFamily: type.base,
    fontSize: size.regular
  }
}

export default {
  type,
  size,
  style
}
