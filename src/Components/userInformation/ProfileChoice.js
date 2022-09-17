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
  import { useLocation, useNavigate } from "react-router-dom";
const ProfileChoice = ({setVisibleChoice,visibleChoice, inidividualOptions, setIndividualOptions}) => {

  const location = useLocation()

    const navigate = useNavigate()

  return (
    <Box
    className="leftpart"
    sx={{
      width: {xs:"100%",md:"20%"},
      border: "2px solid #e6e7e8",
      display: {xs:visibleChoice ? "flex":"none",md:"flex"},
      flexDirection: "column",
      alignItems: "center",
      rowGap: 3,
      padding: "1% 1% 2% 1%",
    }}
  >
    <Box className="profileImage">
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>{
          navigate("/useProfilePage:false")
          setIndividualOptions(!inidividualOptions);
          setVisibleChoice(!visibleChoice)
        }}
      >
        <PermIdentityIcon />
        <Typography sx={{ fontSize: "25px" }}>
          Personal Information
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>navigate("/loginInformation:false")}
      >
        <VpnKeyIcon />
        <Typography sx={{ fontSize: "25px" }}>
          Login Information
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>navigate("/paymentMethod:false")}
      >
        <PaymentIcon />
        <Typography sx={{ fontSize: "25px" }}>
          Payment Method
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>navigate("/notificationDetails:false")}
      >
        <NotificationsActiveIcon />
        <Typography sx={{ fontSize: "25px" }}>Notifications</Typography>
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>{
            navigate("/travelPreferences:false")
        }}
      >
        <CardTravelIcon />
        <Typography sx={{ fontSize: "25px" }}>
          Traveller Preferences
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
          "&:active":{color:"blue"}
        }}
        onClick={()=>{
            navigate("/siteSettings:false")
        }}
      >
        <SettingsIcon />
        <Typography sx={{ fontSize: "25px" }}>Site Settings</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default ProfileChoice