import {
  Alert,
  Box,
  Button,
  Divider,
  MenuItem,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiVisaLine, RiRefund2Line } from "react-icons/ri";
import { SiAmericanexpress, SiMastercard } from "react-icons/si";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { useSelector, useDispatch } from "react-redux";
import {booking_date_day, addTravelMembers, travelDetails, singleProductReducer, currentUserReducer} from "../../redux/reducer/reducer"
import { addFirstName, addLastName, CardholderName, Country, countryCode, CreditCardNumber, EmailAddress, ExpirationMonth, Expirayyear, individualProductAction, PhoneNumber, PromoCode, SaveCreditCard, SecurityCode, specialRequirements } from "../../redux/action/index";
import axios from "axios"
import Header from "../HeaderComponents/Header";
import { Navigate, useNavigate } from "react-router-dom";
import Footer from "../FooterComponents/Footer";

import { useTranslation } from "react-i18next";


const Base_url = process.env.REACT_APP_Axios_Base_urls


const countries = [
    {
      "code": "+7 840",
      "name": "Abkhazia"
    },
    {
      "code": "+93",
      "name": "Afghanistan"
    },
    {
      "code": "+355",
      "name": "Albania"
    },
    {
      "code": "+213",
      "name": "Algeria"
    },
    {
      "code": "+1 684",
      "name": "American Samoa"
    },
    {
      "code": "+376",
      "name": "Andorra"
    },
    {
      "code": "+244",
      "name": "Angola"
    },
    {
      "code": "+1 264",
      "name": "Anguilla"
    },
    {
      "code": "+1 268",
      "name": "Antigua and Barbuda"
    },
    {
      "code": "+54",
      "name": "Argentina"
    },
    {
      "code": "+374",
      "name": "Armenia"
    },
    {
      "code": "+297",
      "name": "Aruba"
    },
    {
      "code": "+247",
      "name": "Ascension"
    },
    {
      "code": "+61",
      "name": "Australia"
    },
    {
      "code": "+672",
      "name": "Australian External Territories"
    },
    {
      "code": "+43",
      "name": "Austria"
    },
    {
      "code": "+994",
      "name": "Azerbaijan"
    },
    {
      "code": "+1 242",
      "name": "Bahamas"
    },
    {
      "code": "+973",
      "name": "Bahrain"
    },
    {
      "code": "+880",
      "name": "Bangladesh"
    },
    {
      "code": "+1 246",
      "name": "Barbados"
    },
    {
      "code": "+1 268",
      "name": "Barbuda"
    },
    {
      "code": "+375",
      "name": "Belarus"
    },
    {
      "code": "+32",
      "name": "Belgium"
    },
    {
      "code": "+501",
      "name": "Belize"
    },
    {
      "code": "+229",
      "name": "Benin"
    },
    {
      "code": "+1 441",
      "name": "Bermuda"
    },
    {
      "code": "+975",
      "name": "Bhutan"
    },
    {
      "code": "+591",
      "name": "Bolivia"
    },
    {
      "code": "+387",
      "name": "Bosnia and Herzegovina"
    },
    {
      "code": "+267",
      "name": "Botswana"
    },
    {
      "code": "+55",
      "name": "Brazil"
    },
    {
      "code": "+246",
      "name": "British Indian Ocean Territory"
    },
    {
      "code": "+1 284",
      "name": "British Virgin Islands"
    },
    {
      "code": "+673",
      "name": "Brunei"
    },
    {
      "code": "+359",
      "name": "Bulgaria"
    },
    {
      "code": "+226",
      "name": "Burkina Faso"
    },
    {
      "code": "+257",
      "name": "Burundi"
    },
    {
      "code": "+855",
      "name": "Cambodia"
    },
    {
      "code": "+237",
      "name": "Cameroon"
    },
    {
      "code": "+1",
      "name": "Canada"
    },
    {
      "code": "+238",
      "name": "Cape Verde"
    },
    {
      "code": "+ 345",
      "name": "Cayman Islands"
    },
    {
      "code": "+236",
      "name": "Central African Republic"
    },
    {
      "code": "+235",
      "name": "Chad"
    },
    {
      "code": "+56",
      "name": "Chile"
    },
    {
      "code": "+86",
      "name": "China"
    },
    {
      "code": "+61",
      "name": "Christmas Island"
    },
    {
      "code": "+61",
      "name": "Cocos-Keeling Islands"
    },
    {
      "code": "+57",
      "name": "Colombia"
    },
    {
      "code": "+269",
      "name": "Comoros"
    },
    {
      "code": "+242",
      "name": "Congo"
    },
    {
      "code": "+243",
      "name": "Congo, Dem. Rep. of (Zaire)"
    },
    {
      "code": "+682",
      "name": "Cook Islands"
    },
    {
      "code": "+506",
      "name": "Costa Rica"
    },
    {
      "code": "+385",
      "name": "Croatia"
    },
    {
      "code": "+53",
      "name": "Cuba"
    },
    {
      "code": "+599",
      "name": "Curacao"
    },
    {
      "code": "+537",
      "name": "Cyprus"
    },
    {
      "code": "+420",
      "name": "Czech Republic"
    },
    {
      "code": "+45",
      "name": "Denmark"
    },
    {
      "code": "+246",
      "name": "Diego Garcia"
    },
    {
      "code": "+253",
      "name": "Djibouti"
    },
    {
      "code": "+1 767",
      "name": "Dominica"
    },
    {
      "code": "+1 809",
      "name": "Dominican Republic"
    },
    {
      "code": "+670",
      "name": "East Timor"
    },
    {
      "code": "+56",
      "name": "Easter Island"
    },
    {
      "code": "+593",
      "name": "Ecuador"
    },
    {
      "code": "+20",
      "name": "Egypt"
    },
    {
      "code": "+503",
      "name": "El Salvador"
    },
    {
      "code": "+240",
      "name": "Equatorial Guinea"
    },
    {
      "code": "+291",
      "name": "Eritrea"
    },
    {
      "code": "+372",
      "name": "Estonia"
    },
    {
      "code": "+251",
      "name": "Ethiopia"
    },
    {
      "code": "+500",
      "name": "Falkland Islands"
    },
    {
      "code": "+298",
      "name": "Faroe Islands"
    },
    {
      "code": "+679",
      "name": "Fiji"
    },
    {
      "code": "+358",
      "name": "Finland"
    },
    {
      "code": "+33",
      "name": "France"
    },
    {
      "code": "+596",
      "name": "French Antilles"
    },
    {
      "code": "+594",
      "name": "French Guiana"
    },
    {
      "code": "+689",
      "name": "French Polynesia"
    },
    {
      "code": "+241",
      "name": "Gabon"
    },
    {
      "code": "+220",
      "name": "Gambia"
    },
    {
      "code": "+995",
      "name": "Georgia"
    },
    {
      "code": "+49",
      "name": "Germany"
    },
    {
      "code": "+233",
      "name": "Ghana"
    },
    {
      "code": "+350",
      "name": "Gibraltar"
    },
    {
      "code": "+30",
      "name": "Greece"
    },
    {
      "code": "+299",
      "name": "Greenland"
    },
    {
      "code": "+1 473",
      "name": "Grenada"
    },
    {
      "code": "+590",
      "name": "Guadeloupe"
    },
    {
      "code": "+1 671",
      "name": "Guam"
    },
    {
      "code": "+502",
      "name": "Guatemala"
    },
    {
      "code": "+224",
      "name": "Guinea"
    },
    {
      "code": "+245",
      "name": "Guinea-Bissau"
    },
    {
      "code": "+595",
      "name": "Guyana"
    },
    {
      "code": "+509",
      "name": "Haiti"
    },
    {
      "code": "+504",
      "name": "Honduras"
    },
    {
      "code": "+852",
      "name": "Hong Kong SAR China"
    },
    {
      "code": "+36",
      "name": "Hungary"
    },
    {
      "code": "+354",
      "name": "Iceland"
    },
    {
      "code": "+91",
      "name": "India"
    },
    {
      "code": "+62",
      "name": "Indonesia"
    },
    {
      "code": "+98",
      "name": "Iran"
    },
    {
      "code": "+964",
      "name": "Iraq"
    },
    {
      "code": "+353",
      "name": "Ireland"
    },
    {
      "code": "+972",
      "name": "Israel"
    },
    {
      "code": "+39",
      "name": "Italy"
    },
    {
      "code": "+225",
      "name": "Ivory Coast"
    },
    {
      "code": "+1 876",
      "name": "Jamaica"
    },
    {
      "code": "+81",
      "name": "Japan"
    },
    {
      "code": "+962",
      "name": "Jordan"
    },
    {
      "code": "+7 7",
      "name": "Kazakhstan"
    },
    {
      "code": "+254",
      "name": "Kenya"
    },
    {
      "code": "+686",
      "name": "Kiribati"
    },
    {
      "code": "+965",
      "name": "Kuwait"
    },
    {
      "code": "+996",
      "name": "Kyrgyzstan"
    },
    {
      "code": "+856",
      "name": "Laos"
    },
    {
      "code": "+371",
      "name": "Latvia"
    },
    {
      "code": "+961",
      "name": "Lebanon"
    },
    {
      "code": "+266",
      "name": "Lesotho"
    },
    {
      "code": "+231",
      "name": "Liberia"
    },
    {
      "code": "+218",
      "name": "Libya"
    },
    {
      "code": "+423",
      "name": "Liechtenstein"
    },
    {
      "code": "+370",
      "name": "Lithuania"
    },
    {
      "code": "+352",
      "name": "Luxembourg"
    },
    {
      "code": "+853",
      "name": "Macau SAR China"
    },
    {
      "code": "+389",
      "name": "Macedonia"
    },
    {
      "code": "+261",
      "name": "Madagascar"
    },
    {
      "code": "+265",
      "name": "Malawi"
    },
    {
      "code": "+60",
      "name": "Malaysia"
    },
    {
      "code": "+960",
      "name": "Maldives"
    },
    {
      "code": "+223",
      "name": "Mali"
    },
    {
      "code": "+356",
      "name": "Malta"
    },
    {
      "code": "+692",
      "name": "Marshall Islands"
    },
    {
      "code": "+596",
      "name": "Martinique"
    },
    {
      "code": "+222",
      "name": "Mauritania"
    },
    {
      "code": "+230",
      "name": "Mauritius"
    },
    {
      "code": "+262",
      "name": "Mayotte"
    },
    {
      "code": "+52",
      "name": "Mexico"
    },
    {
      "code": "+691",
      "name": "Micronesia"
    },
    {
      "code": "+1 808",
      "name": "Midway Island"
    },
    {
      "code": "+373",
      "name": "Moldova"
    },
    {
      "code": "+377",
      "name": "Monaco"
    },
    {
      "code": "+976",
      "name": "Mongolia"
    },
    {
      "code": "+382",
      "name": "Montenegro"
    },
    {
      "code": "+1664",
      "name": "Montserrat"
    },
    {
      "code": "+212",
      "name": "Morocco"
    },
    {
      "code": "+95",
      "name": "Myanmar"
    },
    {
      "code": "+264",
      "name": "Namibia"
    },
    {
      "code": "+674",
      "name": "Nauru"
    },
    {
      "code": "+977",
      "name": "Nepal"
    },
    {
      "code": "+31",
      "name": "Netherlands"
    },
    {
      "code": "+599",
      "name": "Netherlands Antilles"
    },
    {
      "code": "+1 869",
      "name": "Nevis"
    },
    {
      "code": "+687",
      "name": "New Caledonia"
    },
    {
      "code": "+64",
      "name": "New Zealand"
    },
    {
      "code": "+505",
      "name": "Nicaragua"
    },
    {
      "code": "+227",
      "name": "Niger"
    },
    {
      "code": "+234",
      "name": "Nigeria"
    },
    {
      "code": "+683",
      "name": "Niue"
    },
    {
      "code": "+672",
      "name": "Norfolk Island"
    },
    {
      "code": "+850",
      "name": "North Korea"
    },
    {
      "code": "+1 670",
      "name": "Northern Mariana Islands"
    },
    {
      "code": "+47",
      "name": "Norway"
    },
    {
      "code": "+968",
      "name": "Oman"
    },
    {
      "code": "+92",
      "name": "Pakistan"
    },
    {
      "code": "+680",
      "name": "Palau"
    },
    {
      "code": "+970",
      "name": "Palestinian Territory"
    },
    {
      "code": "+507",
      "name": "Panama"
    },
    {
      "code": "+675",
      "name": "Papua New Guinea"
    },
    {
      "code": "+595",
      "name": "Paraguay"
    },
    {
      "code": "+51",
      "name": "Peru"
    },
    {
      "code": "+63",
      "name": "Philippines"
    },
    {
      "code": "+48",
      "name": "Poland"
    },
    {
      "code": "+351",
      "name": "Portugal"
    },
    {
      "code": "+1 787",
      "name": "Puerto Rico"
    },
    {
      "code": "+974",
      "name": "Qatar"
    },
    {
      "code": "+262",
      "name": "Reunion"
    },
    {
      "code": "+40",
      "name": "Romania"
    },
    {
      "code": "+7",
      "name": "Russia"
    },
    {
      "code": "+250",
      "name": "Rwanda"
    },
    {
      "code": "+685",
      "name": "Samoa"
    },
    {
      "code": "+378",
      "name": "San Marino"
    },
    {
      "code": "+966",
      "name": "Saudi Arabia"
    },
    {
      "code": "+221",
      "name": "Senegal"
    },
    {
      "code": "+381",
      "name": "Serbia"
    },
    {
      "code": "+248",
      "name": "Seychelles"
    },
    {
      "code": "+232",
      "name": "Sierra Leone"
    },
    {
      "code": "+65",
      "name": "Singapore"
    },
    {
      "code": "+421",
      "name": "Slovakia"
    },
    {
      "code": "+386",
      "name": "Slovenia"
    },
    {
      "code": "+677",
      "name": "Solomon Islands"
    },
    {
      "code": "+27",
      "name": "South Africa"
    },
    {
      "code": "+500",
      "name": "South Georgia and the South Sandwich Islands"
    },
    {
      "code": "+82",
      "name": "South Korea"
    },
    {
      "code": "+34",
      "name": "Spain"
    },
    {
      "code": "+94",
      "name": "Sri Lanka"
    },
    {
      "code": "+249",
      "name": "Sudan"
    },
    {
      "code": "+597",
      "name": "Suriname"
    },
    {
      "code": "+268",
      "name": "Swaziland"
    },
    {
      "code": "+46",
      "name": "Sweden"
    },
    {
      "code": "+41",
      "name": "Switzerland"
    },
    {
      "code": "+963",
      "name": "Syria"
    },
    {
      "code": "+886",
      "name": "Taiwan"
    },
    {
      "code": "+992",
      "name": "Tajikistan"
    },
    {
      "code": "+255",
      "name": "Tanzania"
    },
    {
      "code": "+66",
      "name": "Thailand"
    },
    {
      "code": "+670",
      "name": "Timor Leste"
    },
    {
      "code": "+228",
      "name": "Togo"
    },
    {
      "code": "+690",
      "name": "Tokelau"
    },
    {
      "code": "+676",
      "name": "Tonga"
    },
    {
      "code": "+1 868",
      "name": "Trinidad and Tobago"
    },
    {
      "code": "+216",
      "name": "Tunisia"
    },
    {
      "code": "+90",
      "name": "Turkey"
    },
    {
      "code": "+993",
      "name": "Turkmenistan"
    },
    {
      "code": "+1 649",
      "name": "Turks and Caicos Islands"
    },
    {
      "code": "+688",
      "name": "Tuvalu"
    },
    {
      "code": "+1 340",
      "name": "U.S. Virgin Islands"
    },
    {
      "code": "+256",
      "name": "Uganda"
    },
    {
      "code": "+380",
      "name": "Ukraine"
    },
    {
      "code": "+971",
      "name": "United Arab Emirates"
    },
    {
      "code": "+44",
      "name": "United Kingdom"
    },
    {
      "code": "+1",
      "name": "United States"
    },
    {
      "code": "+598",
      "name": "Uruguay"
    },
    {
      "code": "+998",
      "name": "Uzbekistan"
    },
    {
      "code": "+678",
      "name": "Vanuatu"
    },
    {
      "code": "+58",
      "name": "Venezuela"
    },
    {
      "code": "+84",
      "name": "Vietnam"
    },
    {
      "code": "+1 808",
      "name": "Wake Island"
    },
    {
      "code": "+681",
      "name": "Wallis and Futuna"
    },
    {
      "code": "+967",
      "name": "Yemen"
    },
    {
      "code": "+260",
      "name": "Zambia"
    },
    {
      "code": "+255",
      "name": "Zanzibar"
    },
    {
      "code": "+263",
      "name": "Zimbabwe"
    }
  ]



  const Months = [
    {
      name:"Jan"
    },
    {
      name:"Feb"
    },
    {
      name:"Mar"
    },
    {
      name:"Apr"
    },
    {
      name:"May"
    },
    {
      name:"Jun"
    },
    {
      name:"Jul"
    },
    {
      name:"Aug"
    },
    {
      name:"Sep"
    },
    {
      name:"Oct"
    },
    {
      name:"Nov"
    },
    {
      name:"Dec"
    },
  ]





