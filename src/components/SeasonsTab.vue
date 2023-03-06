<script>
export default {
  props: {
    episodes: {}
  },
  data() {
    return {
      seasons: [],
      activeSeason: 0,
      seasonEpisodes: []
    }
  },

  computed: {
    filteredSeasons() {
      return [...new Set(this.episodes?.map((episode) => episode.season))]
    }
  },
  methods: {
    setActiveSeason(index) {
      this.activeSeason = index
      this.seasons = [...new Set(this.episodes?.map((episode) => episode.season))]
      this.seasonEpisodes = this.episodes?.reduce((acc, episode) => {
        if (!acc[episode?.season]) {
          acc[episode?.season] = []
        }
        acc[episode?.season].push(episode)
        return acc
      }, {})
    }
  },
  watch: {
    episodes: function () {
      this.setActiveSeason(this.activeSeason)
    }
  }
}
</script>

<template>
  <ul class="nav nav-tabs">
    <li class="nav-item" v-for="(season, index) in filteredSeasons" :key="index">
      <a
        class="nav-link"
        aria-current="page"
        href="#"
        :class="{ active: activeSeason === index }"
        @click="setActiveSeason(index)"
        >{{ 'Season ' + season }}</a
      >
    </li>
  </ul>
  <div
    class="tab-content"
    id="nav-tabContent"
    v-for="(season, index) in filteredSeasons"
    :key="index"
  >
    <div
      class="episode-details"
      v-for="(episode, index) in seasonEpisodes[season]"
      :key="episode.id"
      :class="{ 'tab-pane': true, active: activeSeason === index }"
    >
      <div class="episode-image">
        <img :src="episode?.image?.medium" :alt="episode?.name" />
      </div>
      <div class="episode-info">
        <h4>{{ episode?.name }}</h4>
        <p v-html="episode?.summary"></p>
      </div>
    </div>
  </div>
</template>

<style>
.episode-details {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 4rem;
}
.episode-image {
  margin-right: 2rem;
}
.episode-image img {
  /* max-width: 100%; */
  height: auto;
}
.episode-info h1 {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.episode-info p {
  margin-bottom: 0.5rem;
}
.tab-content > .active {
  display: flex;
}
</style>
