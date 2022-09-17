import {
  Alert,
  Box,
  Button,
  Divider,
  FormLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import {useDispatch, useSelector} from "react-redux"
import {loginDetails} from "../../redux/reducer/reducer"
import {LoginEmail, loginPassword} from "../../redux/action/index"
import axios from "axios"
import Header from "../HeaderComponents/Header";
import Footer from "../FooterComponents/Footer";
import { useTranslation } from "react-i18next";

const Base_url = process.env.REACT_APP_Axios_Base_urls


const LoginInPage = () => {



  const {t} = useTranslation()
  const navigate = useNavigate();
  const [SnakBarOpen, setSnakBarOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = useState("")

  const myState = useSelector((state) => state.loginDetails)
  const dispatch = useDispatch()

  const submitHandler = async () => {
    if(myState.email == ""){
      setAlertMessage("Please Enter Your Email Id")
      setSnakBarOpen(true);
    }else if(myState.password == ""){
      setAlertMessage("Please Enter Your Password")
      setSnakBarOpen(true);
    }
    else{

    let options = {
      url:`${Base_url}/auth/login`,
      headers:{
        "content-type":"application/json"
      },
      data:{
        email:myState.email,
        password:myState.password
      },
      method:"POST"
    }

    try{
      let {data} = await axios(options)
    if(!data.success){
      localStorage.setItem("accessToken",data.accessToken)
      let arr = []
      localStorage.setItem("tourProduct",arr)
      navigate("/")
    }
    }catch(error){
      if(error.response.data.message == "Bad credentials"){
        setSnakBarOpen(true)
        setAlertMessage("Incorrect Credentials")
      }
    }
  }
  }

  


  const handleSnakBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakBarOpen(false);
  };





  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
      <Header />
      <Box
        className="loginDiv"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: { xs: "80vh", md: "80vh" },
          rowGap: {xs:5,md:10},
        }}
      >
        


        <Typography sx={{ fontSize: { xs: "16px", md: "25px" },
      width:{xs:"80%",md:"35%"},
      textAlign:"center"
      }}>
         {t("Log in and get exploring")}
        </Typography>
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" },
      width:{xs:"80%",md:"35%"},
       textAlign:"center",
      }}>
         {t("Log into your account with your email, or create one below. Quick and easy - promise!")}
        </Typography>
      <Box
      sx={{
        width:{xs:"85%",md:"35%"},
        height:{xs:"30vh",md:"30vh"},
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between"
      }}
      >

      
        {/* <FormLabel>Email</FormLabel> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" 
        value={myState.email}
        onChange={(e)=>dispatch(LoginEmail(e.target.value))}
        sx={{
          width:{xs:"100%",md:"100%"}
          // width:"500px"
        }}
        />
        <TextField  label="Password" variant="outlined" type={"password"} 
        value={myState.password}
        onChange={(e)=>dispatch(loginPassword(e.target.value))}
        sx={{
          width:{xs:"100%",md:"100%"}
        }}
        />
        {/* <br /> */}
        <Button variant="contained" color="success" sx={{ minWidth:{xs:"100%",md:"100%"}}}
        onClick={submitHandler}
        >
          {t("CONTINUE")}
        </Button>
        </Box>
        {/* <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>or Continue with</Typography>
        </Box>
        <Box
          className="loginOptions"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 3,
            alignItems: "center",
            width: { xs: "250px", md: "500px" },
            justifyContent: "center",
          }}
        >
          <GoogleIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
              color: "blue",
            }}
          />
          <FacebookIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
              color: "blue",
            }}
          />
          <AppleIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
            }}
          />
        </Box>
        <Box
        sx={{
          ml:"10px"
        }}
        >
          <Typography
          >
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
              Agreement with Travel
            </span>
            .
          </Typography>
        </Box> */}
      </Box>
      <Footer />
      <Snackbar open={SnakBarOpen} autoHideDuration={3000} onClose={handleSnakBarClose}>
        <Alert onClose={handleSnakBarClose} severity="warning" sx={{ width: '150%' }}>
        {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default LoginInPage;
