import { reactive } from "vue";

export const store = reactive({
  baseUrl: "https://api.themoviedb.org/3/",
  endpoint: {
    movie: "search/movie",
    tv: "search/tv",
    moviepopular: "movie/popular",
    tvpopular: "tv/popular",
  },
  movieList: [], //array dei film preso da axios
  seriesList: [], //array delle serie tv preso da axios
  moviepopularList: [], //array dei film popolari preso da axios
  seriespopularList: [], //array delle serie tv popolari preso da axios
  options: {
    params: {
      api_key: "538b11410bba968d24477005677a8a52",
      query: "",
    },
  },
  imageUrl: "https://image.tmdb.org/t/p/original",
  loading: false,
});

//* URL per ottenere le immagini
// https://image.tmdb.org/t/p/original /8QVDXDiOGHRcAD4oM6MXjE0osSj.jpg
