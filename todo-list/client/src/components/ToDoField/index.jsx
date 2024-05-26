import { Box, Button, Icon, Stack, TextField } from "@mui/material"
import { ButtonComponent } from "../Button"
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

export const ToDoField = ({task}) => {
    return(
    <Stack display={"flex"} alignItems={"center"} paddingTop={"20px"} >
    <Box width={"800px"} display={"flex"} gap={"6px"}>
        <TextField fullWidth variant="outlined" defaultValue={task}/>
        <ButtonComponent  color={"success"} variant = {"outlined"} icon = {<DoneOutlineTwoToneIcon/>}/>       
        <ButtonComponent   color={"error"} variant = {"outlined"} icon={<DeleteOutlineTwoToneIcon/>}/>   
    </Box>
    </Stack>
    );
};