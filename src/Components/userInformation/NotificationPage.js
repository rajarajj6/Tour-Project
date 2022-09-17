import { Box,Switch,Typography } from '@mui/material'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import Header from '../Screens/HeaderComponents/Header'
import ProfileChoice from './ProfileChoice'
import Footer from "../Screens/FooterComponents/Footer";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NotificationPage = () => {

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
          border: "2px solid #e6e7e8",
          width: {xs:"100%",md:"70%"},
          display:{xs:inidividualOptions ? "flex" : "none",md:"flex"},
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
        <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Notifications</Typography>
        <Typography>Marketing emails</Typography>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <Typography>Mekatourizm will send you weekly emails with travel inspirations, tips, recommendations and company updates</Typography>
            <Switch {...label} defaultChecked color="success" />
        </Box>
    </Box>
  </Box>
  </Box>
  )
}

export default NotificationPage