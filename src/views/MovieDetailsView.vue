<script>
import ShowDetails from '../components/MovieDetails.vue'
import AppHeader from '../components/AppHeader.vue'
export default {
  components: {
    AppHeader,
    ShowDetails
  },
  data() {
    return {
      id: ''
    }
  },
  created() {
    this.id = this.$route.params.id
  }
}
</script>

<template>
  <div class="details">
    <header>
      <AppHeader @searchResults="handleSearchEvent" :isMovieDetailsPage="true"></AppHeader>
    </header>
    <main>
      <ShowDetails :id="id" />
    </main>
  </div>
</template>

<style></style>
