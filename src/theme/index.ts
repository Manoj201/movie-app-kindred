import { createTheme } from '@mui/material';

export const colors = {
    primary: '#007bff',
    secondary: '#6c757d',
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#3B4248',
    white: '#ffffff',
    black: '#000000',
    grey: '#4C4C4C',
    darkGrey: '#474747',
    green: '#6EC531',
};

export const labelSizes = {
    header: '25px',
};

export const labelWeights = {
    bold: 700,
    normal: 400,
};

export const baseTheme = createTheme({
    palette: {
        primary: {
            main: colors.white,
        },
        secondary: {
            main: colors.secondary,
        },
    },
    components: {
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    color: colors.white,
                    '&.Mui-focused': {
                        color: colors.white, // replace 'desired color' with the color you want
                    },
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '5px',

                    '.MuiOutlinedInput-notchedOutline': {
                        borderColor: colors.white,
                    },
                    '.MuiInputBase-input': {
                        color: colors.white,
                    },

                    '& input': {
                        color: colors.white,
                    },
                },
            },
        },
    },
});
