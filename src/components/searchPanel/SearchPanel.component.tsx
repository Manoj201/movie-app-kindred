import React, { useMemo } from 'react';
import { Button, Grid, Paper, TextField, Box } from '@mui/material';
import { debounce } from 'lodash';
import { styled } from '@mui/system';
import { colors } from '@theme/index';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { movieActions } from '@store/movie.slice';
import { RootState } from '@store/rootStore';
import { FormvalueType, ToastType } from '@app-types/index';
import Notification from '@components/notification/Notification.component';

interface SearchPanelProps {}

// Please note this is not production ready implementation, for production huge forms we can use Formik library for hande form validation and submision
// for test purpose I have used simple form with locat state and debounce for search

const SearchPanel: React.FC<SearchPanelProps> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const searchFormValues = useSelector((state: RootState) => state.movie.searchFormValue);

    const handleSearch = (latestFormValues: FormvalueType) => {
        dispatch(movieActions.cleanupMovieList());
        if (latestFormValues.movieName !== '' || latestFormValues.year !== '') {
            dispatch(
                movieActions.getMovieList({
                    search: latestFormValues.movieName,
                    year: latestFormValues.year,
                    page: '1',
                }),
            );
        }
    };

    const textChangeDebouncer = useMemo(() => debounce(handleSearch, 500), []);

    const onChangeField = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        if (fieldName === 'year') {
            const year = event.target.value;
            if (isNaN(Number(year))) {
                return;
            }
            if (year.length > 4) {
                Notification('Oops!', 'Invalid Year Input', ToastType.Warn);
                return;
            }
        }

        const updatedFormValues: FormvalueType = { ...searchFormValues, [fieldName]: event.target.value };
        dispatch(movieActions.setSerachFormValue(updatedFormValues));

        // If user type movie name and year then we need to call the api
        if (
            updatedFormValues.movieName !== '' &&
            (updatedFormValues.year === '' || updatedFormValues.year.length === 4)
        ) {
            textChangeDebouncer(updatedFormValues);
        }

        // If user clear the movie name then we need to clear the movie list and year field
        if (updatedFormValues.movieName === '') {
            handelClear();
        }
    };

    const handelClear = () => {
        dispatch(movieActions.setSerachFormValue({ movieName: '', year: '' }));
        dispatch(movieActions.cleanupMovieList());
    };

    return (
        <Container elevation={0}>
            <Grid container spacing={1} justifyContent="flex-start" alignItems="center">
                <Grid item xs={5} sm={6}>
                    <TextField
                        fullWidth
                        label={t('search.movieNameField')}
                        variant="outlined"
                        size="small"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeField(event, 'movieName')}
                        value={searchFormValues.movieName}
                        autoComplete="off"
                    />
                </Grid>
                <Grid item xs={4} sm={4}>
                    <TextField
                        fullWidth
                        label={t('search.yearField')}
                        variant="outlined"
                        size="small"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeField(event, 'year')}
                        autoComplete="off"
                        value={searchFormValues.year}
                        disabled={searchFormValues.movieName === ''}
                    />
                </Grid>
                <Grid item xs>
                    <ButtonWrapper>
                        <StyledButton variant="contained" background={colors.secondary} onClick={handelClear}>
                            {t('search.clear')}
                        </StyledButton>
                    </ButtonWrapper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default SearchPanel;

const Container = styled(Paper)({
    padding: '8px',
    backgroundColor: colors.grey,
    border: `1px solid ${colors.secondary}`,
    borderRadius: '10px',
});

const ButtonWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
});

const StyledButton = styled(Button)(({ background }: { background: string }) => ({
    backgroundColor: background,
    height: '38px !important',
    color: colors.white,
}));
