import {
  Button,
  TextField,
  Typography,
  MenuItem,
  Snackbar,
  Alert,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../HeaderComponents/Header";
import {
  signUpFirstName,
  signUpLastName,
  signUpPhoneNumber,
  signUpPassword,
  phoneNumberCode,
} from "../../redux/action/index";
import { useDispatch, useSelector } from "react-redux";
import { signUpInfo } from "../../redux/reducer/reducer";
import axios from "axios"
import Footer from "../FooterComponents/Footer";
import { useTranslation } from "react-i18next";


const Base_url = process.env.REACT_APP_Axios_Base_urls


const SignUpUserDetails = () => {

  const {t} = useTranslation()
  const navigate = useNavigate();
  const [Country, setCountry] = React.useState("");

  const countries = [
    {
      code: "+7 840",
      name: "Abkhazia",
    },
    {
      code: "+93",
      name: "Afghanistan",
    },
    {
      code: "+355",
      name: "Albania",
    },
    {
      code: "+213",
      name: "Algeria",
    },
    {
      code: "+1 684",
      name: "American Samoa",
    },
    {
      code: "+376",
      name: "Andorra",
    },
    {
      code: "+244",
      name: "Angola",
    },
    {
      code: "+1 264",
      name: "Anguilla",
    },
    {
      code: "+1 268",
      name: "Antigua and Barbuda",
    },
    {
      code: "+54",
      name: "Argentina",
    },
    {
      code: "+374",
      name: "Armenia",
    },
    {
      code: "+297",
      name: "Aruba",
    },
    {
      code: "+247",
      name: "Ascension",
    },
    {
      code: "+61",
      name: "Australia",
    },
    {
      code: "+672",
      name: "Australian External Territories",
    },
    {
      code: "+43",
      name: "Austria",
    },
    {
      code: "+994",
      name: "Azerbaijan",
    },
    {
      code: "+1 242",
      name: "Bahamas",
    },
    {
      code: "+973",
      name: "Bahrain",
    },
    {
      code: "+880",
      name: "Bangladesh",
    },
    {
      code: "+1 246",
      name: "Barbados",
    },
    {
      code: "+1 268",
      name: "Barbuda",
    },
    {
      code: "+375",
      name: "Belarus",
    },
    {
      code: "+32",
      name: "Belgium",
    },
    {
      code: "+501",
      name: "Belize",
    },
    {
      code: "+229",
      name: "Benin",
    },
    {
      code: "+1 441",
      name: "Bermuda",
    },
    {
      code: "+975",
      name: "Bhutan",
    },
    {
      code: "+591",
      name: "Bolivia",
    },
    {
      code: "+387",
      name: "Bosnia and Herzegovina",
    },
    {
      code: "+267",
      name: "Botswana",
    },
    {
      code: "+55",
      name: "Brazil",
    },
    {
      code: "+246",
      name: "British Indian Ocean Territory",
    },
    {
      code: "+1 284",
      name: "British Virgin Islands",
    },
    {
      code: "+673",
      name: "Brunei",
    },
    {
      code: "+359",
      name: "Bulgaria",
    },
    {
      code: "+226",
      name: "Burkina Faso",
    },
    {
      code: "+257",
      name: "Burundi",
    },
    {
      code: "+855",
      name: "Cambodia",
    },
    {
      code: "+237",
      name: "Cameroon",
    },
    {
      code: "+1",
      name: "Canada",
    },
    {
      code: "+238",
      name: "Cape Verde",
    },
    {
      code: "+ 345",
      name: "Cayman Islands",
    },
    {
      code: "+236",
      name: "Central African Republic",
    },
    {
      code: "+235",
      name: "Chad",
    },
    {
      code: "+56",
      name: "Chile",
    },
    {
      code: "+86",
      name: "China",
    },
    {
      code: "+61",
      name: "Christmas Island",
    },
    {
      code: "+61",
      name: "Cocos-Keeling Islands",
    },
    {
      code: "+57",
      name: "Colombia",
    },
    {
      code: "+269",
      name: "Comoros",
    },
    {
      code: "+242",
      name: "Congo",
    },
    {
      code: "+243",
      name: "Congo, Dem. Rep. of (Zaire)",
    },
    {
      code: "+682",
      name: "Cook Islands",
    },
    {
      code: "+506",
      name: "Costa Rica",
    },
    {
      code: "+385",
      name: "Croatia",
    },
    {
      code: "+53",
      name: "Cuba",
    },
    {
      code: "+599",
      name: "Curacao",
    },
    {
      code: "+537",
      name: "Cyprus",
    },
    {
      code: "+420",
      name: "Czech Republic",
    },
    {
      code: "+45",
      name: "Denmark",
    },
    {
      code: "+246",
      name: "Diego Garcia",
    },
    {
      code: "+253",
      name: "Djibouti",
    },
    {
      code: "+1 767",
      name: "Dominica",
    },
    {
      code: "+1 809",
      name: "Dominican Republic",
    },
    {
      code: "+670",
      name: "East Timor",
    },
    {
      code: "+56",
      name: "Easter Island",
    },
    {
      code: "+593",
      name: "Ecuador",
    },
    {
      code: "+20",
      name: "Egypt",
    },
    {
      code: "+503",
      name: "El Salvador",
    },
    {
      code: "+240",
      name: "Equatorial Guinea",
    },
    {
      code: "+291",
      name: "Eritrea",
    },
    {
      code: "+372",
      name: "Estonia",
    },
    {
      code: "+251",
      name: "Ethiopia",
    },
    {
      code: "+500",
      name: "Falkland Islands",
    },
    {
      code: "+298",
      name: "Faroe Islands",
    },
    {
      code: "+679",
      name: "Fiji",
    },
    {
      code: "+358",
      name: "Finland",
    },
    {
      code: "+33",
      name: "France",
    },
    {
      code: "+596",
      name: "French Antilles",
    },
    {
      code: "+594",
      name: "French Guiana",
    },
    {
      code: "+689",
      name: "French Polynesia",
    },
    {
      code: "+241",
      name: "Gabon",
    },
    {
      code: "+220",
      name: "Gambia",
    },
    {
      code: "+995",
      name: "Georgia",
    },
    {
      code: "+49",
      name: "Germany",
    },
    {
      code: "+233",
      name: "Ghana",
    },
    {
      code: "+350",
      name: "Gibraltar",
    },
    {
      code: "+30",
      name: "Greece",
    },
    {
      code: "+299",
      name: "Greenland",
    },
    {
      code: "+1 473",
      name: "Grenada",
    },
    {
      code: "+590",
      name: "Guadeloupe",
    },
    {
      code: "+1 671",
      name: "Guam",
    },
    {
      code: "+502",
      name: "Guatemala",
    },
    {
      code: "+224",
      name: "Guinea",
    },
    {
      code: "+245",
      name: "Guinea-Bissau",
    },
    {
      code: "+595",
      name: "Guyana",
    },
    {
      code: "+509",
      name: "Haiti",
    },
    {
      code: "+504",
      name: "Honduras",
    },
    {
      code: "+852",
      name: "Hong Kong SAR China",
    },
    {
      code: "+36",
      name: "Hungary",
    },
    {
      code: "+354",
      name: "Iceland",
    },
    {
      code: "+91",
      name: "India",
    },
    {
      code: "+62",
      name: "Indonesia",
    },
    {
      code: "+98",
      name: "Iran",
    },
    {
      code: "+964",
      name: "Iraq",
    },
    {
      code: "+353",
      name: "Ireland",
    },
    {
      code: "+972",
      name: "Israel",
    },
    {
      code: "+39",
      name: "Italy",
    },
    {
      code: "+225",
      name: "Ivory Coast",
    },
    {
      code: "+1 876",
      name: "Jamaica",
    },
    {
      code: "+81",
      name: "Japan",
    },
    {
      code: "+962",
      name: "Jordan",
    },
    {
      code: "+7 7",
      name: "Kazakhstan",
    },
    {
      code: "+254",
      name: "Kenya",
    },
    {
      code: "+686",
      name: "Kiribati",
    },
    {
      code: "+965",
      name: "Kuwait",
    },
    {
      code: "+996",
      name: "Kyrgyzstan",
    },
    {
      code: "+856",
      name: "Laos",
    },
    {
      code: "+371",
      name: "Latvia",
    },
    {
      code: "+961",
      name: "Lebanon",
    },
    {
      code: "+266",
      name: "Lesotho",
    },
    {
      code: "+231",
      name: "Liberia",
    },
    {
      code: "+218",
      name: "Libya",
    },
    {
      code: "+423",
      name: "Liechtenstein",
    },
    {
      code: "+370",
      name: "Lithuania",
    },
    {
      code: "+352",
      name: "Luxembourg",
    },
    {
      code: "+853",
      name: "Macau SAR China",
    },
    {
      code: "+389",
      name: "Macedonia",
    },
    {
      code: "+261",
      name: "Madagascar",
    },
    {
      code: "+265",
      name: "Malawi",
    },
    {
      code: "+60",
      name: "Malaysia",
    },
    {
      code: "+960",
      name: "Maldives",
    },
    {
      code: "+223",
      name: "Mali",
    },
    {
      code: "+356",
      name: "Malta",
    },
    {
      code: "+692",
      name: "Marshall Islands",
    },
    {
      code: "+596",
      name: "Martinique",
    },
    {
      code: "+222",
      name: "Mauritania",
    },
    {
      code: "+230",
      name: "Mauritius",
    },
    {
      code: "+262",
      name: "Mayotte",
    },
    {
      code: "+52",
      name: "Mexico",
    },
    {
      code: "+691",
      name: "Micronesia",
    },
    {
      code: "+1 808",
      name: "Midway Island",
    },
    {
      code: "+373",
      name: "Moldova",
    },
    {
      code: "+377",
      name: "Monaco",
    },
    {
      code: "+976",
      name: "Mongolia",
    },
    {
      code: "+382",
      name: "Montenegro",
    },
    {
      code: "+1664",
      name: "Montserrat",
    },
    {
      code: "+212",
      name: "Morocco",
    },
    {
      code: "+95",
      name: "Myanmar",
    },
    {
      code: "+264",
      name: "Namibia",
    },
    {
      code: "+674",
      name: "Nauru",
    },
    {
      code: "+977",
      name: "Nepal",
    },
    {
      code: "+31",
      name: "Netherlands",
    },
    {
      code: "+599",
      name: "Netherlands Antilles",
    },
    {
      code: "+1 869",
      name: "Nevis",
    },
    {
      code: "+687",
      name: "New Caledonia",
    },
    {
      code: "+64",
      name: "New Zealand",
    },
    {
      code: "+505",
      name: "Nicaragua",
    },
    {
      code: "+227",
      name: "Niger",
    },
    {
      code: "+234",
      name: "Nigeria",
    },
    {
      code: "+683",
      name: "Niue",
    },
    {
      code: "+672",
      name: "Norfolk Island",
    },
    {
      code: "+850",
      name: "North Korea",
    },
    {
      code: "+1 670",
      name: "Northern Mariana Islands",
    },
    {
      code: "+47",
      name: "Norway",
    },
    {
      code: "+968",
      name: "Oman",
    },
    {
      code: "+92",
      name: "Pakistan",
    },
    {
      code: "+680",
      name: "Palau",
    },
    {
      code: "+970",
      name: "Palestinian Territory",
    },
    {
      code: "+507",
      name: "Panama",
    },
    {
      code: "+675",
      name: "Papua New Guinea",
    },
    {
      code: "+595",
      name: "Paraguay",
    },
    {
      code: "+51",
      name: "Peru",
    },
    {
      code: "+63",
      name: "Philippines",
    },
    {
      code: "+48",
      name: "Poland",
    },
    {
      code: "+351",
      name: "Portugal",
    },
    {
      code: "+1 787",
      name: "Puerto Rico",
    },
    {
      code: "+974",
      name: "Qatar",
    },
    {
      code: "+262",
      name: "Reunion",
    },
    {
      code: "+40",
      name: "Romania",
    },
    {
      code: "+7",
      name: "Russia",
    },
    {
      code: "+250",
      name: "Rwanda",
    },
    {
      code: "+685",
      name: "Samoa",
    },
    {
      code: "+378",
      name: "San Marino",
    },
    {
      code: "+966",
      name: "Saudi Arabia",
    },
    {
      code: "+221",
      name: "Senegal",
    },
    {
      code: "+381",
      name: "Serbia",
    },
    {
      code: "+248",
      name: "Seychelles",
    },
    {
      code: "+232",
      name: "Sierra Leone",
    },
    {
      code: "+65",
      name: "Singapore",
    },
    {
      code: "+421",
      name: "Slovakia",
    },
    {
      code: "+386",
      name: "Slovenia",
    },
    {
      code: "+677",
      name: "Solomon Islands",
    },
    {
      code: "+27",
      name: "South Africa",
    },
    {
      code: "+500",
      name: "South Georgia and the South Sandwich Islands",
    },
    {
      code: "+82",
      name: "South Korea",
    },
    {
      code: "+34",
      name: "Spain",
    },
    {
      code: "+94",
      name: "Sri Lanka",
    },
    {
      code: "+249",
      name: "Sudan",
    },
    {
      code: "+597",
      name: "Suriname",
    },
    {
      code: "+268",
      name: "Swaziland",
    },
    {
      code: "+46",
      name: "Sweden",
    },
    {
      code: "+41",
      name: "Switzerland",
    },
    {
      code: "+963",
      name: "Syria",
    },
    {
      code: "+886",
      name: "Taiwan",
    },
    {
      code: "+992",
      name: "Tajikistan",
    },
    {
      code: "+255",
      name: "Tanzania",
    },
    {
      code: "+66",
      name: "Thailand",
    },
    {
      code: "+670",
      name: "Timor Leste",
    },
    {
      code: "+228",
      name: "Togo",
    },
    {
      code: "+690",
      name: "Tokelau",
    },
    {
      code: "+676",
      name: "Tonga",
    },
    {
      code: "+1 868",
      name: "Trinidad and Tobago",
    },
    {
      code: "+216",
      name: "Tunisia",
    },
    {
      code: "+90",
      name: "Turkey",
    },
    {
      code: "+993",
      name: "Turkmenistan",
    },
    {
      code: "+1 649",
      name: "Turks and Caicos Islands",
    },
    {
      code: "+688",
      name: "Tuvalu",
    },
    {
      code: "+1 340",
      name: "U.S. Virgin Islands",
    },
    {
      code: "+256",
      name: "Uganda",
    },
    {
      code: "+380",
      name: "Ukraine",
    },
    {
      code: "+971",
      name: "United Arab Emirates",
    },
    {
      code: "+44",
      name: "United Kingdom",
    },
    {
      code: "+1",
      name: "United States",
    },
    {
      code: "+598",
      name: "Uruguay",
    },
    {
      code: "+998",
      name: "Uzbekistan",
    },
    {
      code: "+678",
      name: "Vanuatu",
    },
    {
      code: "+58",
      name: "Venezuela",
    },
    {
      code: "+84",
      name: "Vietnam",
    },
    {
      code: "+1 808",
      name: "Wake Island",
    },
    {
      code: "+681",
      name: "Wallis and Futuna",
    },
    {
      code: "+967",
      name: "Yemen",
    },
    {
      code: "+260",
      name: "Zambia",
    },
    {
      code: "+255",
      name: "Zanzibar",
    },
    {
      code: "+263",
      name: "Zimbabwe",
    },
  ];

  const handleChange = (event) => {
    dispatch(phoneNumberCode(event.target.value));
    setCountry(event.target.value);
  };

  const [alertMessage, setAlertMessage] = useState("");

  const [SnakBarOpen, setSnakBarOpen] = React.useState(false);

  const handleSnakBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setSnakBarOpen(false);
  };

  const myState = useSelector((state) => state.signUpInfo);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    if (myState.firstName == "") {
      setAlertMessage("Please Fill First Name");
      setSnakBarOpen(true);
    } else if (myState.lastName == "") {
      setAlertMessage("Please Fill Last Name");
      setSnakBarOpen(true);
    } else if (myState.phoneNumber == "") {
      setAlertMessage("Please Fill Phone Number");
      setSnakBarOpen(true);
    } else if (myState.password == "") {
      setAlertMessage("Please Fill Password");
      setSnakBarOpen(true);
    } else {

      let options = {
        url:`${Base_url}/auth/signup`,
        method:"POST",
        headers:{
          "content-type":"application/json"
        },
        data:{
          firstName:myState["firstName"],
          lastName:myState["lastName"],
          email:myState["email"],
          password:myState["password"]
        }
      }

      try{
        let {data} = await axios(options)
        if(data.success) {
          navigate("/login")
        }
      }catch(error){
        setAlertMessage(error.response.data.message)
        setSnakBarOpen(true)
      }
  }
  };



  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
    >
      <Header />
      <Box
        className="mainBox"
        sx={{
          height: { xs: "95vh", md: "85vh" },
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "flex-start", md: "center" },
          justifyContent: "center",
          rowGap: 3,
          padding:{xs:"1% 0% 0% 2%",md:"0%"}
        }}
      >
        <Box
          className="fisrtPart"
          sx={{
            width: { xs: "100%", md: "35%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            rowGap: 3,
          }}
        >
          <Box className="firstRow">
            <Typography
              sx={{ fontSize: { xs: "20px", md: "30px" }, fontWeight: "bold" }}
            >
              {t("Sign Up")}
            </Typography>
          </Box>
          <Box
            className="secondRow"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              justifyContent: "space-between",
              rowGap: { xs: 2, md: 0 },
            }}
          >
            <Box className="firstColumn">
              <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
                {t("First Name")}
              </Typography>
              <TextField
                type={"text"}
                placeholder="FirstName"
                onChange={(e) => dispatch(signUpFirstName(e.target.value))}
                value={myState.firstName}
              />
            </Box>
            <Box className="secondColumn">
              <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
                {t("Last Name")}
              </Typography>
              <TextField
                type={"text"}
                placeholder="LastName"
                onChange={(e) => dispatch(signUpLastName(e.target.value))}
                value={myState.lastName}
              />
            </Box>
          </Box>
          <Box className="phoneNumber">
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              {t("PhoneNumber")}
            </Typography>
            <Box className="phoneNumber&code">
              <TextField
                id="outlined-select-currency"
                select
                value={myState.phoneNumberCode}
                onChange={handleChange}
              >
                {countries.map((option) => (
                  <MenuItem
                    key={option.name + "," + option.code}
                    value={option.name + "," + option.code}
                  >
                    {option.code} {option.name}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                type={"text"}
                placeholder="PhoneNumber"
                onChange={(e) => dispatch(signUpPhoneNumber(e.target.value))}
                value={myState.phoneNumber}
              />
            </Box>
          </Box>
          <Box className="thirdRow " sx={{ width: "100%" }}>
            <Typography sx={{ fontSize: { xs: "16px", md: "20px" } }}>
              {t("Create password")}
            </Typography>
            <TextField
              type={"password"}
              fullWidth
              sx={{ width: "100%" }}
              onChange={(e) => dispatch(signUpPassword(e.target.value))}
              value={myState.password}
            />
          </Box>
          <Button
            variant="contained"
            color="success"
            sx={{
              width: "100%",
            }}
            onClick={submitHandler}
          >
            {t("CREATE AN ACCOUNT")}
          </Button>
        </Box>
        <Box className="secondPart">
          <Typography>
            By creating an account, you agree to our{" "}
            <span
              className="hover"
              onClick={() => navigate("/TermsAndCondition")}
            >
              Terms & Conditions
            </span>
            ,{" "}
            <span className="hover" onClick={() => navigate("/PrivacyPolicy")}>
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="hover" onClick={() => navigate("/agreement")}>
              Agreement with MekoTourizm
            </span>
            .
          </Typography>
        </Box>
      </Box>
      <Footer />
      <Snackbar
        open={SnakBarOpen}
        autoHideDuration={3000}
        onClose={handleSnakBarClose}
      >
        <Alert
          onClose={handleSnakBarClose}
          severity="warning"
          sx={{ width: "150%" }}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default SignUpUserDetails;
