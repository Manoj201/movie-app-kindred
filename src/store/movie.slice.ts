/* eslint-disable @typescript-eslint/no-unused-vars */
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MovieSearchResponse, MovieState, MovieSearchRequest, MovieDetails } from '@app-types/index';

const initialState: MovieState = {
    movieList: {},
    totalResults: 0,
    movieListLoading: false,
    movieListError: false,

    movieDetail: null,
    movieDetailLoading: false,
    movieDetailError: false,
};

const movieSlice = createSlice({
    name: 'movie',
    initialState,
    reducers: {
        getMovieList: (state, _action: PayloadAction<MovieSearchRequest>) => {
            state.movieListLoading = true;
            state.movieListError = false;
        },
        getMovieListSuccess: (state, action: PayloadAction<MovieSearchResponse>) => {
            state.movieList[`${action.payload.page}`] = action.payload.Search;
            state.totalResults = parseInt(action.payload.totalResults);
            state.movieListLoading = false;
            state.movieListError = false;
        },
        getMovieListError: (state) => {
            state.movieListLoading = false;
            state.movieListError = true;
        },

        getMovieDetail: (state, _action: PayloadAction<string>) => {
            state.movieDetailLoading = true;
            state.movieDetailError = false;
        },
        getMovieDetailSuccess: (state, action: PayloadAction<MovieDetails>) => {
            state.movieDetail = action.payload;
            state.movieDetailLoading = false;
            state.movieDetailError = false;
        },
        getMovieDetailError: (state) => {
            state.movieDetailLoading = false;
            state.movieDetailError = true;
        },

        cleanupMovieDetail: (state) => {
            state.movieDetail = null;
        },
        cleanupMovieList: (state) => {
            state.movieList = {};
            state.totalResults = 0;
        },
    },
});

export const { actions: movieActions, reducer: movieReducer } = movieSlice;
