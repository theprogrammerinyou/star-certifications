import { Grid} from "@mui/material";
import {Link} from "react-router-dom";
import { LinkButton} from "./LinkButton";
import { PrimaryButton} from "./PrimaryButton";
import { makeStyles} from "@mui/styles";

const useStyles = makeStyles(() => ({
    container: {
        padding: "1rem",
        borderBottom:"1px solid #cecece"
    }
}))

export const Navbar = () => {

    const classes = useStyles();

    return  (
        <Grid container alignItems={"center"} className={classes.container}>
            <Grid item md={2}>
                <img src={"/img/img.png"} alt={"star-logo"} style={{width: "50%", height: "auto"}}/>
            </Grid>
            <Grid item md={1} />
            <Grid container item md={7}>
                <Grid item md={2}>
                    <LinkButton component={Link} to={"/home"}>Home</LinkButton>
                </Grid>
                <Grid item md={2}>
                    <LinkButton component={Link} to={"/services"}>Services</LinkButton>
                </Grid>
                <Grid item md={2}>
                    <LinkButton component={Link} to={"/about"}>About</LinkButton>
                </Grid>
                <Grid item md={2}>
                    <LinkButton component={Link} to={"/contact"}>Contact</LinkButton>
                </Grid>
            </Grid>
            <Grid item md={2}>
                <PrimaryButton component={Link} to={"/contact"} text={"Get Started"} />
            </Grid>
        </Grid>
    )
}