<template>
  <div class="container">
    <div class="row">
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6 g-3 gy-4"
        v-for="movie in store.movieList"
        :key="movie.id"
      >
        <CardComponent
          :img="store.imageUrl + movie.poster_path"
          :title="movie.title"
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

<style lang="scss" scoped></style>
