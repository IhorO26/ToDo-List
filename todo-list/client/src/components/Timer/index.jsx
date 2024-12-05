import React  from 'react';
import Clock from 'react-live-clock';
import { Box } from '@mui/material';

export const TimerComponent =() => {
    
        return (
            <Box alignItems={'center'} >
            <Clock format={'HH:mm:ss'} ticking={true} timezone={'Europe/Ukraine'} interval={1000} style = {{fontSize: "20px"}} paddingBottom={"1px"}/><br/>
            <Clock format={'dddd'} ttimezone={'Europe/Ukraine'} style = {{fontSize: "20px"}} /><br/>
            <Clock format={'D:MM:YYYY'} ttimezone={'Europe/Ukraine'} style = {{fontSize: "20px"}}/>
            </Box>
        );
    }