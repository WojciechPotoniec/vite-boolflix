import {reactive} from 'vue';

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endpoint: {
        movie: 'search/movie',
        tv: 'search/tv'
    },
    options:{
        params:{
            api_key: '538b11410bba968d24477005677a8a52',
            query: 'a'
        }
    },
    imageUrl: 'https://image.tmdb.org/t/p/original',
});