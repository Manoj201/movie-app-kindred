import React from 'react';
import { toast } from 'react-toastify';
import { styled } from '@mui/system';
import { Typography, Box } from '@mui/material';

import { colors } from '@theme/index';
import { ToastType } from '@app-types/index';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function getClassNameByType(type: ToastType) {
    switch (type) {
        case ToastType.Success:
            return 'custom-success-toast';
        case ToastType.Warn:
            return 'custom-warn-toast';
        case ToastType.Error:
        default:
            return 'custom-error-toast';
    }
}

const Notification = (title?: string, description?: string, type = ToastType.Error) => {
    return toast(
        <Box display={'flex'} flexDirection={'row'} gap={2}>
            {type === ToastType.Success ? (
                <CheckCircleIcon sx={{ fontSize: 40, color: colors.white }} />
            ) : (
                <WarningAmberIcon sx={{ fontSize: 40, color: colors.white }} />
            )}

            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                {title && <StyledTitle>{title}</StyledTitle>}
                {description && <StyledDescription>{description}</StyledDescription>}
            </Box>
        </Box>,
        { className: getClassNameByType(type) },
    );
};

export default Notification;

const StyledTitle = styled(Typography)({
    fontSize: '20px',
    fontWeight: 700,
    letterSpacing: '0.4px',
    color: colors.white,
    margin: 0,
    lineHeight: '22px',
});

const StyledDescription = styled(Typography)({
    fontSize: '14px',
    fontWeight: 300,
    lineHeight: '120%',
    color: colors.white,
    margin: 0,
    marginTop: '8px',
    letterSpacing: '0.3px',
});
