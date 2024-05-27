import { Box, Stack, Typography } from '@mui/material';
import { SettingsTab } from '../SettingsTab';
import { LanguageChange } from '../../LanguageChange';


export const Head = () => {
    return(
        <Stack  height={"100px"} 
      bgcolor={"black"} 
      flexDirection={"row"}  
      paddingInline={"50px"} 
      alignItems={"center"} 
      color={"white"}>
        
        <Box  display={"flex"} 
        alignItems={"center"} 
        justifyContent={"flex-start"} 
        flex={1}>
          <Typography color={"white"} paddingLeft={"10px"}>Time</Typography>
          </Box>
          <Box 
          justifyContent={"center"}
          flex={1}
          display={"flex"}
          alignItems={"center"}>
          <Typography fontSize={"42px"}>TODO List</Typography>
          </Box>
          <Box  display={"flex"} 
                alignItems={"center"} 
                justifyContent={"flex-end"} 
                flex={1}
            >
          <SettingsTab/>
          <LanguageChange/>
          </Box>
      </Stack>
    );
};