<script>
import axios from 'axios'
import MovieCard from './MovieCard.vue'

export default {
  components: {
    MovieCard
  },
  props: {
    searchedShows: {},
    noSearchMatchFound: {
      type: Boolean,
      required: false
    }
  },
  data() {
    return {
      shows: [],
      genres: [],
      filteredShows: {}
    }
  },
  mounted() {
    axios
      .get('https://api.tvmaze.com/shows')
      .then((response) => {
        this.shows = response.data
        this.genres = [...new Set(this.shows.flatMap((show) => show.genres))]
        this.filteredShows = this.shows.reduce((acc, show) => {
          show.genres.forEach((genre) => {
            if (!acc[genre]) {
              acc[genre] = []
            }
            acc[genre].push(show)
          })
          return acc
        }, {})

        Object.keys(this.filteredShows).forEach((key) => {
          this.filteredShows[key].sort((a, b) => b?.rating?.average - a?.rating?.average)
        })
      })

      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<template>
  <h2 class="not-found" v-if="noSearchMatchFound">
  No Match found
  </h2>
  <div v-if="searchedShows.length > 1" class="grid grid-search">
    <MovieCard
      v-for="(show, index) in searchedShows"
      :key="index"
      :title="show.name"
      :rating="show.rating?.average"
      :imageSrc="show?.image?.medium"
      :movie="show"
    />
  </div>
  <div v-if="!searchedShows.length && !noSearchMatchFound" class="grid-container" v-for="(genre, index) in genres" :key="index">
    <h2>{{ genre }}</h2>
    <div class="grid">
      <MovieCard
        v-for="(show, index) in filteredShows[genre]"
        :key="index"
        :title="show.name"
        :duration="show.runtime"
        :rating="show.rating?.average"
        :imageSrc="show?.image?.medium"
        :movie="show"
      />
    </div>
  </div>
</template>

<style>
.grid-container {
  overflow-x: scroll;
  margin-bottom: 20px;
}
.grid-container:first-child {
  padding-top: 65px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(200, 1fr);
  grid-gap: 20px;
  width: calc(100% + 20px);
  margin-right: -20px;
}
.grid:first-child {
  padding-top: 5rem;
}
.grid-search {
  grid-template-columns: repeat(1, auto);
}
@media screen and (min-width: 550px) {
  .grid-search {
    grid-template-columns: repeat(2, auto);
  }
}
@media screen and (min-width: 700px) {
  .grid-search {
    grid-template-columns: repeat(3, auto);
  }
}
@media screen and (min-width: 999px) {
  .grid-search {
    grid-template-columns: repeat(5, auto);
  }
}
h2 {
  padding-left: 10px;
}
.wrapper {
  list-style: none;
  overflow-x: auto;
  display: flex;
  white-space: nowrap;
  padding: 10px 0;
}

.wrapper-item {
  display: block;
  padding: 0 15px;
  transition: transform 0.2s ease;
}

.wrapper-item:hover {
  transform: scale(1.1);
}

.not-found{
  margin-top: 6rem;
}
</style>
