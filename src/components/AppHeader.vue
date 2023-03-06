<script>
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
        const response = await fetch(`https://api.tvmaze.com/search/shows?q=${this.movieName}`)
        const data = await response.json()
        this.results = data.map((item) => item.show)
        this.$emit('searchResults', this.results)
      } catch (error) {
        console.log('search error', error)
      }
    }
  }
}
</script>

<template>
  <nav class="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">My TV Shows</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form v-if="!isMovieDetailsPage" class="d-flex" role="search">
          <input
            class="form-control search-input"
            type="search"
            placeholder="Search Movies"
            v-model="movieName"
            aria-label="Search"
            v-on:keyup="search"
          />
        </form>
      </div>
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
