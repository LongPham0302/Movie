<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Popular Movies</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" v-for="movie in getPost" :key="movie.id">
          <movieCard :movie="movie" :genres="getGener" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

import MovieCard from "../components/MovieCard.vue";
export default {
  name: "PopularMovies",
  data: function () {
    return {
      genres: [],
      movies: [],
    };
  },
  created() {
    this.DetailPost();
  },
  computed: {
    ...mapGetters(["getPost", "getGener"]),
  },
  methods: {
    ...mapActions(["getPostDetailById", "fetchGenres"]),
    DetailPost() {
      this.getPostDetailById();
      this.fetchGenres();
    },
  },
  components: {
    MovieCard,
  },
};
</script>
