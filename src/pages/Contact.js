import {
    Checkbox,
    FormControlLabel,
    Grid,
    Paper,
    RadioGroup,
    Stack,
    TextField,
    Typography
} from "@mui/material";
import { makeStyles} from "@mui/styles";
import {PrimaryButton} from "../components/PrimaryButton";
import {LocationCity, MailSharp, PhoneInTalk} from "@mui/icons-material";

const useStyles = makeStyles(() => ({
    contactPageContainer: {
        padding: "1rem"
    },
    contactBoxContainer: {
        textAlign: "center",
        border: "1px solid #cecece",
        borderRadius: "22px",
        minWidth: "10rem",
        padding: "10px",
    },
    informationContainer: {
        minWidth: "25rem",
        padding: "1em",
    },
    cardContainer: {
        padding: "1rem"
    },
    mainContainer: {
        height: "auto",
        padding:"5px",
        borderRadius: "22px",
        boxShadow: "1px 10px 10px 10px rgba(0,0,0,0.1)",
    },
    innerContainer: {
        backgroundColor: "#3E2093",
        color: "#cecece",
        padding: "10px!important",
        borderRadius: "22px"
    }
}))

export const Contact = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.contactPageContainer} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"h4"} component={"div"} sx={{fontWeight: 800}}>Contact Us</Typography>
            </Grid>
            <Grid container className={classes.contactPageContainer} alignItems={"center"} justifyContent={"center"}>
                <Typography variant={"p"} component={"div"} sx={{color: "#888"}}>
                    Any questions or remarks? Just write us a message!
                </Typography>
            </Grid>
            <Grid container spacing={3} sx={{width: "60%", margin: "auto"}} className={classes.mainContainer}>
                <Grid item sm={5} className={classes.innerContainer}>
                    <Grid container p={"1rem"}>
                        <Grid item xs={12}>
                            <Typography variant={"h5"} component={"div"}>
                                Contact Information
                            </Typography>
                        </Grid>
                        <Grid item xs={12} mt={"10px"}>
                            <Typography variant={"subtitle"} component={"div"}>
                                Fill the form and our Team will get back to you within 24 hours
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid container item p={"1rem"}>
                            <Grid item>
                                <PhoneInTalk />
                            </Grid>
                            <Grid item>
                                (+91) 98999999
                            </Grid>
                        </Grid>
                        <Grid container item p={"1rem"}>
                            <Grid item>
                                <MailSharp />
                            </Grid>
                            <Grid item>
                                <Typography variant={"p"} component={"div"}>shiva@agmal.com</Typography>
                            </Grid>
                        </Grid>
                        <Grid container item p={"1rem"}>
                            <Grid item>
                                <LocationCity />
                            </Grid>
                            <Grid item>
                                <Typography variant={"p"} component={"div"}>Hyderabad</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item sm={7} p={"1rem"}>
                        <Grid container spacing={2} item sm={12}>
                            <Grid item sm={6}>
                                <TextField InputLabelProps={{shrink: true}} fullWidth label={"First Name"} variant={"standard"} />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField InputLabelProps={{shrink: true}} fullWidth label={"Last Name"} variant={"standard"} />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sm={12} item>
                            <Grid item sm={6}>
                                <TextField placeholder={"Enter your email Id"} InputLabelProps={{shrink: true}} margin={"normal"} fullWidth label={"Email ID"} variant={"standard"} />
                            </Grid>
                            <Grid item sm={6}>
                                <TextField placeholder={"Enter your phone number"} InputLabelProps={{shrink: true}} margin={"normal"} fullWidth label={"Phone Number"} variant={"standard"} type={"number"} />
                            </Grid>
                        </Grid>
                        <Grid container item mt={"1rem"} mb={"1rem"}>
                            <Grid item mt={"1rem"}>
                                <Typography variant={"p"} component={"div"} sx={{fontWeight: "bold"}}>What type of certification do you want?</Typography>
                            </Grid>
                            <Grid item>
                                <FormControlLabel control={<Checkbox  onChange={() => {console.log('here')}} />} label={"BIS"}  />
                                <FormControlLabel control={<Checkbox  onChange={() => {console.log('here')}} />} label={"ISI"}  />
                                <FormControlLabel control={<Checkbox  onChange={() => {console.log('here')}} />} label={"BEE"}  />
                                <FormControlLabel control={<Checkbox  onChange={() => {console.log('here')}} />} label={"TEC"}  />
                                <FormControlLabel control={<Checkbox  onChange={() => {console.log('here')}} />} label={"Other"}  />
                            </Grid>
                        </Grid>
                        <Grid container item sm={12}>
                            <TextField InputLabelProps={{shrink: true}} margin={"normal"} placeholder="Write your message ..." fullWidth={true} label={"Message"} rows={"5"} multiline={true} variant={"standard"} />
                        </Grid>
                    <Grid container justifyContent={"flex-end"} sx={{marginTop: "1rem"}}>
                        <PrimaryButton text={"Send Message"} />
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};