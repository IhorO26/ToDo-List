import { Box } from "@mui/material"
import { MaterialUISwitch } from "../MaterialUiSwitch"

export const ColorSettings = () => {
  return(
    <Box paddingTop={"30px"} justifyContent={"center"}>
      <img src="/src/assets/DayTheme.png" style={{width: "50px"}}/>
      <MaterialUISwitch/>
    </Box>
  )
}

