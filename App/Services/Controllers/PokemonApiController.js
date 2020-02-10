export default {
  create: (http) => {
    const index = (limit, offset) => {
      return http.get('/pokemon', { limit, offset })
    }
    const show = (pokemonId) => {
      return http.get(`/pokemon/${pokemonId}`)
    }
    const specie = (pokemonId) => {
      return http.get(`/pokemon-species/${pokemonId}`)
    }

    return {
      pokemon: {
        index,
        show,
        specie
      }
    }
  }
}
