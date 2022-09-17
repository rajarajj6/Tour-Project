import React, { useState } from 'react'
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { Box, Rating, Typography } from '@mui/material';


let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]
let cost = ["8567.23","2389.54","5461.90"]


const RecentlyViewed = () => {

    const [productimage, setProductImage] = useState(arr[Math.floor(Math.random()*arr.length)])
    const [productCost, setProductCost] = useState(cost[Math.floor(Math.random()*cost.length)])

  return (
    <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "column",
      rowGap: 1,
      width: { xs: "100%", md: "350px" },
      padding: {xs:"0px",md:"7px"},
      "&:hover": { cursor: "pointer" },
    }}
  >
    <Box
      component={"img"}
      src={productimage}
      alt="recentlyViewdImage"
      sx={{
        width: { xs: "100%", md: "100%" },
        borderRadius: "10px",
        height:{xs:"100%",md:"220px"}
      }}
    />
    <Typography sx={{fontSize:{xs:"14px",md:"12px"}}}>London,England</Typography>
    <Typography sx={{ fontWeight: "bold",  fontSize: { xs: "14px", md: "16px" }, }}>
      Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
    </Typography>
    <Box
      className="ratings&reviews"
      sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
    >
      <Rating
        name="read-only"
        value={4}
        readOnly
        sx={{ fontSize: "17px" }}
      />
      <Typography>{productCost}</Typography>
    </Box>
    <Box
      className="priceDetails"
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Typography sx={{ fontSize: {xs:"13px",md:"12px"},mr:"4px" }}>from</Typography>
      <Box
        className="price"
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <CurrencyRupeeIcon sx={{ fontSize: "18px" }} /> */}
        <Typography sx={{fontSize:{xs:"12px",md:"16px"},marginRight:"3px",fontWeight:"bold"}}>GBP</Typography>
        <Typography sx={{fontSize:{xs:"16px",md:"16px"},fontWeight:"bold"}}>8327.94</Typography>
      </Box>
    </Box>
  </Box>
  )
}

export default RecentlyViewed