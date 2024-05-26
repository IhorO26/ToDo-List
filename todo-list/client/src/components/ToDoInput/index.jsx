
import { Box, Stack, TextField, Typography } from "@mui/material";
import { ButtonComponent } from "../Button";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { LanguageChange } from "../../LanguageChange";


export const ToDoInput = ({name}) => {
    return (<Stack display={"flex"} alignItems={"center"} paddingTop={"50px"}
    paddingBlockEnd={"40px"}>
        <Box >        
            <Typography fontSize={"45px"}>Hello {name}</Typography>
            <Typography fontSize={"35px"}>What's the plans for today?</Typography>
        </Box>
        <Box width={"600px"} display={"flex"}>
            <TextField fullWidth label = "What To Do?" variant="standard" sx={{borderRadius:'12px'}}/>
            <ButtonComponent variant = "outlined" icon = {<AddTwoToneIcon/>} />
        </Box>
        </Stack>
    );
};
