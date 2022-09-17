import {
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
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useParams } from "react-router-dom";
import ProfileChoice from "./ProfileChoice";
import Footer from "../Screens/FooterComponents/Footer"
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const UserProfile = () => {
  const {value} = useParams()
  const [visibleChoice, setVisibleChoice] = useState(value[1] == "t" ? true : false);
  const [inidividualOptions, setIndividualOptions] = useState(value[1] == "t" ? false : true)

  const navigate = useNavigate()
  const [dateValue, setDateValue] = React.useState(new Date());
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [userEmailEdit, setUserEmailEdit] = useState(false);
  const [phoneNumberEdit, setPhoneNumberEdit] = useState(false);
  const [dateOfBirthEdit,setDateOfBirthEdit] = useState(false)
  const [homeTownCity, setHomeTownCity] = useState(false)

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
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
              display: {xs:inidividualOptions ? "flex" : "none",md:"flex"},
              flexDirection: "column",
              rowGap: 2,
              padding: "2%",
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
            <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
              Personal Information
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
                  <Typography sx={{ fontSize: "20px" }}>Full Name</Typography>
                  <Typography sx={{ fontSize: "20px" }}>kiran</Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "green",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underLine",
                    },
                  }}
                  onClick={() => setUserNameEdit(true)}
                >
                  Edit
                </Typography>
              </Box>
            ) : (
              <Box
                className="userNameEdit"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
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
                  <Typography sx={{ fontSize: "20px" }}>Full Name</Typography>
                  <TextField type={"text"} placeholder={"kiran"} />
                  <Button
                    variant="contained"
                    color="success"
                    onClick={() => setUserNameEdit(false)}
                  >
                    Save
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
                  <Typography>LastName</Typography>
                  <TextField type={"text"} placeholder={"s"} />
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "green",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underLine",
                    },
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                  }}
                  onClick={() => setUserNameEdit(false)}
                >
                  Cancel
                </Typography>
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
                  <Typography sx={{ fontSize: "20px" }}>Email</Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    kira@gmail.com
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "green",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underLine",
                    },
                  }}
                  onClick={() => setUserEmailEdit(true)}
                >
                  Edit
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
                  <Typography sx={{ fontSize: "20px" }}>Email</Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                      color: "green",
                    }}
                    onClick={() => setUserEmailEdit(false)}
                  >
                    Cancel
                  </Typography>
                </Box>
                <TextField
                  type={"text"}
                  placeholder={"kiran@gmail.com"}
                  fullWidth
                />
                <Typography sx={{ fontSize: "20px" }}>
                  Confirm Password
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
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
                    >
                      <VisibilityIcon />
                    </Button>
                    <Button
                      sx={{ display: passwordVisibility ? "flex" : "none" }}
                      onClick={() => setPasswordVisibility(!passwordVisibility)}
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
                  Save
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
                  <Typography sx={{ fontSize: "20px" }}>
                    Phone Number
                  </Typography>
                  <Typography sx={{ fontSize: "20px" }}>
                    Not Provided
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "green",
                    "&:hover": {
                      cursor: "pointer",
                      textDecoration: "underLine",
                    },
                  }}
                  onClick={() => setPhoneNumberEdit(true)}
                >
                  Add
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
                  <Typography sx={{ fontSize: "20px" }}>
                    Phone Number
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      color: "green",
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                    }}
                    onClick={() => setPhoneNumberEdit(false)}
                  >
                    Cancel
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
                  Save
                </Button>
              </Box>
            )}

            <Divider />


              {
                !dateOfBirthEdit ? 
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
                  <Typography sx={{ fontSize: "20px" }}>Date of Birth</Typography>
                  <Typography sx={{ fontSize: "20px" }}>Not Provided</Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "green",
                    "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                  }}
                  onClick={()=>setDateOfBirthEdit(true)}
                >
                  Add
                </Typography>
              </Box>
               :  <Box
               className="userDOB"
               sx={{
                 display: "flex",
                 flexDirection: "column",
                 alignItems: "flex-start",
                 justifyContent: "space-between",
                 width:"100%",
                 rowGap:2
               }}
             >
               <Box sx={{
                 display:"flex",
                 flexDirection:"row",
                 alignItems:"center",
                 justifyContent:"space-between",
                 width:"100%"
               }}>
                 <Typography sx={{ fontSize: "20px" }}>Date of Birth</Typography>
                 <Typography sx={{ fontSize: "20px",color:"green","&:hover":{cursor:"pointer",textDecoration:"underLine"} }}
                  onClick={()=>setDateOfBirthEdit(false)}                 
                 >Cancel</Typography>
               </Box>
               <Box>
                 <DatePicker
                   disableFuture
                   label="Responsive"
                   openTo="year"
                   views={["year", "month", "day"]}
                   value={dateValue}
                   onChange={(newValue) => {
                     setDateValue(newValue);
                   }}
                   renderInput={(params) => <TextField {...params} />}
                 />
               </Box>
               <Button variant="contained" color="success"
                  onClick={()=>setDateOfBirthEdit(false)}               
               >
                 Save
               </Button>
             </Box>
              }

            <Divider />



              {
                !homeTownCity ? 
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
                <Typography sx={{ fontSize: "20px" }}>Home Town</Typography>
                <Typography sx={{ fontSize: "20px" }}>Not Provided</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "green",
                  "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                }}
                onClick={()=>setHomeTownCity(true)}

              >
                Edit
              </Typography>
            </Box>
            : <Box
            className="userHomeTown"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              width:"100%",
              rowGap:2
            }}
          >
            <Box sx={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"space-between",
              width:"100%"
            }}>
              <Typography sx={{ fontSize: "20px" }}>Home Town</Typography>
              <Typography sx={{ fontSize: "20px",color:"green","&:hover":{cursor:"pointer",textDecoration:"underLine"} }}
              onClick={()=>setHomeTownCity(false)}
              >Cancel</Typography>
            </Box>
           <Box sx={{
            display:"flex",
            flexDirection:"row",
            width:"100%",
            alignItems:"center",
            columnGap:1,
            border:"2px solid blue",
            padding:"1%"
           }}>
            <input type={"text" }  placeholder="Enter City"   style={{
              outline:"none",
              border:"1px solid white",
              width:"100%",
              height:"30px"
            }} />
            <SearchIcon sx={{fontSize:"30px"}}/>
           </Box>
          </Box>
              }

          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default UserProfile;
