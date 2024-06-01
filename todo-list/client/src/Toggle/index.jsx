import { Button } from "@mui/base"
import { ButtonBase, Stack, TextField, Typography } from "@mui/material"
import { useState } from "react"

export const UserForm = () =>{
    const [color,setColor] = useState(true);
  

    return(
        <Stack>
        <Button onClick={()=> setClick(click+1)}>+</Button>
        <Typography>{click}</Typography>
        </Stack>

    )
}
