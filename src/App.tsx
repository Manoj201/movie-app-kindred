import { Box } from '@mui/material';
import { styled } from '@mui/system';
import MainRoute from '@routes/MainRoutes';
import React from 'react';

import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
    return (
        <GradientWrapper>
            <AppContainer>
                <MainRoute />
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    draggable
                    pauseOnHover
                    theme="light"
                    closeButton={false}
                />
            </AppContainer>
        </GradientWrapper>
    );
};

export default App;

const GradientWrapper = styled(Box)({
    position: 'relative',
    overflow: 'hidden',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background:
        'radial-gradient(circle 80vh at 5% 5%, #98C040 -40%, #0000 ), radial-gradient(circle 80vh at 95% 95%, #5CAEDB -40%, #3B4248);',
});

const AppContainer = styled(Box)({
    height: '100vh',
    width: '100vw',
});
