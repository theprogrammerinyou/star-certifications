import { styled } from "@mui/material/styles";
import { Button, Typography } from "@mui/material";

export const StyledButton = styled(Button)((props) => ({
  color: "#3E2093",
  borderRadius: "22px",
  border: "1px solid #3E2093",
  textTransform: "capitalize",
  padding: "10px",
    minWidth: "10rem",
  "&:hover": {
    border: "1px solid #3E2093",
    background: "#3E2093",
    color: "#fff",
  },
}));

export const SecondaryButton = (props) => {
  return (
    <StyledButton {...props}>
      <Typography variant={"p"} component={"div"}>
        {props.text}
      </Typography>
    </StyledButton>
  );
};
