import { Button, } from "@mui/material"
import { LanguageIcon } from '@mui/icons-material/Language';


export const ButtonComponent = ({variant,text,color,icon})=>{
    return(
        <Button size="large" variant = {variant} color = {color} sx={{borderRadius:'12px'}} > {icon} {text}</Button>
    )
        
}

