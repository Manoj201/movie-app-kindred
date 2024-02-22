import React from 'react';
import { Box, Paper, Typography, Rating, CircularProgress, Grid, Theme } from '@mui/material';

import useWindowDimensions from '@hooks/UseWindowDimensions.hook';
import { RootState } from '@store/rootStore';
import { colors } from '@theme/index';

import { useSelector } from 'react-redux';
import { CachedImage } from '@components/index';
import { styled } from '@mui/system';

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
                            <CachedImage src={movie.Poster} width="100%" height="100%" />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Box sx={{ marginLeft: '20px' }}>
                                <DetailLabel variant="h4" weight="600">
                                    {movie.Title} ( {movie.Year} )
                                </DetailLabel>
                                <DetailLabel variant="h6" weight="600">
                                    {movie.Genre}
                                </DetailLabel>
                                <DetailLabel variant="body1" weight="400" top="30px">
                                    {movie.Plot}
                                </DetailLabel>

                                <DetailLabel variant="body1" weight="400" top="30px">
                                    Director : {movie.Director}
                                </DetailLabel>
                                <DetailLabel variant="body1" weight="400">
                                    Writer : {movie.Writer}
                                </DetailLabel>
                                <DetailLabel variant="body1" weight="400" top="30px">
                                    Actors : {movie.Actors}
                                </DetailLabel>
                                <DetailLabel variant="body1" weight="400">
                                    Released : {movie.Released}
                                </DetailLabel>
                                <Box sx={{ display: 'flex', marginTop: '20px', flexDirection: 'column' }}>
                                    <DetailLabel variant="body1">
                                        IMDB {movie.imdbRating} /10 votes ( {movie.imdbVotes} )
                                    </DetailLabel>
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

const DetailLabel = styled(Typography)(({ weight, top }: { weight?: string; top?: string }) => ({
    fontWeight: weight,
    letterSpacing: '0.4px',
    color: colors.white,
    marginTop: top ?? undefined,
    marginBottom: '10px',
}));
