<template>
  <div class="mx-3">
    <h2 class="mt-2 grey--text">Popular Actors</h2>
    <v-container fluid>
      <v-row>
        <v-col cols="12" sm="3" :key="actor.id" v-for="actor in this.actors">
          <actorCard :actor="actor" />
        </v-col>
        <v-col cols="12" class="d-flex justify-center mt-5">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="error"
            v-on:click.prevent="previous()"
          >
            <v-icon dark> fas fa-step-backward </v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark small color="error" v-on:click.prevent="next()">
            <v-icon dark> fas fa-step-forward </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from "vuex";

import ActorCard from "../components/ActorCard.vue";
export default {
  data() {
    return {
      actors: [],
      currentPage: 1,
    };
  },
  components: {
    ActorCard,
  },
  created() {
    this.fetchActors();
  },
  methods: {
    ...mapActions(["HavingPage"]),
    fetchActors() {
      this.HavingPage(this.currentPage).then((res) => (this.actors = res.data));
    },

    scroll() {
      window.onscroll = () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.offsetHeight;

        if (bottomOfWindow) {
          this.currentPage += 1;
          this.fetchActors((this.currentPage += 1));
        }
      };
    },

    next() {
      this.currentPage += 1;
      this.fetchActors(this.currentPage);
    },
    previous() {
      this.currentPage -= 1;
      this.fetchActors(this.currentPage);
    },
  },
};
</script>

<style></style>
