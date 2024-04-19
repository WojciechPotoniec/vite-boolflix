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
    getPopularMovies() {
      axios
        .get(this.store.baseUrl + this.store.endpoint.moviepopular, this.store.options)
        .then((res) => {
          console.log(res.data.results);
          this.store.moviepopularList = res.data.results;
          console.log(this.store.moviepopularList);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finally');
        });
    },
    getPopularSeries() {
      axios
        .get(this.store.baseUrl + this.store.endpoint.tvpopular, this.store.options)
        .then((res) => {
          console.log(res.data.results);
          this.store.seriespopularList = res.data.results;
          console.log(this.store.seriespopularList);
        }).catch((error) => {
          console.log(error);
        }).finally(() => {
          console.log('finally');
        });
    },
  },
  created() {
    this.getPopularMovies();
    this.getPopularSeries();
  },
};
</script>

<style lang="scss" scoped></style>
