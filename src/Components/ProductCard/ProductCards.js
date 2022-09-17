import { Box, Rating, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import {
  singleProductReducer,
  cratItemReducer,
  productImageReducer,
  travelDetails
} from "../../redux/reducer/reducer";
import {
  individualProductAction,
  cartItemAction,
  london,
  rome,
} from "../../redux/action/index";

import { useTranslation } from "react-i18next";






const ProductCards = ({ item }) => {

  const {t} = useTranslation()
  const [productImage, setProductImage] = useState() 
  const [description, setDescription] = useState(item.city == "Turkey" ? item.description.substr(150,120) : item.description.substr(75,125))

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const myCartItems = useSelector((state) => state.cratItemReducer);
  const reduxProductimage = useSelector((state) => state.productImageReducer);
  const travellerData = useSelector((state) => state.travelDetails)

  const [reRender, setRerender] = useState(true);

  const [productList, setProductList] = useState(
    localStorage.getItem("tourProduct")
  );
  const [wishListItem, setWishListItem] = useState(false);

  const checkWishList = () => {
    if (myCartItems.length) {
      let filterItems = myCartItems.filter((product) => product.id == item.id);
      if (filterItems.length) {
        setWishListItem(true);
      } else {
        setWishListItem(false);
      }
    } else {
      setWishListItem(false);
    }
  };

  useEffect(() => {
    checkWishList();
  }, [reRender]);

  const wishListAddHandler = () => {
    if (myCartItems.length == 0) {
      //  adding cart item for first time
      dispatch(cartItemAction([item]));
    } else {
      //  checking cartItem if it is present or not
      let filterProduct = myCartItems.filter(
        (product) => product.id == item.id
      );
      if (filterProduct.length == 0) {
        //  if it is not present we are adding it
        dispatch(cartItemAction([...myCartItems, item]));
      } else {
        //  if it is present we are removing it
        let filterCurrentItem = myCartItems.filter(
          (product) => product.id != item.id
        );
        dispatch(cartItemAction(filterCurrentItem));
      }
    }
    setRerender(!reRender);
  };



  return (


    <Box
      className="firstImage"
      sx={{
        display: "flex",
        flexDirection: "row",
        columnGap: { xs: 2, md: 3 },
        padding: { xs: "1%", md: "2%" },
        width:{xs:"98%",md:"96%"},
        border:"1px solid #c4c4c2",
        borderRadius:"10px",
        "&:hover": {
          cursor: "pointer",
          boxShadow: "1px 0px 3px -1px rgba(99,89,99,1);",
        },
      }}
    >
      <Box
        className="imgBox"
        sx={{
          maxWidth: { xs: "50%", md: "30%" },
          minWidth: { xs: "50%", md: "30%" },
          maxHeight: { xs: "150px", md: "250px" },
          borderRadius: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          position: "relative",
        }}
      >
        <Box
          component={"img"}
          src={item.imageUrl}
          alt="place image"
          sx={{
            width:"100%",
            height:"100%",
            borderRadius: "20px",
          }}
        />
        <Box
          className="wishlistIcon"
          sx={{
            display: "flex",
            flexDirection: "row",
            position: "absolute",
            right: "10px",
            top: "10px",
          }}
          onClick={() => {
            if (localStorage.getItem("accessToken") == null) {
              navigate("/login");
            } else {
              wishListAddHandler();
            }
          }}
        >
          <FavoriteIcon
            sx={{
              color: "red",
              display: wishListItem ? "flex" : "none",
            }}
          />
          <FavoriteBorderIcon
            sx={{
              display: !wishListItem ? "flex" : "none",
            }}
          />
        </Box>
      </Box>
      <Box
        className="placeDetails"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          padding: { xs: "0", md: "1%" },
          width: {xs:"50%",md:"67%"},
          columnGap: 2,
          rowGap:2,
          justifyContent:{xs:"flex-start",md:"space-between"},
        }}
        onClick={() => {
          localStorage.setItem("tourId",item.id)
          // if (localStorage.getItem("accessToken") != null) {
          //   dispatch(individualProductAction(item));
          //   navigate("/TourDeatils");
          // } else {
          //   navigate("/signup");
          // }
            dispatch(individualProductAction(item));
            navigate("/TourDeatils");
        }}
      >
        <Box
          className="placeDescriptions"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            rowGap: { xs: 1, md: 1 },
            width:{xs:"100%",md:"80%"},
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              fontWeight: "bold",
            }}
          >
            {item.name}
          </Typography>
            
          <Box className="ratingBox" sx={{ display: "flex", columnGap: 1 }}>
            <Rating
              name="read-only"
              value={item.stars}
              readOnly
              sx={{ fontSize: { xs: "15px", md: "18px" } }}
            />
            <Typography sx={{ fontSize: { xs: "14px", md: "14px" } }}>
              3047
            </Typography>
          </Box>
          
         <Box className="placeDescription&Cancellation"
         sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          width:{xs:"100%",md:"100%"}
         }}
         >
          {/* place description */}
         <Box
            className="aboutPlace"
            sx={{ display: { xs: "none", md: "flex",width:"100%" } }}
          >
            <Typography sx={{ fontSize: {xs:"12px",md:"14px"}, display: "inline-block" }}>
              {item.city == "Turkey" && localStorage.getItem("lang") == "EN" ? item.description.substr(150,120) : item.city == "Turkey" && localStorage.getItem("lang") == "TR" ? item.description.substr(154,110) : localStorage.getItem("lang") == "EN" ? item.description.substr(75,125) : item.description.substr(78,125)}
              <span className="more">&nbsp; more</span>
            </Typography>
          </Box>

          {/* cacellation and access time and  */}
          <Box className="concellationAndAccesTime">
          <Box
            className="AccessTime"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              alignItems: "center",
            }}
          >
            <AccessTimeIcon sx={{ fontSize: {xs:"14px",md:"12px"}, }} />
            <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
              {/* 12 hours 30 minutes */}
              {/* {`${item.duration.substr(0,1)}`} */}
              {item.duration} {t("hours")}
            </Typography>
          </Box>

          <Box
            className="concellationBox"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              alignItems: "center",
            }}
          >
            <CheckIcon sx={{ fontSize: {xs:"14px",md:"14px"} }} />
            <Typography sx={{ fontSize: {xs:"14px",md:"14px"}, }}>
              {t("Free Cancellation")}
            </Typography>
          </Box>
          </Box>

         </Box>

         {/* price description */}
        </Box>
        <Box
          className="PriceDetails"
          sx={{
            display: { xs: "flex", md: "flex" },
            flexDirection: { xs: "row", md: "column" },
            justifyContent: { xs: "flex-start", md: "flex-start" },
            alignItems: { xs: "center", md: "flex-end" },
            columnGap: 1,
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", md: "12px" } }}>
            {t("from")}
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
            <Typography sx={{ fontSize: { xs: "15px", md: "16px" },marginRight:"3px",fontWeight:"bold" }}>
              {travellerData.currencyCode}
            </Typography>
            {/* <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
              {travellerData.currencyCode == "GBP" ? item.price : (travellerData.currencyValue*item.price).toFixed(2)}
            </Typography> */}
            <Typography sx={{ fontSize: { xs: "16px", md: "18px" },fontWeight:"bold" }}>
              {travellerData.currencyCode == "GBP" ? item.price : Math.ceil(travellerData.currencyValue*item.price)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCards;
