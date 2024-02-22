import { MovieDetail } from '@components/index';
import { Grid } from '@mui/material';
import { movieActions } from '@store/movie.slice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const MovieDetailPage: React.FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(movieActions.getMovieDetail(id));
        }
    }, [id, dispatch]);

    return (
        <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={12} md={6} sx={{ marginTop: '30px' }}>
                <MovieDetail />
            </Grid>
        </Grid>
    );
};

export default MovieDetailPage;
