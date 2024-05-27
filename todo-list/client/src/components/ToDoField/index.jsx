import { Box, Button, Icon, Stack, TextField, styled } from "@mui/material"
import { ButtonComponent } from "../Button"
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';

export const ToDoField = ({task}) => {
    const StyledTextField = styled(TextField)(({ theme }) => ({
        '& .MuiInputBase-root': {
          borderRadius: '12px',
          border: '1px solid rgba(0, 0, 0, 0.23)',
          padding: '1px 10px',  // Добавление отступов для правильного отображения закругленных углов
        },
        '& .MuiInput-underline:before': {
          borderBottom: 'none', // Убираем нижнюю линию до фокуса
        },
        '& .MuiInput-underline:after': {
          borderBottom: 'none', // Убираем нижнюю линию после фокуса
        },
      }));
    return(
    <Stack display={"flex"} alignItems={"center"} paddingTop={"10px"} >
    <Box width={"800px"} display={"flex"} gap={"4px"} border={"2px solid rgba(0, 0, 0, 0.23)"} borderRadius={"15px"} 
        padding={"4px"} >
        <StyledTextField fullWidth variant="outlined" defaultValue={task} />
        <ButtonComponent  color={"success"} variant = {"outlined"} icon = {<DoneOutlineTwoToneIcon/>}/>       
        <ButtonComponent   color={"error"} variant = {"outlined"} icon={<DeleteOutlineTwoToneIcon/>}/>   
    </Box>
    </Stack>
    );
};