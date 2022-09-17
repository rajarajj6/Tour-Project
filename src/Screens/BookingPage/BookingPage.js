import { Typography, Box, Button, Rating, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../FooterComponents/Footer'
import Header from '../HeaderComponents/Header'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom'
import CheckIcon from "@mui/icons-material/Check";
import BookingProductCart from '../../Components/BookingProductCart/BookingProductCart'

import { useSelector } from 'react-redux'
import { currentUserReducer } from '../../redux/reducer/reducer'
import axios from 'axios'
import BookingPageSkeleton from '../../Components/BookingProductCart/BookingPageSkeleton'
import { useTranslation } from 'react-i18next'

const Base_url = process.env.REACT_APP_Axios_Base_urls



const BookingPage =  () => {

  const {t} = useTranslation()
  const navigate = useNavigate()
  const userData = useSelector((state) => state.currentUserReducer)
  const [bookedProductList, setBookedProductList] = useState([])
  const [productFetched, setProductFetched] = useState(false)

  const fetchBookedProduct = async () => {
    let options = {
      url:`${Base_url}/order/fetch-orders?userId=${localStorage.getItem("userId")}`,
      method:"GET",
      headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      }
    }

    try{

      let response = await axios(options)
      console.log(response)
      if(response.data.status == "success"){
        setBookedProductList(response.data.object)
        setProductFetched(true)
      }
    }catch(err){

    }
  }


  useEffect(()=>{
    fetchBookedProduct()
  },[])




  return (
    <Box>
      <Header />
<Box
        sx={{
        padding:{xs:"2% 3% 2% 3%",md:"3% 6% 3% 6%"},
        width:{xs:"94%",md:"88%"},
        display:"flex",
        flexDirection:"column",
        rowGap:2,
        alignItems:"flex-start",
        justifyContent:"flex-start"
        }}
        >
          <Box className='1stPart'>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >
                {t("My Bookings")}
              </Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                {t("Your list of tours that has been booked")}
              </Typography>
          </Box>
        
        <Box className='AllWishListProducts'
        sx={{
          display:"flex",
          flexDirection:{xs:"column",md:"row"},
          alignItems:{xs:"flex-start",md:"center"},
          justifyContent:{xs:"flex-start",md:"space-evenly"},
          flexWrap:{xs:"nowrap",md:"wrap"},
          width:{xs:"100%",md:"100%"},
          rowGap:6,
          // columnGap:2
        }}
        >
          {
            bookedProductList.length == 0 && productFetched == false ?
            <Box sx={{width:{xs:"100%",md:"100%"},
                    height:{xs:"70vh",md:"65vh"},
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center"}}
                    > 
                        <BookingPageSkeleton />
              </Box>
            : bookedProductList.length == 0  && productFetched == true?
            <Box sx={{width:{xs:"100%",md:"100%"},
            height:{xs:"70vh",md:"65vh"},
            display:"flex",
            justifyContent:"center",
            alignItems:"center"}}>
            <Typography sx={{fontSize:{xs:"16px",md:"18px"}}}>No Products Booked</Typography>
              </Box>
            : bookedProductList.map((item,index) => {
              if(item.status == "SUCCESS"){
                return <BookingProductCart key={index} item={item}/>
              }
            })
          }
    </Box>
    </Box>

      <Footer />
    </Box>
  )
}

export default BookingPage