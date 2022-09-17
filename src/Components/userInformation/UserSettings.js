import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  MenuItem,
  Switch,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../../Screens/HeaderComponents/Header";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, useParams } from "react-router-dom";
// import ProfileChoice from "./ProfileChoice";
import Footer from "../../Screens/FooterComponents/Footer";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { webSiteLanguageAction } from "../../redux/action";


const label = { inputProps: { "aria-label": "Switch demo" } };

const websiteLanguage =  [
  {
    "language": "en"
},
  {
    "language": "tr"
},
]

const UserSettings = () => {


  const {t} = useTranslation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [displayItem, setDisplayItem] = useState("");
  const [displayChoice, setDisplayChoice] = useState(true)

  //  user ingormation
  const myState = useSelector((state) => state.currentUserReducer)
  const travellerData = useSelector((state) => state.travelDetails)
  const changeWebsiteLanguage = (e) => {
    localStorage.setItem("lang",e.target.value)
    dispatch(webSiteLanguageAction(e.target.value))
    i18next.changeLanguage(e.target.value.toLowerCase())
}

  // personal Information useStates
  const [dateValue, setDateValue] = React.useState(new Date());
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [userEmailEdit, setUserEmailEdit] = useState(false);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);
  const [dateOfBirthEdit, setDateOfBirthEdit] = useState(false);
  const [homeTownCity, setHomeTownCity] = useState(false);

  // traveller prefernces
  const [editButton, setEditButton] = useState(false);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:2
      }}>
        <Header />
        <Box
          className="mainBody"
          sx={{
            width: {xs:"94%",md:"88%"},
            display: "flex",
            flexDirection: "row",
            columnGap: 2,
            height:{xs:"90vh",md:"85vh"},
            overflowY:"auto",
            padding:{xs:"0% 3% 0% 3%",md:"0% 6% 0% 6%"}
          }}
        >
          {/* left part */}
          <Box
            className="leftpart"
            sx={{
              width: { xs: "90%", md: "20%" },
              border: "2px solid #e6e7e8",
              display: {xs:displayChoice ? "flex" : "none" ,md:"flex"},
              flexDirection: "column",
              alignItems: {xs:"flex-start",md:"center"},
              rowGap: 3,
              padding: "1% 5% 2% 5%",
            }}
          >
            <Box className="profileImage"
            sx={{
              alignSelf:{xs:"center",md:"none"}
            }}
            >
              <Avatar sx={{ bgcolor: "red", width: "70px", height: "70px" }}>
                OP
              </Avatar>
            </Box>
            <Box
              className="userSettingsChoice"
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
              }}
            >
              <Box
                className="personalInformation"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() => {
                  setDisplayItem("");
                  setDisplayChoice(false)
                }}
              >
                <PermIdentityIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Personal Information")}
                </Typography>
              </Box>
              <Divider />
              <Box
                className="loginInformation"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() => {setDisplayItem("loginInformations")
              setDisplayChoice(false)
              }}
              >
                <VpnKeyIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Login Information")}
                </Typography>
              </Box>
              <Divider />
              <Box
                className="PaymentMethod"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() => {
                  setDisplayChoice(false)
                  setDisplayItem("paymentMethods")
                }}
              >
                <PaymentIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Payment Method")}
                </Typography>
              </Box>
              <Divider />
              <Box
                className="Notifications"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() =>{
                    setDisplayChoice(false)
                    setDisplayItem("notifications")
                  }}
              >
                <NotificationsActiveIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Notifications")}
                </Typography>
              </Box>
              <Divider />
              <Box
                className="TravellerPreferences"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() => {
                  setDisplayItem("travellerPreferences")
                  setDisplayChoice(false)
                }}
              >
                <CardTravelIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Traveller Preferences")}
                </Typography>
              </Box>
              <Divider />
              <Box
                className="SiteSettings"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                  "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
                  "&:active": { color: "blue" },
                }}
                onClick={() =>{
                  setDisplayItem("SiteSettings")
                  setDisplayChoice(false)
                }} 
                  
              >
                <SettingsIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Site Settings")}
                </Typography>
              </Box>
            </Box>
          </Box>
            

            {/* right part */}
          {displayItem == "" ? (
            <Box
              className="rightPart"
              sx={{
                width: { xs: "100%", md: "70%" },
                border: "2px solid #e6e7e8",
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                rowGap: 2,
                padding: "2%",
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Profile")}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                {t("Personal Information")}
              </Typography>

              {!userNameEdit ? (
                <Box
                  className="userName"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Full Name")}
                    </Typography>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>{myState.firstName} {myState.lastName}</Typography>
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setUserNameEdit(true)}
                  >
                    {t("Edit")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="userNameEdit"
                  sx={{
                    display: "flex",
                    flexDirection: {xs:"column",md:"row"},
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    rowGap:{xs:2,md:0}
                  }}
                >
                  <Box
                    className="1stColumn"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 1,
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Full Name")}
                    </Typography>
                    <TextField type={"text"} placeholder={"kiran"} />
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => setUserNameEdit(false)}
                      sx={{
                        display:{xs:"none",md:"flex"},
                        
                      }}
                    >
                      {t("Save")}
                    </Button>
                  </Box>
                  <Box
                    className="2ndColumn"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 1,
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("LastName")}
                    </Typography>
                    <TextField type={"text"} placeholder={"s"} />
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                      display: {xs:"none",md:"flex"},
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => setUserNameEdit(false)}
                  >
                    {t("Cancel")}
                  </Typography>
                  <Box className="breakpointColumn"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:2,
                    alignItems:"center"
                  }}
                  >
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                      display: {xs:"flex",md:"none"},
                      flexDirection: "row",
                      alignItems: "flex-start",
                      justifyContent: "flex-start",
                    }}
                    onClick={() => setUserNameEdit(false)}
                  >
                    {t("Cancel")}
                  </Typography>
                  <Button
                      variant="contained"
                      color="success"
                      onClick={() => setUserNameEdit(false)}
                      sx={{
                        display:{xs:"flex",md:"none"}
                      }}
                    >
                      {t("Save")}
                    </Button>
                  </Box>

                </Box>
              )}

              <Divider />

              {!userEmailEdit ? (
                <Box
                  className="userEmail"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                      {t("Email")}
                    </Typography>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                      {myState.email}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setUserEmailEdit(true)}
                  >
                    {t("Edit")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="userEmailEdit"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    rowGap: 1,
                  }}
                >
                  <Box
                    className="emailLabel&cancelButton"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Email")}
                    </Typography>
                    <Typography
                      sx={{
                       fontSize: {xs:"16px",md:"16px"},
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                        color: "green",
                      }}
                      onClick={() => setUserEmailEdit(false)}
                    >
                      {t("Cancel")}
                    </Typography>
                  </Box>
                  <TextField
                    type={"text"}
                    placeholder={"kiran@gmail.com"}
                    fullWidth
                  />
                  <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                    {t("Confirm Password")}
                  </Typography>
                  <Box
                    className="passwordBox"
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <TextField
                      type={passwordVisibility ? "text" : "password"}
                      placeholder={"confirm Password"}
                      fullWidth
                    />
                    <Box
                      className="eyeButton"
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                      }}
                    >
                      <Button
                        sx={{ display: !passwordVisibility ? "flex" : "none" }}
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <VisibilityIcon />
                      </Button>
                      <Button
                        sx={{ display: passwordVisibility ? "flex" : "none" }}
                        onClick={() =>
                          setPasswordVisibility(!passwordVisibility)
                        }
                      >
                        <VisibilityOffIcon />
                      </Button>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setUserEmailEdit(false)}
                  >
                    {t("Save")}
                  </Button>
                </Box>
              )}

              <Divider />

              {!phoneNumberEdit ? (
                <Box
                  className="UserPhoneNumber"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Phone Number")}
                    </Typography>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Not Provided")}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setPhoneNumberEdit(true)}
                  >
                    {t("Add")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="UserPhoneNumberEdit"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    rowGap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      // alignItems:"center",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Phone Number")}
                    </Typography>
                    <Typography
                      sx={{
                       fontSize: {xs:"16px",md:"16px"},
                        color: "green",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                      }}
                      onClick={() => setPhoneNumberEdit(false)}
                    >
                      {t("Cancel")}
                    </Typography>
                  </Box>
                  <Box className="texField" sx={{ width: "100%" }}>
                    <TextField
                      type={"text"}
                      placeholder="Enter Your Number"
                      fullWidth
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setPhoneNumberEdit(false)}
                  >
                    {t("Save")}
                  </Button>
                </Box>
              )}

              <Divider />

              {!dateOfBirthEdit ? (
                <Box
                  className="userDOB"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                      {t("Date of Birth")}
                    </Typography>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                      {t("Not Provided")}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setDateOfBirthEdit(true)}
                    // onClick={()=>setDateOfBirthEdit(true)}
                  >
                    {t("Add")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="userDOB"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: "100%",
                    rowGap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                      {t("Date of Birth")}
                    </Typography>
                    <Typography
                      sx={{
                       fontSize: {xs:"16px",md:"16px"},
                        color: "green",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                      }}
                      onClick={() => setDateOfBirthEdit(false)}
                    >
                      {t("Cancel")}
                    </Typography>
                  </Box>
                  <Box>
                    <DatePicker
                      disableFuture
                      openTo="year"
                      views={["year", "month", "day"]}
                      value={dateValue}
                      onChange={(newValue) => {
                        setDateValue(newValue);
                      }}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setDateOfBirthEdit(false)}
                  >
                    {t("Save")}
                  </Button>
                </Box>
              )}

              <Divider />

              {!homeTownCity ? (
                <Box
                  className="userHomeTown"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Home Town")}
                    </Typography>
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Not Provided")}
                    </Typography>
                  </Box>
                  <Typography
                    sx={{
                     fontSize: {xs:"16px",md:"16px"},
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setHomeTownCity(true)}
                  >
                    {t("Edit")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="userHomeTown"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    width: "100%",
                    rowGap: 2,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Home Town")}
                    </Typography>
                    <Typography
                      sx={{
                       fontSize: {xs:"16px",md:"16px"},
                        color: "green",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                      }}
                      onClick={() => setHomeTownCity(false)}
                    >
                      {t("Cancel")}
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      width: "100%",
                      alignItems: "center",
                      columnGap: 1,
                      border: "2px solid blue",
                      padding: "1%",
                    }}
                  >
                    <input
                      type={"text"}
                      placeholder="Enter City"
                      style={{
                        outline: "none",
                        border: "1px solid white",
                        width: "100%",
                        height: "30px",
                      }}
                    />
                    <SearchIcon sx={{ fontSize: "30px" }} />
                  </Box>
                </Box>
              )}
            </Box>
          ) : displayItem == "loginInformations" ? (
            <Box
              className="rightPart"
              sx={{
                width: { xs: "100%", md: "70%" },
                border: "2px solid #e6e7e8",
                padding: "2%",
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "space-between",
                rowGap: 2,
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Profile")}
                </Typography>
              </Box>

              <Box
                className="loginInfoDetails"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  rowGap: 2,
                }}
              >
                <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                  {t("Login Information")}
                </Typography>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 1,
                  }}
                >
                  <VpnKeyIcon />
                  <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                    {t("Create a password to access your account from any device at any time. Or, log in with one click with a connected account below.")}
                  </Typography>
                </Box>
              </Box>

              <Box
                className="deactivateAccountInfo"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  rowGap: 2,
                }}
              >
                <Typography sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"30px"} }}>
                  {t("Deactivate")}
                </Typography>
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }} >
                  {t("Deactivating your account means that your account will no longer be available. You will not be able to log in and your profile will not be accessible. Any reviews, photos, and tips that you have contributed may continue to be displayed on the site")}
                </Typography>
                <Alert severity="error" sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("To deactivate your account, please log in again.")}
                </Alert>
                <Button
                  variant="contained"
                  color="warning"
                  disabled
                  sx={{
                    "&:hover": { cursor: "not-allowed" },
                  }}
                >
                  {t("DEACTIVATE MY ACCOUNT")}
                </Button>
              </Box>
            </Box>
          ) : displayItem == "paymentMethods" ? (
            <Box
              className="rightPart"
              sx={{
                border: "2px solid #e6e7e8",
                width: { xs: "100%", md: "70%" },
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                rowGap: 2,
                padding: "2%",
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"}}}>
                  {t("Profile")}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                {t("Payment Method")}
              </Typography>
              <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                {t("Your stored cards")}
              </Typography>
              <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                {t("Please log in to view your stored cards")}
              </Typography>
            </Box>
          ) : displayItem == "notifications" ? (
            <Box
              className="rightPart"
              sx={{
                border: "2px solid #e6e7e8",
                width: { xs: "100%", md: "70%" },
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                rowGap: 2,
                padding: "2%",
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Profile")}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                {t("Notifications")}
              </Typography>
              <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                {t("Marketing emails")}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>
                   {t("MekoTourizm will send you weekly emails with travel inspirations, tips, recommendations and company updates")}
                </Typography>
                <Switch {...label} defaultChecked color="success" />
              </Box>
            </Box>
          ) : displayItem == "travellerPreferences" ? (
            <Box
              className="rightPart"
              sx={{
                border: "2px solid #e6e7e8",
                width: { xs: "100%", md: "70%" },
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                rowGap: 2,
                padding: "2%",
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}s>{t("Profile")}</Typography>
              </Box>
              <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                {t("Travel Preferences")}
              </Typography>

              {!editButton ? (
                <Box
                  className="Special Requirements"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Special Requirements")}
                    </Typography>
                    <Typography
                      sx={{
                        color: "green",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                       fontSize: {xs:"16px",md:"16px"}
                      }}
                      onClick={() => setEditButton(true)}
                    >
                      {t("Add")}
                    </Typography>
                  </Box>
                  <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                    {t("Not Provided")}
                  </Typography>
                </Box>
              ) : (
                <Box
                  className="Special RequirementsEdits"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                    width: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      width: "100%",
                    }}
                  >
                    <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                      {t("Special Requirements")}
                    </Typography>
                    <Typography
                      sx={{
                        color: "green",
                        "&:hover": {
                          cursor: "pointer",
                          textDecoration: "underLine",
                        },
                       fontSize: {xs:"16px",md:"16px"}
                      }}
                      onClick={() => setEditButton(false)}
                    >
                      {t("Cancel")}
                    </Typography>
                  </Box>
                  <TextareaAutosize
                    type={"text"}
                    placeholder={
                      "Dietary,restrictions,accessibility needs etc."
                    }
                    sx={{
                      width: "100px",
                    }}
                  />
                  <Box>
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => setEditButton(false)}
                    >
                      {t("Save")}
                    </Button>
                  </Box>
                </Box>
              )}
            </Box>
          ) : displayItem == "SiteSettings" ? (
            <Box
              className="rightPart"
              sx={{
                border: "2px solid #e6e7e8",
                width: { xs: "100%", md: "70%" },
                display: {xs:!displayChoice ? "flex" : "none" ,md:"flex"},
                flexDirection: "column",
                rowGap: 2,
                padding: "2%",
                alignItems:"flex-start"
              }}
            >
              <Box
                className="backButton"
                sx={{
                  display: { xs: "flex", md: "none" },
                  alignItems: "center",
                  justifyContent:"flex-start"
                }}
                onClick={()=>setDisplayChoice(true)}
              >
                <ArrowBackIosIcon />
                <Typography sx={{fontSize: {xs:"16px",md:"16px"} }}>
                  {t("Profile")}
                </Typography>
              </Box>
              <Typography sx={{ fontSize: {xs:"20px",md:"30px"}, fontWeight: "bold" }}>
                {t("Site Settings")}
              </Typography>
              <Box
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                columnGap:4
              }}
              >
                <Typography>Choose Language  </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={travellerData.webSiteLanguage}
                    onChange={changeWebsiteLanguage}
                  >
                    {websiteLanguage.map((option,index) => (
                      <MenuItem key={index} value={option.language.toUpperCase()}  >
                         {option.language.toUpperCase()}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
              <Button variant="contained" color="warning"
              onClick={()=>{
                localStorage.removeItem("accessToken")
                navigate("/")
              }}
              sx={{
                display:localStorage.getItem("accessToken") == null ? "none" : "flex"
              }}
              >
                {t("LOGOUT")}
              </Button>

            </Box>
          ) : null}
        </Box>
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default UserSettings;
