<script>
import AppHeader from '../components/AppHeader.vue'
import GenreList from '../components/GenreList.vue'

export default {
  components: {
    AppHeader,
    GenreList
  },
  data() {
    return {
      searchResults: {}
    }
  },
  methods: {
    handleSearchEvent(data) {
      this.searchResults = data
    }
  }
}
</script>

<template>
  <header>
    <AppHeader @searchResults="handleSearchEvent" :isMovieDetailsPage="false"></AppHeader>
  </header>
  <main>
    <GenreList :searchedShows="this.searchResults"></GenreList>
  </main>
</template>
