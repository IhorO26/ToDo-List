import logo from './logo.svg';
import './App.css';
import { InputComponent } from './components/Input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ButtonComponent } from './components/Button';


function App() {
  return (
    <div >
      <Stack height={"100px"} bgcolor={"#80e8ff"} flexDirection={"row"} justifyContent={"space-between"} paddingInline={"50px"} alignItems={"center"}>
        <Typography fontSize={"42px"}>TODO List</Typography>
        <box>
          Time
        </box>
      </Stack>
      <main class="main">
        <Box>
          <Typography >Hello User</Typography>
          </Box>
      <Stack direction={"row"} textAlign={"center"} width={1} height={400} alignItems={"center"}>
        <Box sx={{bgcolor:"pink"}}>
        <Typography>What's the plans for today?</Typography>
        <InputComponent placeholder={"What TODO?"} />
        </Box>
        <ButtonComponent/>
      </Stack>
      </main>
    </div>
  );
}

export default App;