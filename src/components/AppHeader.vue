<script>
import { API_BASE_URL } from '../constants'

export default {
  emits: ['searchResults'],
  props: {
    isMovieDetailsPage: Boolean
  },
  data() {
    return {
      movieName: '',
      results: null
    }
  },

  methods: {
    async search() {
      try {
        const url = this.movieName ? `${API_BASE_URL}/search/shows?q=${this.movieName}` : `${API_BASE_URL}/search/shows`
        const response = await fetch(url)
        const data = await response.json()
        this.results = data?.map((item) => item.show)
        this.$emit('searchResults', { results: this.results, 
          noMatchFound: this.results.length === 0 ? true : false
        })
      } catch (error) {
        console.log('search error', error)
      }
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">My TV Shows</a>
      <form v-if="!isMovieDetailsPage" class="d-flex" role="search">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search Movies"
          v-model="movieName"
          aria-label="Search"
          v-on:keyup="search"
        />
      </form>
    </div>
  </nav>
</template>

<style scoped>
.search-input {
  width: 300px;
}
.navbar-collapse {
  justify-content: flex-end;
}
</style>
