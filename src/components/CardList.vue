<template>
  <div class="container">
    <div class="row gx-0">
      <h2 class="my-3 text-light" v-if="store.movieList.length > 0">Film</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="movie in store.movieList"
        :key="movie.id"
      >
        <CardComponent
          :img="store.imageUrl + movie.poster_path"
          :title="movie.title" :original_title="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" :overview="movie.overview"
        />
      </div>
    </div>
    <div class="row gx-0">
      <h2 class="my-3 text-light" v-if="store.seriesList.length > 0">Serie tv</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="series in store.seriesList"
        :key="series.id"
      >
        <CardComponent
          :img="store.imageUrl + series.poster_path"
          :title="series.name" :original_title="series.original_name" :language="series.original_language" :vote="series.vote_average" :overview="series.overview"
        />
      </div>
    </div>
    <div class="row gx-0">
      <h2 class="my-3 text-light" v-if="store.moviepopularList.length > 0">Most Popular Film</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="moviepopular in store.moviepopularList"
        :key="moviepopular.id"
      >
        <CardComponent
          :img="store.imageUrl + moviepopular.poster_path"
          :title="moviepopular.title" :original_title="moviepopular.original_title" :language="moviepopular.original_language" :vote="moviepopular.vote_average" :overview="moviepopular.overview"
        />
      </div>
    </div>
    <div class="row gx-0">
      <h2 class="my-3 text-light" v-if="store.seriespopularList.length > 0">Most Popular Series TV</h2>
      <div
        class="col-12 col-lg-2 col-md-3 col-sm-6"
        v-for="tvpopular in store.seriespopularList"
        :key="tvpopular.id"
      >
        <CardComponent
          :img="store.imageUrl + tvpopular.poster_path"
          :title="tvpopular.title" :original_title="tvpopular.original_title" :language="tvpopular.original_language" :vote="tvpopular.vote_average" :overview="tvpopular.overview"
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
