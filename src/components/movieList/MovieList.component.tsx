import { ROUTES } from '@constants/index';
import useWindowDimensions from '@hooks/UseWindowDimensions.hook';
import { Box, CircularProgress, Grid, Paper, Theme, Typography } from '@mui/material';

import { RootState } from '@store/rootStore';
import { colors } from '@theme/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { CachedImage } from '@components/index';

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
                    overflow: 'scroll',
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
                            width: '100%',
                            [theme.breakpoints.only('xs')]: {
                                marginRight: '20px',
                                marginLeft: '20px',
                            },
                        })}
                    >
                        <Paper
                            sx={{
                                display: 'flex',
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
                            }}
                            elevation={10}
                            onClick={() => handleClickMovie(movie.imdbID)}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <CachedImage src={movie.Poster} width="80px" height="100%" />
                                <Box sx={{ marginLeft: '20px' }}>
                                    <Typography
                                        color="primary"
                                        sx={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            display: '-webkit-box',
                                            WebkitLineClamp: '2',
                                            WebkitBoxOrient: 'vertical',
                                        }}
                                    >
                                        {movie.Title}
                                    </Typography>
                                    <Typography
                                        color="primary"
                                        sx={{
                                            fontSize: '14px',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {movie.Year} ( {movie.Type} )
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                ))}
                {movieListLoading && (
                    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>
                        <CircularProgress />
                    </Box>
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
