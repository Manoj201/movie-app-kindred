import { SearchPanel } from '@components/index';
import { Grid } from '@mui/material';
import { movieActions } from '@store/movie.slice';
import { RootState } from '@store/rootStore';

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const MovieSearchPage: React.FC = () => {
    const dispatch = useDispatch();

    const movieList = useSelector((state: RootState) => state.movie.movieList);

    console.log(movieList);

    useEffect(() => {
        // dispatch(movieActions.getMovieList({ search: 'batman', year: '', page: '1' }));
        // dispatch(movieActions.getMovieDetail('tt0372784'));
    }, [dispatch]);

    return (
        <Grid container justifyContent="center">
            <Grid item sm={12} lg={6} sx={{ margin: '30px' }}>
                <SearchPanel />
            </Grid>
        </Grid>
    );
};

export default MovieSearchPage;
