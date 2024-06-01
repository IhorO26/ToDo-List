import { Button, } from "@mui/material"
import { LanguageIcon } from '@mui/icons-material/Language';



export const ButtonComponent = ({ variant, text, color, icon, onClick }) => {

    return (
        <Button onClick={onClick} size="large" variant={variant} color={color} sx={{ borderRadius: '12px' }} > {icon} {text}</Button>
    )

}

