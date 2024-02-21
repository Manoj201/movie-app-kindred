import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, Typography } from '@mui/material';
import { colors, labelSizes, labelWeights } from '@theme/index';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

const AppLayout: React.FC = () => {
    const {
        t,
        i18n: { changeLanguage, language },
    } = useTranslation();

    return (
        <>
            <Grid container justifyContent="center" sx={{ backgroundColor: colors.primary, padding: '30px' }}>
                <Grid item xs={12} lg={6}>
                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography
                            sx={{
                                color: colors.light,
                                fontSize: labelSizes.header,
                                fontWeight: labelWeights.bold,
                                marginBottom: '20px',
                            }}
                        >
                            {t('layout.header')}
                        </Typography>
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
