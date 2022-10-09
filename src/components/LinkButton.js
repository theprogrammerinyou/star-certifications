import { styled} from "@mui/material/styles";
import { Button} from "@mui/material";

export const StyledButton = styled(Button)(() => ({
    textTransform:"capitalize",
    color: "#888"
}))

export const LinkButton = (props) => {
    return (
        <StyledButton {...props}/>
    )
}