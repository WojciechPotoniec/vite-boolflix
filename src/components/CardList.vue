<template>
  <div class="container">
    <div class="row gx-0">
      <h2 class="my-3 text-light">Film</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="movie in store.movieList"
        :key="movie.id"
      >
        <CardComponent
          :img="store.imageUrl + movie.poster_path"
          :title="movie.title" :original_title="movie.original_title" :language="movie.original_language" :vote="movie.vote_average"
        />
      </div>
    </div>
    <div class="row gx-0">
      <h2 class="my-3 text-light">Serie tv</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="series in store.seriesList"
        :key="series.id"
      >
        <CardComponent
          :img="store.imageUrl + series.poster_path"
          :title="series.name" :original_title="series.original_name" :language="series.original_language" :vote="series.vote_average"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../store.js";
import CardComponent from "./CardComponent.vue";
export default {
  name: "CardList",
  components: {
    CardComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
