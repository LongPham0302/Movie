<template>
  <div>
    <popularMovies />
    <upcomingMovies />
  </div>
</template>

<script>
import PopularMovies from "../components/PopularMovies.vue";
import UpcomingMovies from "../components/UpcomingMovies.vue";
export default {
  name: "Home",
  components: {
    PopularMovies,
    UpcomingMovies,
  },
};
</script>
