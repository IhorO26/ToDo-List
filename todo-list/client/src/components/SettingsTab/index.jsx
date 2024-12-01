import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { Box, Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from '@mui/material';
import { useState } from 'react';
import {ColorSettings} from '../ColorsSettings'

export const SettingsTab = () => {

   const [open, setOpen] = useState(false);

   const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
   };
   
   const DrawerList = () => {
     return(
      <Box
         role="presentation"
         sx={{ width: 450 }}
         onClick={() =>toggleDrawer(false)}
         onKeyDown={() =>toggleDrawer(false)}
      >
         <List>
            <ListItem>
               <ColorSettings/>
            </ListItem>
            {['Language','Theme'].map((text, item) => (
               <ListItem key={text}>
                  <ListItemButton>
                     <ListItemIcon>

                     </ListItemIcon>
                     <ListItemText primary = {text}>
                     </ListItemText>
                  </ListItemButton>
               </ListItem>
            ))}
         </List>

      </Box>
     );
   };

   return (
      <Box>
         <Tooltip title="Settings" arrow>
            <SettingsSharpIcon
               sx={{ fontSize: "40px", cursor: 'pointer' }}
               onClick={toggleDrawer(true)}
            />
         </Tooltip>
         <Drawer
            anchor='right'
            open={open}
            onClose={toggleDrawer(false)}

         >
            {DrawerList()}
         </Drawer>
      </Box>
   )
}