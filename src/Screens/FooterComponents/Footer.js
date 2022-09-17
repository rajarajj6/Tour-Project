import React from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {

  const {t} = useTranslation()
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        backgroundColor: "black",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        rowGap:3,
        padding:{xs:"2%",md:"2% 0% 2% 0% "}
      }}
    >
      {/* <Box
        className="socialMediaIcons"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 4,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <FacebookIcon sx={{ color: "white" }} />
        <TwitterIcon sx={{ color: "white" }} />
        <InstagramIcon sx={{ color: "white" }} />
        <YouTubeIcon sx={{ color: "white" }} />
        <PinterestIcon sx={{ color: "white" }} />
      </Box> */}
      {/* <Box
        className="ratings"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Rating name="size-medium" defaultValue={4} readOnly />
        <Typography sx={{ color: "white" }}>Travel</Typography>
      </Box> */}
      <Box
        className="contactInformations"
        sx={{
          color: "white",
          display: "flex",
          flexDirection: {xs:"column",md:"row"},
          justifyContent: "space-around",
          width: "100%",
          rowGap:{xs:2,md:0}
        }}
      >
        <Box
          className="firstBox"
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: {xs:1,md:2},
          }}
        >
          {/* <Typography onClick={()=>navigate("/helpPage")} sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}
          >Help Center</Typography> */}
          <Typography onClick={()=>navigate("/PrivacyPolicy")} 
          sx={{
            "&:hover":{cursor:"pointer",textDecoration:"underLine"},
            fontSize:{xs:"12px",md:"14px"}
          }}
          >
            {t("Privacy Policy")}
          </Typography>
          
        </Box>
        <Box
          className="secondBox"
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: {xs:1,md:2},
          }}
        >
          <Typography onClick={()=>navigate("/aboutPage")} 
          sx={{
            "&:hover":{cursor:"pointer",textDecoration:"underLine"},
            fontSize:{xs:"12px",md:"14px"}
          }}
          >{t("About")} MekoTourizm</Typography>
          {/* <Typography sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}onClick={()=>navigate("/siteMapPage")}>SiteMap</Typography>
          <Typography sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}onClick={()=>navigate("/supplierSignUpPgae")}>Supplier Signup</Typography> */}
        </Box>
        {/* <Box
          className="thirdBox"
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: {xs:1,md:2},
          }}
        >
          <Typography sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}
          onClick={()=>navigate("/TravelAgentPage")}
          >Travel Agent</Typography>
          <Typography sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}
          onClick={()=>navigate("/AffiliatePage")}
          >Become an Affiliate</Typography>
          <Typography sx={{"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}
          onClick={()=>navigate("/NewsPage")}
          >News</Typography>
        </Box> */}
        <Box
          className="fourthBox"
          sx={{
            color: "white",
            display: "flex",
            flexDirection: "column",
            rowGap: {xs:1,md:2},
          }}
        >
          <Typography sx={{
            "&:hover":{cursor:"pointer",textDecoration:"underLine"},
            fontSize:{xs:"12px",md:"14px"}
          }}
          onClick={()=>navigate("/TermsAndCondition")}
          >
            {t("Terms & Conditions")}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
