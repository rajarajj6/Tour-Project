import React, { useEffect, useState } from 'react'
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { Box } from '@mui/material';
import axios from 'axios';



let arrList = [Travel4,Travel3, Travel6, Travel8, Travel9,]
const Base_url = process.env.REACT_APP_Axios_Base_urls



const ImagesLists = ({item, imageChanger, index}) => {


  return (
    <Box
                  className="placeImage"
                  component={"img"}
                  src={`${Base_url}/tour/image/${item.id}`}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.8,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                    maxHeight:"98px",
                    minHeight:"98px"
                  }}
                  onClick={() => imageChanger(`${Base_url}/tour/image/${item.id}`, index)}
                />
  )
}

export default ImagesLists
