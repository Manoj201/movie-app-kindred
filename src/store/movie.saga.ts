import { CallEffect, PutEffect, call, put, takeLatest } from 'redux-saga/effects';
import { movieActions } from '@store/movie.slice';
import MovieApi from '@api/MovieApi';
import { MovieSearchResponse, MovieSearchRequest, MovieDetails } from '@app-types/index';
import { AnyAction } from '@redux-saga/core';

function* watchGetMovieList(
    action: ReturnType<typeof movieActions.getMovieList>,
): Generator<CallEffect<MovieSearchRequest> | PutEffect<AnyAction>, void, MovieSearchResponse> {
    try {
        const response = yield call(
            MovieApi.getMovieList,
            action.payload.search,
            action.payload.year,
            action.payload.page,
        );
        if (response.Response === 'True') {
            yield put(movieActions.getMovieListSuccess({ ...response, page: action.payload.page }));
        }
    } catch (error) {
        yield put(movieActions.getMovieListError());
    }
}

function* watchGetMovieDetail(
    action: ReturnType<typeof movieActions.getMovieDetail>,
): Generator<CallEffect<string> | PutEffect<AnyAction>, void, MovieDetails> {
    try {
        const response = yield call(MovieApi.getMovieById, action.payload);
        yield put(movieActions.getMovieDetailSuccess(response));
    } catch (error) {
        yield put(movieActions.getMovieDetailError());
    }
}

const movieSaga = [
    takeLatest(movieActions.getMovieList, watchGetMovieList),
    takeLatest(movieActions.getMovieDetail, watchGetMovieDetail),
];

export default movieSaga;
