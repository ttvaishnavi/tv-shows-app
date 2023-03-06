<script>
import axios from 'axios'
import SeasonsTab from './SeasonsTab.vue'
import { API_BASE_URL } from '../constants'

export default {
  components: {
    SeasonsTab
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      movie: {},
      episodes: []
    }
  },
  created() {
    this.fetchMovieDetails(), this.fetchEpisodeDetails()
  },
  methods: {
    async fetchMovieDetails() {
      const response = await axios.get(`${API_BASE_URL}/${this.id}`)
      this.movie = response?.data
    },
    async fetchEpisodeDetails() {
      const response = await axios.get(`${API_BASE_URL}/${this.id}/episodes`)
      this.episodes = response?.data
    },
    goBack() {
      this.$router.push({ name: 'Dashboard' })
    }
  }
}
</script>
<template>
  <div class="back-button">
    <button type="button" class="btn btn-secondary" @click="goBack()">Back</button>
  </div>
  <div class="movie-details">
    <div class="movie-image">
      <img :src="movie?.image?.medium" :alt="movie?.name" />
    </div>
    <div class="movie-info">
      <h1>{{ movie?.name }}</h1>
      <p v-html="movie?.summary"></p>
      <div class="movie-genre">
        <h6>Genres:</h6>
        <div class="genre-name">{{ movie?.genres?.toString() }}</div>
      </div>
    </div>
  </div>
  <SeasonsTab :episodes="episodes" />
</template>

<style scoped>
.movie-details {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 4rem;
  margin-bottom: 2em;
}
.movie-image {
  margin-right: 2rem;
}
.movie-image img {
  /* max-width: 100%; */
  height: auto;
}
.movie-info h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.movie-info p {
  margin-bottom: 0.5rem;
}
.movie-genre {
  display: inline-flex;
}
.genre-name {
  padding-left: 5px;
}
.back-button {
  margin-top: 5rem;
}
h6 {
  margin: 2px;
}
</style>
