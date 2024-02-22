import useWindowDimensions from '@hooks/UseWindowDimensions.hook';
import { Box, Paper, Typography, Rating, CircularProgress, Grid, Theme } from '@mui/material';
import { RootState } from '@store/rootStore';
import { colors } from '@theme/index';
import React from 'react';
import { useSelector } from 'react-redux';

const MovieDetail = () => {
    const { height } = useWindowDimensions();
    const movie = useSelector((state: RootState) => state.movie.movieDetail);

    return (
        <Paper
            elevation={10}
            sx={(theme: Theme) => ({
                padding: '15px',
                backgroundColor: colors.grey,
                border: `2px solid ${colors.green}`,
                borderRadius: '10px',
                [theme.breakpoints.only('xs')]: {
                    height: `${height - 200}px`,
                    overflow: 'scroll',
                    margin: '0px 20px 0px 20px',
                },
            })}
        >
            {movie ? (
                <>
                    <Grid
                        container
                        justifyContent="center"
                        alignItems="center"
                        sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' }}
                    >
                        <Grid item xs={12} md={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Box>
                                <img src={movie.Poster} alt={movie.Title} style={{ width: '100%' }} />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ marginLeft: '20px' }}>
                                <Typography variant="h4" sx={{ color: colors.white, fontWeight: '600' }}>
                                    {movie.Title} ( {movie.Year} )
                                </Typography>
                                <Typography variant="h6" sx={{ color: colors.white, fontWeight: '600' }}>
                                    {movie.Genre}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: colors.white, fontWeight: '400', marginTop: '30px' }}
                                >
                                    {movie.Plot}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    sx={{ color: colors.white, fontWeight: '400', marginTop: '30px' }}
                                >
                                    Director : {movie.Director}
                                </Typography>
                                <Typography variant="body1" sx={{ color: colors.white, fontWeight: '400' }}>
                                    Writer : {movie.Writer}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: colors.white, fontWeight: '400', marginTop: '20px' }}
                                >
                                    Actors : {movie.Actors}
                                </Typography>
                                <Typography variant="body1" sx={{ color: colors.white, fontWeight: '400' }}>
                                    Released : {movie.Released}
                                </Typography>
                                <Box sx={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                                    <Typography variant="body1" sx={{ color: colors.white }}>
                                        IMDB {movie.imdbRating} /10 votes ( {movie.imdbVotes} )
                                    </Typography>
                                    <Rating name="read-only" value={parseFloat(movie.imdbRating)} readOnly max={10} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
        </Paper>
    );
};

export default MovieDetail;
