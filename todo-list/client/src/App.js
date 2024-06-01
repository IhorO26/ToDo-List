import logo from './logo.svg';
import './App.css';
import { InputComponent } from './components/Input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ButtonComponent } from './components/Button';
import { ToDoInput } from './components/ToDoInput';
import { ToDoField } from './components/ToDoField';
import { Head } from './components/Head';
import { useState } from 'react';
import { Toggle, UserForm } from './Toggle';



function App() {
  const [tasks, setTasks] = useState(["Do homework", "Wash a car", "poop", "eat"])
  //const tasks = ["Do homework", "Wash a car", "poop", "eat"]
  const addNewTask = (task) => {
    console.log(task);
    setTasks([...tasks, task])
  }
  return (
    <main><div>
      <Head />
    </div>
      <div>
        <Stack>
          <Box>
            <ToDoInput name="User" addNewTask={addNewTask} />
          </Box>
          <Box>
            {
              tasks.map((task, index) => <ToDoField key={index} task={task} />)
            }

          </Box>
        </Stack>
      </div>
    </main>
  );
}

export default App;