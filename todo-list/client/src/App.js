import logo from './logo.svg';
import './App.css';
import { InputComponent } from './components/Input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ButtonComponent } from './components/Button';
import { ToDoInput } from './components/ToDoInput';
import { ToDoField } from './components/ToDoField';
import { Head } from './components/Head';



function App() {
  return (
      <main><div>   
        <Head/>
      </div>
      <div>
        <Stack>
        <Box>
          <ToDoInput name = "User"/>
        </Box>
        <Box>
        <ToDoField task = "Do homework"/>
        <ToDoField task = "Wash a car"/>
        <ToDoField task = "poop"/>
        <ToDoField task = "222"/>
        </Box>
        </Stack>
        </div>
      </main>
  );
}

export default App;