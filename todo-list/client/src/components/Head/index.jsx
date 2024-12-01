import { Box, Stack, Typography } from '@mui/material';
import { SettingsTab } from '../SettingsTab';
import { LanguageChange } from '../../LanguageChange';
import { TimerComponent } from "../Timer"
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
          <TimerComponent></TimerComponent>
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