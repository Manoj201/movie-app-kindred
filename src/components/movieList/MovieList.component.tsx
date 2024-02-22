import { ROUTES } from '@constants/index';
import { Box, Grid, Paper, Typography } from '@mui/material';

import { RootState } from '@store/rootStore';
import { colors } from '@theme/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const MovieList: React.FC = () => {
    const navigate = useNavigate();

    const movieList = useSelector((state: RootState) => state.movie.movieList);
    const currentPage = useSelector((state: RootState) => state.movie.curruntPage);

    const handleClickMovie = (imdbID: string) => {
        navigate(`${ROUTES.MOVIE_SERACH_PAGE}/${imdbID}`);
    };

    return (
        <>
            <Grid container spacing={2}>
                {movieList[`${currentPage}`]?.map((movie, index) => (
                    <Grid key={index} item xs={12} lg={6}>
                        <Paper
                            sx={{
                                padding: '15px',
                                backgroundColor: colors.grey,
                                border: `2px solid ${colors.green}`,
                                borderRadius: '10px',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: colors.darkGrey,
                                },
                            }}
                            elevation={10}
                            onClick={() => handleClickMovie(movie.imdbID)}
                        >
                            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <img
                                    src={movie.Poster}
                                    alt={movie.Title}
                                    style={{
                                        height: '110px',
                                        borderRadius: '5px',
                                    }}
                                />
                                <Box sx={{ marginLeft: '20px' }}>
                                    <Typography
                                        color="primary"
                                        sx={{
                                            fontSize: '22px',
                                            fontWeight: 'bold',
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
            </Grid>
        </>
    );
};

export default MovieList;
