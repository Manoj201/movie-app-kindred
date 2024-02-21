import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from '@redux-saga/core';

import { movieReducer } from '@store/movie.slice';
import rootSaga from '@store/rootSaga';

const NODE_ENV = process.env.NODE_ENV;
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

if (NODE_ENV === 'development') {
    // middlewares.push(createLogger())
}

const rootReducer = combineReducers({
    movie: movieReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
