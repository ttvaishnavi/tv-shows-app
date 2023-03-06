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
      searchResults: {},
      noMatchFound: false
    }
  },
  methods: {
    handleSearchEvent(data) {
      if(data?.noMatchFound) {
        this.searchResults = {}
        this.noMatchFound = true
      } else {
      this.searchResults = data?.results 
      this.noMatchFound = false
      }
    }
  }
}
</script>

<template>
  <header>
    <AppHeader @searchResults="handleSearchEvent" :isMovieDetailsPage="false"></AppHeader>
  </header>
  <main>
    <GenreList :searchedShows="this.searchResults" :noSearchMatchFound="this.noMatchFound"></GenreList>
  </main>
</template>