const CheckOutPage = () => {


  const {t} = useTranslation()
  const navigate = useNavigate()

  //  redux state and dispatch functions
  const travellerData = useSelector((state) => state.travelDetails)
  const memberPresentState = useSelector((state) => state.addTravelMembers)
  const booking_dateDetails = useSelector((state) => state.booking_date_day)
  const fullBookingDetails = useSelector((state) => state.travelDetails)
  const singleTourDetails = useSelector((state) => state.singleProductReducer)
  console.log(singleTourDetails)
  const currentUserDetails = useSelector((state) => state.currentUserReducer)
  const [SnakBarOpen, setSnakBarOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = useState("")
  const [alertMessageColor, setAlertMessageColor] = useState("warning")

  const item = singleTourDetails
  const [description, setDescription] = useState(singleTourDetails.city == undefined ? "no description": singleTourDetails.city == "Turkey" ? singleTourDetails.description.substr(150,120) : singleTourDetails.description.substr(75,125))
  

  const date = booking_dateDetails.BookDate +"/ "+booking_dateDetails.BookMonth+ "/"+ booking_dateDetails.BookYear
  const dispatch = useDispatch(0)

  
  
  const [todayDate, setTodayDate] = useState(new Date().toLocaleDateString());
  const [currency, setCurrency] = React.useState("EUR");
  const [countryState, setCountryState] = useState("India")

    const [showPromoCode, setShowPromoCode] = useState(false)
  const [cardEexpiryMonth, setCardExpiryMonth] = useState("")


  const handleSnakBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakBarOpen(false);
  };
  
  
    const handleChange = (event) => {
      dispatch(countryCode(event.target.value))
    setCurrency(event.target.value);
  };


  const handleCountryChange = (event) => {
    dispatch(Country(event.target.value))
  setCountryState(event.target.value);
};

const handleExpiryMonth = (e) => {
  dispatch(ExpirationMonth(e.target.value))
  setCardExpiryMonth(e.target.value)
} 



const submitHandler = async () => {

  if(fullBookingDetails.LeadTravelerFirstName == ""){
    setAlertMessage("Please Enter Traveler First Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.LeadTravelerLastName ==  ""){
    setAlertMessage("Please Enter Traveler Last Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.specialRequirements == ""){
    setAlertMessage("Please Enter Traveler Special Requirements")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.CardholderName== ""){
    setAlertMessage("Please Enter Card Holder Name")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.CreditCardNumber == ""){
    setAlertMessage("Please Enter Card Number")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.ExpirationMonth == ""){
    setAlertMessage("Please Enter Expiray Month")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.Expirayyear == ""){
    setAlertMessage("Please Enter Expiry Year")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.SecurityCode == ""){
    setAlertMessage("Please Enter Security Code")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.EmailAddress == ""){
    setAlertMessage("Please Enter Email Id")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.PhoneNumber == ""){
    setAlertMessage("Please Enter Phone Number")
    setSnakBarOpen(true)
  }else if(fullBookingDetails.countryCode == ""){
    setAlertMessage("Please Enter Ciuntry Code")
    setSnakBarOpen(true)
  }else{

  

  let date = new Date();
  date.setDate(date.getDate()+2)


  let expirayMon = "JanFebMarAprMayJunJulAugSepOctNovDec".indexOf(`${fullBookingDetails.ExpirationMonth}`) / 3 + 1

  let expiryYear =  `${fullBookingDetails.Expirayyear}`.slice(2)

  let amount = travellerData.currencyCode == "GBP" ? (memberPresentState.adult*singleTourDetails.price)+(memberPresentState.child*singleTourDetails.price) : Math.ceil(memberPresentState.adult*singleTourDetails.price*travellerData.currencyValue+memberPresentState.child*singleTourDetails.price*travellerData.currencyValue)

  let options = {
    url:`${Base_url}/order/create`,
    method:"POST",
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    },
    data:{
      quantity:1,
      currency:`${travellerData.currencyCode}`,
      token:`${localStorage.getItem("accessToken")}`,
      userId:currentUserDetails.id,
      productId:singleTourDetails.id,
      amount,
      cardNumber:fullBookingDetails.CreditCardNumber.toString(),
      cardHolderName:fullBookingDetails.CardholderName,
      cardExpiry:`${expirayMon}/${expiryYear}`,
      cardCvv:fullBookingDetails.SecurityCode,
      fromDate:new Date().toLocaleDateString('en-CA'),
      toDate: date.toLocaleDateString('en-CA'),
      adultQty:memberPresentState.adult,
      childQty:memberPresentState.child
    }
  }
    try{
      setAlertMessageColor("success")
      let response = await axios(options)
      let {data} = response
      if(data.message == "Error processing order"){
        setAlertMessageColor("warning")
        setAlertMessage(data.message)
      }else{
        setAlertMessage(data.message)
      }
      setSnakBarOpen(true)
    }catch(error){
    }
    setTimeout(()=>{
      navigate("/")
    },4000)
  }
}




const fetchCurrentProduct = async ()=>{
  let options = {
    url:`${Base_url}/tour/product?id=${localStorage.getItem("tourId")}`,
    method:"GET",
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    }
  }

  try{
    let {data} = await axios(options)
    dispatch(individualProductAction(data));
  }catch(err){
    
  }
}


useEffect(() => {
  fetchCurrentProduct()
},[])


  return (
    <Box>
      <Header />
      <Box
        className="mainBody"
        sx={{
          width: { xs: "100%", md: "88%" },
          padding: { xs: "0%", md: "0% 6% 0% 6%" },
        }}
      >
        <Box className="1stPart"
        sx={{
          width:{xs:"96%",md:"100%"},
          padding:{xs:"0% 2% 0% 2%",md:"0%"}
        }}
        >
          <Typography
            sx={{
              fontSize: { xs: "20px", md: "30px" },
            }}
          >
            {t("Secure Checkout")}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "16px", md: "20px" },
            }}
          >
            {t("Checkout securely")} — {t("it takes only a few minutes")}
          </Typography>
        </Box>
        <Box
          className="2nd Part"
          sx={{
            width: { xs: "100%", md: "100%" },
            display:"flex",
            flexDirection:"row",
            columnGap:1,
            alignItems:"flex-start",
          }}
        >
          <Box
            className="leftPart"
            sx={{
              width: { xs: "100%", md: "65%" },
              padding: { xs: "1%", md: "1%" },
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Box className="1stLeftPart" 
            sx={{
                border: "2px solid #edebeb",
                padding:{xs:"2%",md:"2%"},
                display:"flex",
                flexDirection:"column",
                rowGap:2
            }}>

            
            <Box
              className="tourImage&Descriptions"
              sx={{
                display: "flex",
                flexDirection: {xs:"row-reverse",md:"row"},
                columnGap: 2,
                alignItems: "flex-start",
                justifyContent: "flex-start",
              }}
            >
              <Box
                component={"img"}
                 src={singleTourDetails.imageUrl }
                alt="tour image"
                sx={{
                  width: { xs: "120px", md: "200px" },
                  height:{xs:"100px"},
                  borderRadius: "20px",
                }}
              />
              <Box className="tourDescriptions"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  {!booking_dateDetails.BookDate ? todayDate : date }
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: "16px", md: "20px" },
                    fontWeight: "bold",
                  }}
                >
                  {singleTourDetails.name}
                </Typography>
                <Box className="time&Experience">
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                     {singleTourDetails.city == null ? "No Description" : singleTourDetails.city == "Turkey" && localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(150,120) : item.city == "Turkey" && localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(154,110) : localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(75,125) :  localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(78,125) : null}
                     {/* {singleTourDetails.city == "Turkey" && localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(150,120) : item.city == "Turkey" && localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(154,110) : localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(75,125) :  localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(78,125) : null} */}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { xs: "14px", md: "16px" },
                    }}
                  >
                    {t("This experience is hosted by a business.")}
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Divider />

            <Box className="traveler Details" 
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:3
            }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16pxpx", md: "20px" },
                  fontWeight: "bold",
                }}
              >
                {t("Traveler Details")}
              </Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                {t("Information we need to confirm your tour or activity")}
              </Typography>
              <Box className="LeadTraveler" sx={{
                width:{xs:"100%",md:"100%"},
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
              <Typography
                  sx={{
                    fontSize:{xs:"16px",md:"20px"}
                  }}
                  >
                     {t("Lead Traveler")} ({t("Adult")})
                     </Typography>
                <Box className="travelerDetails" sx={{
                    width:{xs:"100%",md:"100%"},
                    display:"flex",
                    flexDirection:{xs:"column",md:"row"},
                    justifyContent:"space-between",
                    rowGap:1
                }}>
                 
                  <Box className="firstName"
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    rowGap:1,
                    width:{xs:"100%",md:"40%"},
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                      }}
                    >
                      {t("FirstName")}
                    </Typography>
                    <TextField type={"text"} placeholder={"Enter FirstName"} fullWidth   onChange={(e) => dispatch(addFirstName(e.target.value))}  />
                  </Box>
                  <Box className="LastName"
                  sx={{
                    display:"flex",
                    flexDirection:"column",
                    alignItems:"flex-start",
                    justifyContent:"center",
                    rowGap:1,
                    width:{xs:"100%",md:"40%"}
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                      }}
                    >                        
                        {t("LastName")}
                        </Typography>
                    <TextField type={"text"} placeholder={"Enter LastName"}  fullWidth   onChange={(e) => dispatch(addLastName(e.target.value))}  />
                  </Box>
                </Box>

              </Box>

              {/* tour Details */}
              <Box className="TourDetails"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography
                sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                }}
                >
                  {t("Tour Details")}
                </Typography>
                <Typography sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}>
                  {t("Special Requirements")}
                </Typography>
                <textarea rows={4} cols={40}  onChange={(e) => dispatch(specialRequirements(e.target.value))} />
              </Box>
            </Box>

            <Divider />
            </Box>

            <Box className="2ndLeftpart"
             sx={{
                border: "2px solid #edebeb",
                padding:{xs:"0%",md:"2%"}
            }}
            >

                {/* payment methods */}

            <Box className="paymentDetails"
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                alignItems:"flex-start",
                justifyContent:"center"
            }}
            >
                <Typography
                sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                }}
                >
                  {t("Payment Details")}
                </Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                {t("Pay securely")}—{t("we use SSL encryption to keep your data safe")}
              </Typography>
              <Box className="radios&creditCardIcons"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                columnGap:1
              }}
              >
                <input type={"radio"} checked/>
                <Typography>
                  {t("Creadit Card")}
                </Typography>
                <RiVisaLine style={{ color: "blue" }} />
                <SiAmericanexpress style={{ color: "blue" }} />
                <SiMastercard style={{ color: "red" }} />
              </Box>
              <Box className="cardHolderName" sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
                <Typography>
                  {t("Cardholder Name")}
                </Typography>
                <TextField type={"text"}  placeholder="Enter CardHolder Name"   fullWidth   onChange={(e) => dispatch(CardholderName(e.target.value))}  />
              </Box>
              <Box className="creditCradNumber" sx={{
                width:"100%",
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}>
                <Typography>
                  {t("Credit Card Number")}
                </Typography>
                <TextField  fullWidth 
                placeholder="Enter Card Number"
                  onChange={(e) => dispatch(CreditCardNumber(e.target.value))}  
                inputProps={{ maxLength: 16, className:'digitsOnly' }}
                />
              </Box>
              <Box className="expirayDate&SecurityCode"
              sx={{
                display:"flex",
                flexDirection:"row",
                justifyContent:{xs:"flex-start",md:"space-around"},
                alignItems:"flex-end",
                width:{xs:"100%",md:"100%"},
                flexWrap:{xs:"wrap",md:"nowrap"},
                rowGap:2
              }}
              >
                <Box className="expirayMonth"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}>
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >
                    {t("Expiration Month")}
                  </Typography>
                <TextField
                    id="outlined-select-currency"
                    select
                    value={cardEexpiryMonth}
                    onChange={handleExpiryMonth}
                  >
                    {Months.map((option,index) => (
                      <MenuItem key={index} value={option.name}  >
                         {option.name}
                      </MenuItem>
                    ))}
                  </TextField>


                </Box>
                <Box className="expirayYear"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                    }}
                    >
                      {t("Expiray year")}
                    </Typography>
                  <TextField type={"year"}  onChange={(e) => dispatch(Expirayyear(e.target.value))}     />
                </Box>
                <Box className="securityCode"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >
                    {t("Security Code")}
                  </Typography>
                  <TextField type={"text"} placeholder="3 or 4 digit code usually found near the signature strip."  onChange={(e) => dispatch(SecurityCode(e.target.value))}  
                  inputProps={{ maxLength: 3 }}
                  />
                </Box>
                </Box>


                <Box  className="country&checkBox"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start",
                    justifyContent:"flex-start"
                }}
                >
                <Box className="country" 
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography 
                  sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                  }}
                  >
                    {t("Country")}
                  </Typography>
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={countryState}
                    onChange={handleCountryChange}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.name+ ","+option.code} value={option.name}  >
                         {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>
                {/* <Box className="saveCreditCardDetails" 
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:1,
                    alignItems:"center",
                }}
                >
                  <input type={"checkbox"}  onChange={(e) => dispatch(SaveCreditCard(e.target.checked))}  />
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >Save my credit card for future use</Typography>
                </Box> */}
              </Box>
            </Box>

            </Box>

            <Box className="3rdLeftPart"
             sx={{
                border: "2px solid #edebeb",
                padding:{xs:"0%",md:"2%"}
            }}
            >
            <Box className="contactInformation"
            sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1,
            }}
            >
              <Typography 
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >
                {t("Contact Information")}
              </Typography>
              <Typography  
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >
                {t("We’ll contact you with key updates on your tour or activity")}
              </Typography>

              <Box className="Email&PhoneNumber"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-between",
                flexWrap:{xs:"wrap",md:"nowrap"},
                rowGap:2
              }}
              >

              {/*email box  */}
                <Box className="Email"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start"
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >
                    {t("Email Address")}
                  </Typography>
                  <TextField type={"text"} placeholder="Enter Email Id"  onChange={(e) => dispatch(EmailAddress(e.target.value))}   />
                </Box>

                {/* phone Number Box */}
                <Box className="phoneNumber"  
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1,
                    alignItems:"flex-start",
                    justifyContent:"flex-start"
                }}
                >
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"}
                  }}
                  >
                    {t("PhoneNumber")}
                  </Typography>
                  <Box className="phoneNumberBox"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    columnGap:1,
                    alignItems:"center",
                    justifyContent:"flex-start"
                  }}
                  >
                  <TextField
                    id="outlined-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                  >
                    {countries.map((option) => (
                      <MenuItem key={option.name+ ","+option.code} value={option.name+ ","+option.code}  >
                        {option.code} {option.name}
                      </MenuItem>
                    ))}
                  </TextField>
                  <TextField type={"text"} placeholder="Enter Phone Number"  onChange={(e) => dispatch(PhoneNumber(e.target.value))}  />
                  </Box>
                </Box>
              </Box>
              <Typography>
                {t("The tour operator will call this number if they need to reach you.")}
              </Typography>
            </Box>
          
          </Box>
          <Button variant="contained" color="success"
         onClick={submitHandler}
          >
                        {t("Book Now")}
           </Button>
          </Box>
        



                        {/* right part */}
          <Box className="rightPart"
          sx={{
            border:"2px solid #edf0ee",
            width:{xs:"100%",md:"30%"},
            height:"fit-content",
            display:{xs:"none",md:"flex"},
            flexDirection:"column",
            rowGap:4,
            padding:{xs:"0%",md:"1%"},
            position:"sticky",
            top:"0px"
          }}
          >

            {/* first right half */}
            <Box className="1stHalf"
            sx={{
                border:"1px solid #ebf0ec",
                padding:{xs:"0%",md:"3% 4% 5% 4%"},
                display:"flex",
                flexDirection:"column",
                rowGap:3,
                borderRadius:"10px",
                backgroundColor:"#f2f5f3"
            }}
            >
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >
                {t("Review Order Details")}
              </Typography>
              {/* ticket details */}
              <Box className="tiicketDetails"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                }}
                >{singleTourDetails.name}</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{!booking_dateDetails.BookDate ? todayDate : date }</Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >
                   {/* {singleTourDetails.city == "Turkey" && localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(150,120) : item.city == "Turkey" && localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(154,110) : localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(75,125) : singleTourDetails.description.substr(78,125)} */}
                   {singleTourDetails.city == null ? "No Description" : singleTourDetails.city == "Turkey" && localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(150,120) : item.city == "Turkey" && localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(154,110) : localStorage.getItem("lang") == "EN" ? singleTourDetails.description.substr(75,125) :  localStorage.getItem("lang") == "TR" ? singleTourDetails.description.substr(78,125) : null}
                </Typography>
                <Typography 
                sx={{
                    fontSize:{xs:"14px",md:"16px"}
                }}
                >{memberPresentState.adult} {t("Adult")}, {memberPresentState.child} {t("child")}</Typography>
              </Box>

              {/* nonrefundable */}
              <Box className="nonRefundable"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                columnGap:1,

              }}
              >
                <RiRefund2Line />
                <Typography
                sx={{
                    fontSize:{xs:"14px",md:";16px"}
                }}
                >
                  {t("Non-refundable")}
                </Typography>
              </Box>

              {/* total amount and promo code details */}
              <Box className="totalAmount&PromoCode"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2
              }}
              >

                {/* amount details */}
                <Box className="amount"
                sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"
                  }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"16px",md:"20px"},
                    fontWeight:"bold"
                  }}
                  >
                    {t("Total")}
                  </Typography>
                  <Box className="amountWithSymbol"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    columnGap:1
                  }}
                  >
                   <Typography>{travellerData.currencyCode}</Typography>
                   <Typography
                         sx={{
                          display:travellerData.currencyCode == "GBP" ? "flex" : "none"
                         }}
                         >{(memberPresentState.adult*singleTourDetails.price)+(memberPresentState.child*singleTourDetails.price)}</Typography>
                         <Typography
                         sx={{
                          display:travellerData.currencyCode != "GBP" ? "flex":"none"
                         }}
                         >
                        {Math.ceil(memberPresentState.adult*(singleTourDetails.price*travellerData.currencyValue)+memberPresentState.child*(singleTourDetails.price*travellerData.currencyValue))}
                         </Typography>
                  </Box>
                  </Box>

                  {/* promo code text */}
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    color:"green",
                    textDecoration:"underLine",
                    "&:hover":{
                        cursor:"pointer",
                        color:"black"
                    }
                  }}
                  onClick={()=>setShowPromoCode(true)}
                  >
                    {t("Enter Promo Code")}
                  </Typography>

                {/* promo code box */}
                  <Box className="promoCode"
                  sx={{
                    display:showPromoCode ? "flex" : "none",
                    flexDirection:"column",
                    rowGap:1
                  }}
                  >
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"},
                    }}
                    >Promo Code</Typography>
                    <Box className="promoCodebox"
                    sx={{
                        display:"flex",
                        flexDirection:"row",
                        alignItems:"center",
                        justifyContent:"space-between"
                    }}
                    >
                      <TextField type={"text"} placeholder="Add Promo Code"  onChange={(e) => dispatch(PromoCode(e.target.value))}  sx={{backgroundColor:"white"}}/>
                      <Button variant="contained" color="success">
                        Apply
                      </Button>
                    </Box>
                  
                </Box>
              </Box>

              {/* book button */}
              <Button variant="contained" color="success"
              onClick={submitHandler}
              >
                {t("Book Now")}
              </Button>
            </Box>

            {/* second right half */}
            <Box className="2ndHalf"
            sx={{
                padding:{xs:"0%",md:"3% 4% 5% 4%"},
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                alignItems:"flex-start",
            }}
            >
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >
                {t("Book with Confidence")}
              </Typography>

              <Divider />

              <Box className="price,Support&Security"
              sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
              }}
              >
                <Box className="lowestPrice"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >
                    {t("Lowest Price Guarantee")}
                  </Typography>
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"},
                  }}
                  >
                    {t("Find it cheaper? We'll refund the difference")}
                  </Typography>
                </Box>
                <Box className="support"
                 sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >
                    {t("24/7 Global Support")}
                  </Typography>
                  <Typography
                   sx={{
                    fontSize:{xs:"14px",md:"16px"},
                  }}
                  >
                    {t("Get the answers you need, when you need them")}
                  </Typography>
                </Box>
                <Box className="security"
                sx={{
                    display:"flex",
                    flexDirection:"column",
                    rowGap:1
                }}
                >
                  <Typography
                  sx={{
                    fontSize:{xs:"14px",md:"16px"},
                    fontWeight:"bold"
                  }}
                  >
                    {t("Book Securely")}
                  </Typography>
                  <Box className="securityDetails&LockIcon"
                  sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"flex-start",
                    columnGap:1
                }}
                  >
                    <LockOpenIcon />
                    <Typography
                    sx={{
                        fontSize:{xs:"14px",md:"16px"}
                    }}
                    >
                      {t("We use SSL encryption to keep your data secure")}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        </Box>
        <Footer />
        <Snackbar open={SnakBarOpen} autoHideDuration={4000} onClose={handleSnakBarClose}>
        <Alert onClose={handleSnakBarClose} severity={alertMessageColor} sx={{ width: '150%' }}>
        {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CheckOutPage;
