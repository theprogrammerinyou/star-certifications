import { Typography, Grid } from "@mui/material";
import { PrimaryButton } from "../components/PrimaryButton";
import { useNavigate } from "react-router-dom";
import { SecondaryButton } from "../components/SecondaryButton";
import { WorkspacePremium } from "@mui/icons-material";

export const Home = () => {
  const history = useNavigate();
  return (
    <>
      <div style={{ padding: "1rem" }}>
        <Typography variant={"h1"} component={"div"}>
          WE ARE YOUR{" "}
        </Typography>
        <Typography style={{ marginTop: "2rem" }} variant="h1" component="div">
          COMPLIANCE PARTNER
        </Typography>
      </div>
      <div>
        <PrimaryButton
          text="Get Started"
          onClick={function () {
            history("/contact");
          }}
          style={{ padding: "10px", margin: "1rem" }}
        />
        <SecondaryButton
          text="About US"
          onClick={function () {
            history("/about");
          }}
          style={{ padding: "10px", margin: "1rem" }}
        />
      </div>
      <section id="services">
        <Grid container style={{ backgroundColor: "#3E2093CC", color: "#fff" }}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              component="div"
              p="10px"
              style={{ textAlign: "center" }}
            >
              WHY CHOOSE US
            </Typography>
          </Grid>
          <Grid item xs={12} style={{ marginTop: "1rem" }}>
            <Typography
              variant="p"
              component="div"
              style={{ textAlign: "center", color: "#111" }}
            >
              We Can Do Crazy Things
            </Typography>
          </Grid>
          <Grid container item spacing={4} p="5rem">
            <Grid item xs={4}>
              <div className="media-left">
                <span className="icon-lightbulb"></span>
              </div>

              <div className="media-body">
                <h3>Professional Team</h3>

                <Typography variant="p" component="div">
                  we have dedicated and committed team of professions, who
                  always eager to do something new and creative thing.
                </Typography>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="media-left">
                <span className="icon-mobile"></span>
              </div>
              <div className="media-body">
                <h3>Client Satisfaction</h3>

                <p>
                  client satisfaction is our first priority. our services start
                  with building up relationship with client.
                </p>
              </div>
            </Grid>

            <Grid item xs={4}>
              <div className="media-left">
                <span className="icon-compass"></span>
              </div>

              <div className="media-body">
                <h3>Time Framwork</h3>

                <p>
                  we belive that time is very important so we focus to deliver
                  our services on definate time to our client.
                </p>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </section>
      <Grid container>
        <Grid item xs={12} mt="1rem">
          <Typography
            variant="h4"
            component="div"
            style={{ textAlign: "center" }}
          >
            How Can we help you?
          </Typography>
        </Grid>
        <Grid container spacing={4} p="5rem">
          <Grid item xs={3}>
            {" "}
            <WorkspacePremium fontSize="large" />
            <p style={{ fontWeight: "bold" }}>BIS Certification</p>
            <p>
              The Bill seeks to broaden its ambit, and allow the central
              government to make it mandatory for certain notified goods,
              articles, processes, etc, to carry the standard mark. Under “CRO
              Order 2012″from MeitY BIS is issuing the Registration of
              Electronics & IT Products after they are tested in the BIS
              approved and NABL Accredited labs in Indi
            </p>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <WorkspacePremium fontSize="large" />
            <p style={{ fontWeight: "bold" }}>TEC Certification</p>{" "}
            <p>
              Star Certifications is deals with the products to understand the
              requirement of testing. Department of Telecommunications, Ministry
              of Communications has notified “Indian Telegraph (Amendment)
              Rules” in Gazette of India vide G.S.R. 1131(E) PART XI" on 5th
              September 2017 which prescribes for Mandatory Testing and
              Certification of Telecommunication Equipment
            </p>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <WorkspacePremium fontSize="large" />
            <p style={{ fontWeight: "bold" }}>WPC Certification</p>{" "}
            <p>
              It caters the needs of all wireless users in the country,
              government or private, security or non-security. WPC is also the
              national agency for all matters related to Radio communication
              sector of International Telecommunication Union (ITU) and
              Asia-Pacific Telecommunity (APT) and is responsible for treaty
              obligations on behalf of the Government
            </p>
          </Grid>

          <Grid item xs={3}>
            {" "}
            <WorkspacePremium fontSize="large" />
            <p style={{fontWeight: "bold"}}>Other Certifications</p>
            <p>
              We also deal with other certifications such as Energy Efficient
              Testing and labelling, and also provide E-waste consultancy. So if
              you are searching for something specific and we can check how we
              can help you.
            </p>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
