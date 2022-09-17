import {
  Alert,
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../Screens/HeaderComponents/Header";
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
import ProfileChoice from "./ProfileChoice";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Footer from "../Screens/FooterComponents/Footer";


const UserLoginInformationPage = () => {

    const navigate = useNavigate()
    const {value} = useParams()
    const [visibleChoice, setVisibleChoice] = useState(value[1] == "t" ? true : false);
    const [inidividualOptions, setIndividualOptions] = useState(value[1] == "t" ? false : true)

  return (
    <Box>
      <Header />
      <Box
        className="mainBody"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          columnGap: 2,
        }}
      >
        <ProfileChoice setIndividualOptions={setIndividualOptions} inidividualOptions={inidividualOptions} visibleChoice={visibleChoice} setVisibleChoice={setVisibleChoice}/>
        <Box
          className="rightPart"
          sx={{
            width: {xs:"100%",md:"70%"},
            border: "2px solid #e6e7e8",
            padding: "2%",
            display:{xs:inidividualOptions ? "flex" : "none",md:"flex"},
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            rowGap:2
          }}
        >

<Box className="backButton" 
            sx={{
              display:{xs:"flex",md:"none"},
              alignItems:"center"
            }}
            onClick={()=>{
              setIndividualOptions(!inidividualOptions)
              setVisibleChoice(!visibleChoice)
            }}
            >
              <ArrowBackIosIcon />
              <Typography sx={{fontSize:"20px"}}>Profile</Typography>
            </Box>

          <Box
            className="loginInfoDetails"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              columnGap: 1,
              rowGap:2
            }}
          >
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              Login Information
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
              }}
            >
              <VpnKeyIcon />
              <Typography>
                Create a password to access your account from any device at any
                time. Or, log in with one click with a connected account below.
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
            <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
              Deactivate
            </Typography>
            <Typography>
              Deactivating your account means that your account will no longer
              be available. You will not be able to log in and your profile will
              not be accessible. Any reviews, photos, and tips that you have
              contributed may continue to be displayed on the site
            </Typography>
            <Alert severity="error">
              To deactivate your account, please log in again.
            </Alert>
            <Button
              variant="contained"
              color="warning"
              disabled
              sx={{
                "&:hover": { cursor: "not-allowed" },
              }}
            >
              Deactivate My Account
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserLoginInformationPage;
