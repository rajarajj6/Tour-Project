import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../Screens/HeaderComponents/Header'
import ProfileChoice from './ProfileChoice'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';



const TravelPireferences = () => {

    const [editButton, setEditButton] = useState(false)
    
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
       <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Travel Preferences</Typography>

        {
            !editButton ?
            <Box className="Special Requirements" sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
               }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                <Typography>Special Requirements</Typography>
                <Typography 
                sx={{
                    color:"green",
                    "&:hover":{cursor:"pointer",textDecoration:"underLine"}
                }}
                onClick={()=>setEditButton(true)}
                >Add</Typography>
                </Box>
                <Typography>Not Provided</Typography>
               </Box>
               : <Box className="Special RequirementsEdits" sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                width:"100%",
               }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:"100%"
                }}>
                <Typography>Special Requirements</Typography>
                <Typography 
                sx={{
                    color:"green",
                    "&:hover":{cursor:"pointer",textDecoration:"underLine"}
                }}
                onClick={()=>setEditButton(false)}
                >Cancel</Typography>
                </Box>
                <TextareaAutosize type={"text"}  placeholder={"Dietary,restrictions,accessibility needs etc."} sx={{
                    width:"100px"
                }}/>
                <Box>
                <Button variant='contained' color='success'
                    
                    onClick={()=>setEditButton(false)}
                    >
                    Save
                </Button>
                    </Box>
               </Box>
        }

       


       


    </Box>
  </Box>
  </Box>
  )
}

export default TravelPireferences