<script>
import { routeNames } from '../constants';
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    rating: {
      type: Number,
      required: false
    },
    summary: {
      type: String
      // required: true
    },
    imageSrc: {
      type: String,
      required: true
    },
    movie: {}
  },
  methods: {
    showMovieDetails(data) {
      this.$router.push({ name: routeNames.MOVIE_DETAILS, params: { id: data?.id } })
    }
  }
}
</script>

<template>
  <li class="movie-card" @click="showMovieDetails(movie)">
    <img :src="movie?.image?.medium || movie?.image?.original" :alt="movie.name" />
    <div class="movie-details">
      <p>Rating: {{ movie.rating?.average || 'NA' }}</p>
      <p v-html="summary"></p>
    </div>
  </li>
</template>

<style>
.movie-card {
  width: 300px;
  height: 500px;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  cursor: pointer;
}

.movie-card img {
  /* max-width: 100%; */
  height: auto;
  margin-bottom: 10px;
}

.movie-details {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
