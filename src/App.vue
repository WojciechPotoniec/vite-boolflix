<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import axios from "axios";
import { store } from "./store";
export default {
  name: "App",
  components:{
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
        });
    },
    getTvSeries() {
      axios
        .get(this.store.baseUrl + this.store.endpoint.tv, this.store.options)
        .then((res) => {
          console.log(res.data.results);
        });
    },
  },
  created() {
    // this.getMovies();
    // this.getTvSeries(); test fatto tutto ok
  },
};
</script>

<style lang="scss" scoped></style>
