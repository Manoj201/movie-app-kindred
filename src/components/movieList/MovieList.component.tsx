import { ROUTES } from '@constants/index';
import useWindowDimensions from '@hooks/UseWindowDimensions.hook';
import { Box, CircularProgress, Grid, Paper, Theme, Typography } from '@mui/material';

import { RootState } from '@store/rootStore';
import { colors } from '@theme/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CachedImage } from '@components/index';
import { styled } from '@mui/system';

const MovieList: React.FC = () => {
    const navigate = useNavigate();
    const { height } = useWindowDimensions();

    const movieList = useSelector((state: RootState) => state.movie.movieList);
    const movieListLoading = useSelector((state: RootState) => state.movie.movieListLoading);
    const currentPage = useSelector((state: RootState) => state.movie.curruntPage);

    const handleClickMovie = (imdbID: string) => {
        navigate(`${ROUTES.MOVIE_SERACH_PAGE}/${imdbID}`);
    };

    return (
        <>
            <Grid
                container
                spacing={2}
                sx={{
                    height: `${height - 250}px`,
                    overflowY: 'scroll',
                    marginTop: '10px',
                    width: '100%',
                }}
            >
                {movieList[`${currentPage}`]?.map((movie, index) => (
                    <Grid
                        key={index}
                        item
                        xs={12}
                        lg={6}
                        sx={(theme: Theme) => ({
                            width: '100% !important',
                            [theme.breakpoints.only('xs')]: {
                                marginRight: '20px',
                                marginLeft: '20px',
                            },
                        })}
                    >
                        <MovieCard elevation={10} onClick={() => handleClickMovie(movie.imdbID)}>
                            <CachedImage src={movie.Poster} width="80px" height="100%" />
                            <Box sx={{ marginLeft: '20px' }}>
                                <MovieTitle color="primary">{movie.Title}</MovieTitle>
                                <MovieYear color="primary">
                                    {movie.Year} ( {movie.Type} )
                                </MovieYear>
                            </Box>
                        </MovieCard>
                    </Grid>
                ))}
                {movieListLoading && (
                    <LoaderWrapper>
                        <CircularProgress />
                    </LoaderWrapper>
                )}
                <Box
                    sx={(theme: Theme) => ({
                        [theme.breakpoints.only('xs')]: {
                            height: '150px',
                        },
                    })}
                />
            </Grid>
        </>
    );
};

export default MovieList;

const MovieCard = styled(Paper)({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '15px',
    backgroundColor: colors.grey,
    border: `2px solid ${colors.green}`,
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    '&:hover': {
        backgroundColor: colors.darkGrey,
    },
    height: '150px',
});

const MovieTitle = styled(Typography)({
    fontSize: '22px',
    fontWeight: 'bold',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
});

const MovieYear = styled(Typography)({
    fontSize: '14px',
    fontWeight: 'bold',
});

const LoaderWrapper = styled(Box)({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '50px',
});
