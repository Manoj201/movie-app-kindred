import { all } from '@redux-saga/core/effects';
import movieSaga from '@store/movie.saga';

function* rootSaga() {
    yield all([...movieSaga]);
}

export default rootSaga;
