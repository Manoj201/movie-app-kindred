import React from 'react';
import { Grid } from '@mui/material';
import { SearchPanel, MovieList, PaginationWrapper } from '@components/index';

const MovieSearchPage: React.FC = () => {
    return (
        <Grid container justifyContent="center">
            <Grid item sm={12} lg={6} sx={{ margin: '20px 20px 15px 20px' }}>
                <SearchPanel />
            </Grid>
            <Grid item sm={12} lg={6}>
                <PaginationWrapper />
                <MovieList />
            </Grid>
        </Grid>
    );
};

export default MovieSearchPage;
