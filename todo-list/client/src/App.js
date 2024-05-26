import logo from './logo.svg';
import './App.css';
import { InputComponent } from './components/Input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ButtonComponent } from './components/Button';
import { ToDoInput } from './components/ToDoInput';
import { ToDoField } from './components/ToDoField';
import { LanguageChange } from './LanguageChange';
import { SettingsTab } from './components/SettingsTab';



function App() {
  return (
      <main>
      <Stack height={"100px"} bgcolor={"black"} flexDirection={"row"} justifyContent={"space-between"} paddingInline={"50px"} alignItems={"center"}>
        <Typography fontSize={"42px"}>TODO List</Typography>
        <Box fontSize={"50px"} display={"flex"} color={"white"}>
          <SettingsTab/>
          <LanguageChange/>
          <Typography color={"white"}>Time</Typography>
        </Box>
      </Stack>
      <div>
        <Stack>
        <Box>
          <ToDoInput name = "User"/>
        </Box>
        <Box>
        <ToDoField task = "Homework"/>
        <ToDoField task = "Wash a car"/>
        <ToDoField task = "fix da toilet"/>
        </Box>
        </Stack>
        </div>
      </main>
  );
}

export default App;