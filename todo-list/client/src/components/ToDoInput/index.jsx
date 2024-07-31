
import { Box, Stack, TextField, Typography } from "@mui/material";
import { ButtonComponent } from "../Button";
import AddTwoToneIcon from '@mui/icons-material/AddTwoTone';
import { LanguageChange } from "../../LanguageChange";
import { useState } from "react";
import { ToDoField } from "../ToDoField";



export const ToDoInput = ({ name, addNewTask }) => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([]);
    

    const handleInputChange = (event) =>{
        setTask(event.target.value)
    };

    const onClick = () => {
        if (task.trim()) {
            const newTask = { id: Date.now(), text: task}
            setTasks([newTask, ...tasks]);
            setTask('');
        }
    };
    const onDelete = (taskId) =>{
        console.log(task.id);
        console.log(taskId);
        setTasks(tasks.filter(task => task.id !== taskId));
    } 
    return (<Stack display={"flex"} alignItems={"center"} paddingTop={"50px"}
        paddingBlockEnd={"40px"}>
        <Box >
            <Typography fontSize={"45px"}>Hello {name}</Typography>
        </Box>
        <Box>
            <Typography fontSize={"35px"}>What's the plans for today?</Typography>
        </Box>
        <Box width={"600px"} display={"flex"}>
            <TextField fullWidth label="What To Do?" value={task} onChange={handleInputChange} variant="standard" sx={{ borderRadius: '12px' } }  />
            <ButtonComponent onClick = {onClick} variant="outlined" icon={<AddTwoToneIcon />} />
        </Box>
        <Box width={"600px"} marginTop={"20px"}>
                {tasks.map(task => (
                    <ToDoField key={task.id} task={task} onDelete={onDelete} />
                ))}
            </Box>
    </Stack>
    );
};
