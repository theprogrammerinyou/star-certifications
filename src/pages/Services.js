import * as React from "react";
import { styled } from "@mui/material/styles";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import { PrimaryButton } from "../components/PrimaryButton";
import { SecondaryButton} from "../components/SecondaryButton"

const services = [
    {
        title: "BIS Certification",
    },
    {
        title: "TEC Certification",
    },
    {
        title: "WPC Certification",
    },
    {
        title: "Energy Efficiency Testing and Labelling",
    },
    {
        title: "ROHS and E-Waste Consultancy",
    }
]

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "capitalize",
    color: "#888",
    fontWeight: "700",
    fontSize: theme.typography.pxToRem(14),
    fontFamily: "Montserrat",
    marginRight: theme.spacing(1),
    alignItems: "flex-start",
  })
);

export function Services() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const openBISWebsite = () => {
    window.open("https://www.bis.gov.in/");
  }

  const openCRSWebsite = () => {
    window.open("https://www.crsbis.in/BIS/products-bis.do");
  }

  return (
    <>
      <Typography variant="h2" component="div" style={{textAlign: "center"}}>
        Services
      </Typography>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          padding: "1rem"
        }}
      >
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="vertical-tabs"
          sx={{ width: "100%" }}
          TabIndicatorProps={{
            style: {
              backgroundColor: "#888",
              width: "4px",
              height: "36px",
            },
          }}
        >
          {services.map((service, index) => (
            <StyledTab
              key={index}
              label={service.title}
              {...a11yProps(index)}
            />
          ))}
        </Tabs>
        <TabPanel value={value} index={0}>
          <Typography variant="p" component="div">
            Bureau of Indian Standards (BIS), the National Standards Body has
            been successfully promoting and nurturing standards movement within
            the country since 1947. BIS Act 1986 provides for the establishment
            of a Bureau for the harmonious development of the activities of
            standardization, marking and quality certification. The BIS ACT 2016
            replaces the Bureau of Indian Standards Act, 1986. The Act
            establishes a Bureau for the purpose of standardization, marking and
            certification of articles and processes. The Bill seeks to broaden
            its ambit, and allow the central government to make it mandatory for
            certain notified goods, articles, processes, etc, to carry the
            standard mark. Under “CRO Order 2012″from MeitY BIS is issuing the
            Registration of Electronics & IT Products after they are tested in
            the BIS approved and NABL Accredited labs in India. There is a
            category of 30 products listed by MeitY and which must be BIS
            approved before they can be manufactured in India or imported from
            outside India. Central Marks Department III is the concerned group
            at BIS Head Quarters in New Delhi who is granting Registration under
            Compulsory Registration Scheme
          </Typography>
          <div style={{ marginTop: "1rem" }}>
            <PrimaryButton
              onClick={openBISWebsite}
              text="Know More about BIS"
            />
            <SecondaryButton
              onClick={openCRSWebsite}
              style={{ marginLeft: "2rem" }}
              text="Know More about products"
            />
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          TEC (TELECOMMUNICATION ENGINEERING CENTER) is a government body
          which deals in the certification of Telecommunication products. 2. TEC
          has made mandatory of 45 products in the year 2018 3. The telecom
          products need to be get certified by the TEC to market the products.
          4.Star Certifications is deals with the products to understand the
          requirement of testing. Department of Telecommunications, Ministry of
          Communications has notified “Indian Telegraph (Amendment) Rules” in
          Gazette of India vide G.S.R. 1131(E) PART XI" on 5th September 2017
          which prescribes for Mandatory Testing and Certification of
          Telecommunication Equipment. Any telegraph which is used or capable of
          being used with any telegraph established, maintained or worked under
          the licence granted by the Central Government in accordance with the
          provisions of section 4 of the Indian Telegraph Act, 1885 (hereinafter
          referred to as the said Act), shall have to undergo prior mandatory
          testing and certification in respect of parameters as determined by
          the telegraph authority from time to time. Telecommunication
          Engineering Centre, New Delhi, under Department of Telecommunications
          (DoT), which, inter alia, is the Telegraph Authority for the purpose
          of Testing and Certification. The detailed procedure for Mandatory
          Testing and Certification of Telecommunication Equipment (MTCTE) under
          these rules are notified separately. The testing is to be carried out
          by Indian Accredited labs and based upon their test reports,
          certificate shall be issued by TEC. Surveillance of products under
          MTCTE is carried out by Licensed Service Area (LSA) field units of
          Department of Telecommunications
        </TabPanel>
        <TabPanel value={value} index={2}>
          The Wireless Planning & Coordination (WPC) Wing of the Ministry of
          Communication & Information Technology, created in 1952, is the
          national radio regulatory nodal agency of the Government of India and
          is responsible for planning, regulating, and managing the limited
          resources of Radio Frequency (RF) spectrum and associated satellite
          orbits, including geo-stationary satellite orbit as well as licensing
          of wireless stations in the country under the Indian Telegraph Act
          1885 (ITA 1885) and the Indian Wireless Telegraphy Act 1933 (IWTA
          1933), as statutory requirement. It caters the needs of all wireless
          users in the country, government or private, security or non-security.
          WPC is also the national agency for all matters related to Radio
          communication sector of International Telecommunication Union (ITU)
          and Asia-Pacific Telecommunity (APT) and is responsible for treaty
          obligations on behalf of the Government. Headquartered in the
          Ministry, WPC Wing has presently been organised into the following
          nine Bureaus : 1. Satellite 2. Standing Advisory Committee on
          Frequency Allocation (SACFA) 3. Upto 806 MHz Frequency 4. Above 806
          MHz Frequency 5. International/national Coordination and Conference
          work & Project Implementation 6. ASMS & IT (for WPC) 7. COP
          Examination & Amateur Licensing, Regulation and Administration 8. GSM
          & 3G 9. BWA & CDMA
        </TabPanel>
        <TabPanel value={value} index={3}>
          About the BEE The Government of India set up Bureau of Energy
          Efficiency (BEE) on 1st March 2002 under the provisions of the Energy
          Conservation Act, 2001. The mission of the Bureau of Energy Efficiency
          is to assist in developing policies and strategies with a thrust on
          self-regulation and market principles, within the overall framework of
          the Energy Conservation Act, 2001 with the primary objective of
          reducing energy intensity of the Indian economy. This will be achieved
          with active participation of all stakeholders, resulting in
          accelerated and sustained adoption of energy efficiency in all
          sectors. Products under mandatory scheme Schedule 1 – Frost Free
          (No-Frost) Refrigerator Schedule 2 – Tubular Fluorescent Lamps
          Schedule 3 – Room Air Conditioners Schedule 3(A) – RAC (Cassette,
          Floor Standing Tower, Ceiling, Corner AC) Schedule 4 – Distribution
          Transformer Schedule 5 – Direct Cool Refrigerator Schedule 10 –
          Electric Geysers Schedule 11 – Color TV Products under voluntary
          scheme Schedule 6 – Induction Motors Schedule 7 – Agricultural Pump
          Sets Schedule 8 – Ceiling Fans Schedule 9 -Domestic Liquefied
          Petroleum Gas(LPG) Stoves Schedule 12 – Washing Machine Schedule 14 –
          Computer (Notebook /Laptops) Schedule 15 – Ballast
          (Electronic/Magnetic) Schedule 16 – Office equipment’s (Printer,
          Copier, Scanner, MFD’s). Schedule 13-Diesel Engine Driven Monoset
          Pumps for Agricultural Purposes Schedule 17 Solid State Inverter
          Schedule 18 Diesel Generator Schedule 19 VARIABLE CAPACITY AIR
          CONDITIONERS Schedule 20 LED LAMPS Star Certifications provides
          advisory services to help manufacturers get BEE Star ratings for their
          appliances. Products under mandatory scheme Schedule 1 – Frost Free
          (No-Frost) Refrigerator Schedule 2 – Tubular Fluorescent Lamps
          Schedule 3 – Room Air Conditioners Schedule 3(A) – RAC (Cassette,
          Floor Standing Tower, Ceiling, Corner AC) Schedule 4 – Distribution
          Transformer Schedule 5 – Direct Cool Refrigerator Schedule 10 –
          Electric Geysers Schedule 11 – Color TV Products under voluntary
          scheme Schedule 6 – Induction Motors Schedule 7 – Agricultural Pump
          Sets Schedule 8 – Ceiling Fans Schedule 9 -Domestic Liquefied
          Petroleum Gas(LPG) Stoves Schedule 12 – Washing Machine Schedule 14 –
          Computer (Notebook /Laptops) Schedule 15 – Ballast
          (Electronic/Magnetic) Schedule 16 – Office equipment’s (Printer,
          Copier, Scanner, MFD’s). Schedule 13-Diesel Engine Driven Monoset
          Pumps for Agricultural Purposes Schedule 17 Solid State Inverter
          Schedule 18 Diesel Generator Schedule 19 VARIABLE CAPACITY AIR
          CONDITIONERS Schedule 20 LED LAMPS Star Certifications provides
          advisory services to help manufacturers get BEE Star ratings for their
          appliances..
        </TabPanel>
        <TabPanel value={value} index={4}>
          Electronic waste (e-waste) is one of the fastest growing waste streams
          in the country. Growth of Information and Communication Technology
          sector has enhanced the usage of the electronic equipment
          exponentially. Faster obsolescence and subsequent up-gradation of
          electronics product, are forcing consumers to discard old products,
          which in turn accumulate huge e-waste to the solid waste stream.
          E-waste is growing in India at the rate of 10%. Major recycling of
          e-waste is carried out in the non-formal sector using primitive and
          hazardous methods. Adequate legislative measures and cost-effective,
          environmental friendly, technological solution would be needed to
          address the issue. This article provides the basic information on
          electronic waste management in India. These rules are applicable to
          every producer, consumer or bulk consumer, collection centre,
          dismantler and recycler of e-waste involved in the manufacture, sale,
          purchase and processing of electrical and electronic equipment or
          components. The E-Waste (Management) Rules, 2016 mandate CPCB to
          prepare guidelines on implementation of E-Waste Rules, which includes
          specific guidelines for extended producer responsibility,
          channelization, collection centres, storage, transportation,
          environmentally sound dismantling and recycling, refurbishment, and
          random sampling of EEE for testing of RoHS parameters. Star
          Certificationsprovides RoHS certifications services, which is also
          closely linked with the Waste Electrical and Electronic Equipment
          Directive (WEEE) 2002/96/EC, which sets collection, recycling and
          recovery targets for electrical goods and is part of a legislative
          initiative to solve the increasing problem of huge amounts of toxic
          e-waste.
        </TabPanel>
      </Box>
    </>
  );
}
