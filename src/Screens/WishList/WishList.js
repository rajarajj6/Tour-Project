import { Typography, Box, Button, Rating, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../FooterComponents/Footer'
import Header from '../HeaderComponents/Header'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import WishListProductCard from '../../Components/WishList/WishListProductCard'
import { singleProductReducer, cratItemReducer } from '../../redux/reducer/reducer';
import { individualProductAction,cartItemAction } from '../../redux/action/index';
import { useSelector } from 'react-redux'



const WishList = () => {

  const [reRenderPage, setReRenderPage] = useState(true)

  const myCartItems = useSelector((state) => state.cratItemReducer)
  const item = myCartItems

  const callReRender = (city) => {
    setReRenderPage(!reRenderPage)
  }



  useEffect(()=>{
  },[reRenderPage])



  return (
    <Box>
        <Header />
        <Box
        sx={{
        padding:{xs:"2% 3% 2% 3%",md:"2% 6% 3% 6%"},
        width:{xs:"94%",md:"88%"},
        display:"flex",
        flexDirection:"column",
        rowGap:2,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        }}
        >
          <Box className='1stPart'>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >My WishList</Typography>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"18px"}
              }}
              >Your list of tours and activities that you saved for your travel research</Typography>
          </Box>
        
        <Box className='AllWishListProducts'
        sx={{
          display:"flex",
          flexDirection:{xs:"column",md:"row"},
          alignItems:{xs:"flex-start",md:"center"},
          justifyContent:{xs:"flex-start",md:"space-between"},
          flexWrap:{xs:"nowrap",md:"wrap"},
          width:{xs:"100%",md:"100%"},
          rowGap:3,
        }}
        >
          {/* {
            JSON.parse(localStorage.getItem("tourProduct")).length >0 ?
              <Box
              sx={{
                display:"flex",
                flexDirection:{xs:"column",md:"row"},
                alignItems:{xs:"flex-start",md:"center"},
                justifyContent:{xs:"flex-start",md:"space-around"},
                flexWrap:{xs:"nowrap",md:"wrap"},
                width:{xs:"100%",md:"100%"},
                rowGap:3,
              }}
              >
                {
                  JSON.parse(localStorage.getItem("tourProduct")).map((item, index) => {
                    return <WishListProductCard  key={index} item={item} setReRenderPage={setReRenderPage} reRenderPage={reRenderPage}/>
                  })
                }
                </Box>
            : <Box 
            sx={{
              width:"100%",
              height:"70vh",
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center"
            }}>
                <Typography
                sx={{
                  fontSize:{xs:"20px",md:"25px"},
                  fontWeight:"bold"
                }}
                >No Products</Typography>
              </Box>
          } */}


          {
            myCartItems.length == 0 ? 
            <Box 
            sx={{
              width:"100%",
              height:"70vh",
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"center"
            }}>
                <Typography
                sx={{
                  fontSize:{xs:"20px",md:"25px"},
                  fontWeight:"bold"
                }}
                >No Products</Typography>
              </Box>
              :  <Box
              sx={{
                display:"flex",
                flexDirection:{xs:"column",md:"row"},
                alignItems:{xs:"flex-start",md:"center"},
                justifyContent:{xs:"flex-start",md:"flex-start"},
                flexWrap:{xs:"nowrap",md:"wrap"},
                width:{xs:"100%",md:"100%"},
                rowGap:3,
                columnGap:5
              }}
              >
                {
                  myCartItems.map((item , index) => {
                      return <WishListProductCard key={index} item={item} 
                    reRenderPage={reRenderPage} setReRenderPage={setReRenderPage}
                    callReRender={callReRender}  
                    />
                  })
                }
                </Box>
          }

    </Box>
    </Box>
    <Footer />
    </Box>
  )
}

export default WishList