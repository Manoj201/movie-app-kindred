import React, { useMemo, useState } from 'react';
import { Button, Grid, Paper, TextField, Box, Typography } from '@mui/material';
import { debounce } from 'lodash';
import { styled } from '@mui/system';
import { colors, labelWeights } from '@theme/index';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { movieActions } from '@store/movie.slice';

interface SearchPanelProps {}

interface FormvalueType {
    movieName: string;
    year: string;
}

// Please note this is not production ready implementation, for production huge forms we can use Formik library for hande form validation and submision
// for test purpose I have used simple form with locat state and debounce for search

const SearchPanel: React.FC<SearchPanelProps> = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [searchFormValues, setSearchFormValues] = useState<FormvalueType>({
        movieName: '',
        year: '',
    });

    const handleSearch = (latestFormValues: FormvalueType) => {
        if (latestFormValues.movieName !== '' || latestFormValues.year !== '') {
            dispatch(
                movieActions.getMovieList({
                    search: latestFormValues.movieName,
                    year: latestFormValues.year,
                    page: '1',
                }),
            );
        } else {
            dispatch(movieActions.cleanupMovieList());
        }
    };

    const textChangeDebouncer = useMemo(() => debounce(handleSearch, 500), []);

    const onChangeField = (event: React.ChangeEvent<HTMLInputElement>, fieldName: string) => {
        const updatedFormValues: FormvalueType = { ...searchFormValues, [fieldName]: event.target.value };
        setSearchFormValues(updatedFormValues);
        textChangeDebouncer(updatedFormValues);
    };

    const handelClear = () => {
        setSearchFormValues({ movieName: '', year: '' });
        dispatch(movieActions.cleanupMovieList());
    };

    return (
        <Container elevation={0}>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
                <Grid item xs={12} sm={6}>
                    <TextField
                        fullWidth
                        label={t('search.movieNameField')}
                        variant="outlined"
                        size="small"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeField(event, 'movieName')}
                        value={searchFormValues.movieName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        fullWidth
                        label={t('search.yearField')}
                        variant="outlined"
                        size="small"
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => onChangeField(event, 'year')}
                        value={searchFormValues.year}
                    />
                </Grid>
                <Grid item xs={12} sm={2}>
                    <ButtonWrapper>
                        <StyledButton variant="contained" background={colors.secondary} onClick={handelClear}>
                            {t('search.clear')}
                        </StyledButton>
                    </ButtonWrapper>
                </Grid>
            </Grid>
            <Typography sx={{ color: colors.info, fontSize: '14px', fontWeight: labelWeights.bold, marginTop: '10px' }}>
                {t('search.info')}
            </Typography>
        </Container>
    );
};

export default SearchPanel;

const Container = styled(Paper)({
    padding: '30px',
    backgroundColor: colors.light,
    border: `1px solid ${colors.primary}`,
});

const ButtonWrapper = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
});

const StyledButton = styled(Button)(({ background }: { background: string }) => ({
    backgroundColor: background,
    height: '38px !important',
}));
