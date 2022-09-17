import { Box, Skeleton } from '@mui/material'
import React from 'react'

const BookingPageSkeleton = () => {
  return (
    <Box
    sx={{
        display:"flex",
        columnGap:2
    }}
    >
        {
            [1,2,3,4].map((item,index) => {
                return <Box
                key={index}
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                <Skeleton variant="rectangular" width={300} height={200} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
                <Skeleton variant="rectangular" width={300} height={30} />
                </Box>
            })
        }
    </Box>
  )
}

export default BookingPageSkeleton