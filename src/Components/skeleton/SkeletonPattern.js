import { Box } from '@mui/material'
import React from 'react'
import Skeleton from '@mui/material/Skeleton'


const SkeletonPattern = () => {
  return (
    <Box
    sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:2,
      width:"100%",
    }}
    >

      {
        [1,2,3,4].map((i,index) => {
          return  <Box
          key={index}
          sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"flex-start",
            columnGap:2
          }}
          >
            <Skeleton variant="rectangular"  sx={{
              width:{xs:"40%",md:"30%"},
              height:{xs:"100%",md:"100%"}
            }}/>
            <Box
            sx={{
              display:"flex",
              flexDirection:"column",
              rowGap:1,
              width:{xs:"60%"}
            }}
            >
            <Skeleton  sx={{width:{xs:"100%",md:"100%"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"},display:{xs:"none",md:"flex"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"},display:{xs:"none",md:"flex"}}}/> 
            <Skeleton  sx={{width:{xs:"100%",md:"100%"},display:{xs:"none",md:"flex"}}}/> 
            </Box>
          </Box>
        })
      }
     
       
    </Box>
  )
}

export default SkeletonPattern