import { GET } from './RestService';
import { API_URL } from '@constants/index';

// this url factory helps is there any diofferent p[ath for the api
const urlFactory = {
    searchMovies: () => API_URL,
    getMovieById: () => API_URL,
};

const MovieApi = {
    getMovieList: async (search: string, year: string, page: string) => {
        const url = urlFactory.searchMovies();
        const params = {
            s: search,
            y: year,
            page,
        };
        return await GET(url, params);
    },

    getMovieById: async (id: string) => {
        const url = urlFactory.getMovieById();
        const params = {
            i: id,
        };
        return await GET(url, params);
    },
};

export default MovieApi;
