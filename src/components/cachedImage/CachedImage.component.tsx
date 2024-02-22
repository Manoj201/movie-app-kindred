import { Box, Typography } from '@mui/material';
import { colors } from '@theme/index';
import React from 'react';
import { Img } from 'react-image';

interface CachedImageProps {
    src: string;
    width: string;
    height: string;
}

const CachedImage: React.FC<CachedImageProps> = ({ src, width, height }) => {
    const MyLoader = () => (
        <Typography variant="body1" sx={{ color: colors.white, width: '150px', fontWeight: '600' }}>
            Loading
        </Typography>
    );

    const MyErrorComponent = () => (
        <Typography variant="body1" sx={{ color: colors.warning, width: '150px', fontWeight: '600' }}>
            Error loading image.
        </Typography>
    );

    return (
        <Box>
            <Img
                src={src}
                loader={<MyLoader />}
                unloader={<MyErrorComponent />}
                style={{
                    width: width,
                    height: height,
                }}
            />
        </Box>
    );
};

export default CachedImage;
