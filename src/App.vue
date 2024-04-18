<template>
  <HeaderComponent @searchApi="getMovies(), getTvSeries()"/>
  <MainComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";
import { store } from "./store";
export default {
  name: "App",
  components: {
    HeaderComponent,
    MainComponent,
  },
  data() {
    return {
      store,
    };
  },
  methods: {
    getMovies() {
      axios
        .get(this.store.baseUrl + this.store.endpoint.movie, this.store.options)
        .then((res) => {
          console.log(res.data.results);
          this.store.movieList = res.data.results;
          console.log(this.store.movieList);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finally');
        });
    },
    getTvSeries() {
      axios
        .get(this.store.baseUrl + this.store.endpoint.tv, this.store.options)
        .then((res) => {
          console.log(res.data.results);
          this.store.seriesList = res.data.results;
          console.log(this.store.seriesList);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finally');
        });
    },
  },
  created() {
    this.getMovies();
    this.getTvSeries(); //test fatto tutto ok
  },
};
</script>

<style lang="scss" scoped></style>
