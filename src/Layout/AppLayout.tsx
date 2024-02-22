import {
    Box,
    Button,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Theme,
    Typography,
} from '@mui/material';
import { colors, labelSizes, labelWeights } from '@theme/index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

const AppLayout: React.FC = () => {
    const {
        t,
        i18n: { changeLanguage, language },
    } = useTranslation();

    const location = useLocation();
    const navigate = useNavigate();

    return (
        <>
            <Grid container justifyContent="center" sx={{ backgroundColor: colors.dark, padding: '10px 20px' }}>
                <Grid item xs={12} lg={6}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box
                            sx={(theme: Theme) => ({
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                [theme.breakpoints.only('xs')]: {
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                },
                            })}
                        >
                            <Typography
                                sx={{
                                    color: colors.light,
                                    fontSize: labelSizes.header,
                                    fontWeight: labelWeights.bold,
                                }}
                            >
                                {t('layout.header')}
                            </Typography>
                            {location.pathname !== '/movies' && (
                                <Button
                                    startIcon={<HomeIcon sx={{ color: colors.white }} />}
                                    size="small"
                                    sx={(theme: Theme) => ({
                                        backgroundColor: colors.primary,
                                        color: colors.light,
                                        fontWeight: labelWeights.bold,
                                        borderRadius: '20px',
                                        width: '110px',
                                        marginLeft: '20px',
                                        [theme.breakpoints.only('xs')]: {
                                            marginLeft: '0px',
                                        },
                                    })}
                                    onClick={() => {
                                        navigate('/movies', { replace: true });
                                    }}
                                >
                                    {t('layout.home')}
                                </Button>
                            )}
                        </Box>

                        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel
                                id="demo-simple-select-standard-label"
                                sx={{
                                    color: colors.light,
                                    '&.Mui-focused': {
                                        color: colors.light,
                                    },
                                }}
                            >
                                {t('layout.language')}
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={language}
                                onChange={(event: SelectChangeEvent) => {
                                    changeLanguage(event.target.value as string);
                                }}
                                label="Language"
                                sx={{ color: colors.light }}
                            >
                                <MenuItem value={'en'}>English</MenuItem>
                                <MenuItem value={'sv'}>Swedish</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>

            <Outlet />
        </>
    );
};

export default AppLayout;
