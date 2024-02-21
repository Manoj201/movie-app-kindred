import { Box } from '@mui/material';
import { styled } from '@mui/system';
import MainRoute from '@routes/MainRoutes';
import React from 'react';

const App: React.FC = () => {
    return (
        <AppContainer>
            {/* <Box>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel id="demo-simple-select-standard-label">Select Language</InputLabel>
                    <Select
                        labelId="demo-simple-select-standard-label"
                        id="demo-simple-select-standard"
                        value={'en'}
                        onChange={() => {}}
                        label="Language"
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        <MenuItem value={'sv'}>Swedish</MenuItem>
                    </Select>
                </FormControl>
            </Box> */}
            <MainRoute />
        </AppContainer>
    );
};

export default App;

const AppContainer = styled(Box)({
    height: '100vh',
    width: '100vw',
});
