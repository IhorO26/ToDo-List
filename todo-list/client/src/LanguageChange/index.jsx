import LanguageIcon from '@mui/icons-material/Language';
import { Box, Tooltip } from '@mui/material';

export const LanguageChange = () => {
    return (
        <Box>
            <Tooltip title="Select Language" arrow>
            <LanguageIcon sx={{fontSize:"40px"}} />
            </Tooltip>
        </Box>
    )
}