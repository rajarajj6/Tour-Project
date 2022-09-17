import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const ArtCulture = ({Art_CultureToggleDrawer}) => {
  return (
    <Box className="Art & Culture">
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        // "&:hover":{
        //   backgroundColor:"#f2fcfc"
        // }
      }}
      onClick={Art_CultureToggleDrawer("left", true)}
    >
      <Typography
        sx={{
          "&:hover": {
            textDecoration: "underLine",
            cursor: "pointer",
          },
        }}
      >
        Art & Culture
      </Typography>
      <Box
        className="arrows"
      >
        <KeyboardArrowRightIcon />
      </Box>
    </Box>
  </Box>
  )
}

export default ArtCulture