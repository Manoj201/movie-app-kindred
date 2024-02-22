import { Box, Pagination } from '@mui/material';
import { movieActions } from '@store/movie.slice';
import { RootState } from '@store/rootStore';
import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const PaginationWrapper: React.FC = () => {
    const dispatch = useDispatch();

    const searchFormValues = useSelector((state: RootState) => state.movie.searchFormValue);
    const movieList = useSelector((state: RootState) => state.movie.movieList);
    const currentPage = useSelector((state: RootState) => state.movie.curruntPage);
    const totalResults = useSelector((state: RootState) => state.movie.totalResults);

    const pages = useMemo(() => {
        return Math.ceil(totalResults / 10);
    }, [totalResults]);

    const handlePagination = (_event: React.ChangeEvent<unknown>, value: number) => {
        if (movieList[`${value}`]) {
            dispatch(movieActions.setCurruntPage(`${value}`));
        } else {
            dispatch(
                movieActions.getMovieList({
                    search: searchFormValues.movieName,
                    year: searchFormValues.year,
                    page: `${value}`,
                }),
            );
        }
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
            <Pagination
                count={pages}
                color="primary"
                sx={{ button: { color: '#ffffff' } }}
                boundaryCount={1}
                siblingCount={0}
                page={parseInt(currentPage)}
                onChange={handlePagination}
            />
        </Box>
    );
};

export default PaginationWrapper;
