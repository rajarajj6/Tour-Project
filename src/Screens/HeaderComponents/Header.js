import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import {
  Box,
  Button,
  Menu,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import ArtCulture from "../../ModalComponents/ArtCulture";
// import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DashboardIcon from "@mui/icons-material/Dashboard";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import { useDispatch, useSelector } from "react-redux";
import { currencyCodeAction, currencyConversionAction, currentUserAction, filterProductByCityAction, webSiteLanguageAction } from "../../redux/action";
import {currentUserReducer, countryListReducer,travelDetails, filterProductByCityReducer} from "../../redux/reducer/reducer"
import axios from "axios";
import { render } from "react-dom";
import WebSiteLogo from "../../assets/images/websiteLogo.png"
import WebSiteLogo1 from "../../assets/images/websiteLog1.jpeg"
import WebSiteLogo2 from "../../assets/images/wesiteLogo2.jpeg"
import WebSiteLogo3 from "../../assets/images/webSitelogo3.jpeg"
import WebSiteLogo4 from "../../assets/images/webSiteLogo4.jpeg"
import { height } from "@mui/system";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

const Base_url = process.env.REACT_APP_Axios_Base_urls

// const country_currency = [
//   {
//       "country": "Afghanistan",
//       "currency_code": "AFN"
//   },
//   {
//       "country": "Albania",
//       "currency_code": "ALL"
//   },
//   {
//       "country": "Algeria",
//       "currency_code": "DZD"
//   },
//   {
//       "country": "American Samoa",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Andorra",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Angola",
//       "currency_code": "AOA"
//   },
//   {
//       "country": "Anguilla",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Antarctica",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Antigua and Barbuda",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Argentina",
//       "currency_code": "ARS"
//   },
//   {
//       "country": "Armenia",
//       "currency_code": "AMD"
//   },
//   {
//       "country": "Aruba",
//       "currency_code": "AWG"
//   },
//   {
//       "country": "Australia",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Austria",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Azerbaijan",
//       "currency_code": "AZN"
//   },
//   {
//       "country": "Bahamas",
//       "currency_code": "BSD"
//   },
//   {
//       "country": "Bahrain",
//       "currency_code": "BHD"
//   },
//   {
//       "country": "Bangladesh",
//       "currency_code": "BDT"
//   },
//   {
//       "country": "Barbados",
//       "currency_code": "BBD"
//   },
//   {
//       "country": "Belarus",
//       "currency_code": "BYR"
//   },
//   {
//       "country": "Belgium",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Belize",
//       "currency_code": "BZD"
//   },
//   {
//       "country": "Benin",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Bermuda",
//       "currency_code": "BMD"
//   },
//   {
//       "country": "Bhutan",
//       "currency_code": "BTN"
//   },
//   {
//       "country": "Bolivia",
//       "currency_code": "BOB"
//   },
//   {
//       "country": "Bosnia and Herzegovina",
//       "currency_code": "BAM"
//   },
//   {
//       "country": "Botswana",
//       "currency_code": "BWP"
//   },
//   {
//       "country": "Bouvet Island",
//       "currency_code": "NOK"
//   },
//   {
//       "country": "Brazil",
//       "currency_code": "BRL"
//   },
//   {
//       "country": "British Indian Ocean Territory",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Brunei",
//       "currency_code": "BND"
//   },
//   {
//       "country": "Bulgaria",
//       "currency_code": "BGN"
//   },
//   {
//       "country": "Burkina Faso",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Burundi",
//       "currency_code": "BIF"
//   },
//   {
//       "country": "Cambodia",
//       "currency_code": "KHR"
//   },
//   {
//       "country": "Cameroon",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Canada",
//       "currency_code": "CAD"
//   },
//   {
//       "country": "Cape Verde",
//       "currency_code": "CVE"
//   },
//   {
//       "country": "Cayman Islands",
//       "currency_code": "KYD"
//   },
//   {
//       "country": "Central African Republic",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Chad",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Chile",
//       "currency_code": "CLP"
//   },
//   {
//       "country": "China",
//       "currency_code": "CNY"
//   },
//   {
//       "country": "Christmas Island",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Cocos (Keeling) Islands",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Colombia",
//       "currency_code": "COP"
//   },
//   {
//       "country": "Comoros",
//       "currency_code": "KMF"
//   },
//   {
//       "country": "Congo",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Cook Islands",
//       "currency_code": "NZD"
//   },
//   {
//       "country": "Costa Rica",
//       "currency_code": "CRC"
//   },
//   {
//       "country": "Croatia",
//       "currency_code": "HRK"
//   },
//   {
//       "country": "Cuba",
//       "currency_code": "CUP"
//   },
//   {
//       "country": "Cyprus",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Czech Republic",
//       "currency_code": "CZK"
//   },
//   {
//       "country": "Denmark",
//       "currency_code": "DKK"
//   },
//   {
//       "country": "Djibouti",
//       "currency_code": "DJF"
//   },
//   {
//       "country": "Dominica",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Dominican Republic",
//       "currency_code": "DOP"
//   },
//   {
//       "country": "East Timor",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Ecuador",
//       "currency_code": "ECS"
//   },
//   {
//       "country": "Egypt",
//       "currency_code": "EGP"
//   },
//   {
//       "country": "El Salvador",
//       "currency_code": "SVC"
//   },
//   {
//       "country": "England",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "Equatorial Guinea",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Eritrea",
//       "currency_code": "ERN"
//   },
//   {
//       "country": "Estonia",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Ethiopia",
//       "currency_code": "ETB"
//   },
//   {
//       "country": "Falkland Islands",
//       "currency_code": "FKP"
//   },
//   {
//       "country": "Faroe Islands",
//       "currency_code": "DKK"
//   },
//   {
//       "country": "Fiji Islands",
//       "currency_code": "FJD"
//   },
//   {
//       "country": "Finland",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "France",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "French Guiana",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "French Polynesia",
//       "currency_code": "XPF"
//   },
//   {
//       "country": "French Southern territories",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Gabon",
//       "currency_code": "XAF"
//   },
//   {
//       "country": "Gambia",
//       "currency_code": "GMD"
//   },
//   {
//       "country": "Georgia",
//       "currency_code": "GEL"
//   },
//   {
//       "country": "Germany",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Ghana",
//       "currency_code": "GHS"
//   },
//   {
//       "country": "Gibraltar",
//       "currency_code": "GIP"
//   },
//   {
//       "country": "Greece",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Greenland",
//       "currency_code": "DKK"
//   },
//   {
//       "country": "Grenada",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Guadeloupe",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Guam",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Guatemala",
//       "currency_code": "QTQ"
//   },
//   {
//       "country": "Guinea",
//       "currency_code": "GNF"
//   },
//   {
//       "country": "Guinea-Bissau",
//       "currency_code": "CFA"
//   },
//   {
//       "country": "Guyana",
//       "currency_code": "GYD"
//   },
//   {
//       "country": "Haiti",
//       "currency_code": "HTG"
//   },
//   {
//       "country": "Heard Island and McDonald Islands",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Holy See (Vatican City State)",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Honduras",
//       "currency_code": "HNL"
//   },
//   {
//       "country": "Hong Kong",
//       "currency_code": "HKD"
//   },
//   {
//       "country": "Hungary",
//       "currency_code": "HUF"
//   },
//   {
//       "country": "Iceland",
//       "currency_code": "ISK"
//   },
//   {
//       "country": "India",
//       "currency_code": "INR"
//   },
//   {
//       "country": "Indonesia",
//       "currency_code": "IDR"
//   },
//   {
//       "country": "Iran",
//       "currency_code": "IRR"
//   },
//   {
//       "country": "Iraq",
//       "currency_code": "IQD"
//   },
//   {
//       "country": "Ireland",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Israel",
//       "currency_code": "ILS"
//   },
//   {
//       "country": "Italy",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Ivory Coast",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Jamaica",
//       "currency_code": "JMD"
//   },
//   {
//       "country": "Japan",
//       "currency_code": "JPY"
//   },
//   {
//       "country": "Jordan",
//       "currency_code": "JOD"
//   },
//   {
//       "country": "Kazakhstan",
//       "currency_code": "KZT"
//   },
//   {
//       "country": "Kenya",
//       "currency_code": "KES"
//   },
//   {
//       "country": "Kiribati",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Kuwait",
//       "currency_code": "KWD"
//   },
//   {
//       "country": "Kyrgyzstan",
//       "currency_code": "KGS"
//   },
//   {
//       "country": "Laos",
//       "currency_code": "LAK"
//   },
//   {
//       "country": "Latvia",
//       "currency_code": "LVL"
//   },
//   {
//       "country": "Lebanon",
//       "currency_code": "LBP"
//   },
//   {
//       "country": "Lesotho",
//       "currency_code": "LSL"
//   },
//   {
//       "country": "Liberia",
//       "currency_code": "LRD"
//   },
//   {
//       "country": "Libyan Arab Jamahiriya",
//       "currency_code": "LYD"
//   },
//   {
//       "country": "Liechtenstein",
//       "currency_code": "CHF"
//   },
//   {
//       "country": "Lithuania",
//       "currency_code": "LTL"
//   },
//   {
//       "country": "Luxembourg",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Macao",
//       "currency_code": "MOP"
//   },
//   {
//       "country": "North Macedonia",
//       "currency_code": "MKD"
//   },
//   {
//       "country": "Madagascar",
//       "currency_code": "MGF"
//   },
//   {
//       "country": "Malawi",
//       "currency_code": "MWK"
//   },
//   {
//       "country": "Malaysia",
//       "currency_code": "MYR"
//   },
//   {
//       "country": "Maldives",
//       "currency_code": "MVR"
//   },
//   {
//       "country": "Mali",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Malta",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Marshall Islands",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Martinique",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Mauritania",
//       "currency_code": "MRO"
//   },
//   {
//       "country": "Mauritius",
//       "currency_code": "MUR"
//   },
//   {
//       "country": "Mayotte",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Mexico",
//       "currency_code": "MXN"
//   },
//   {
//       "country": "Micronesia, Federated States of",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Moldova",
//       "currency_code": "MDL"
//   },
//   {
//       "country": "Monaco",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Mongolia",
//       "currency_code": "MNT"
//   },
//   {
//       "country": "Montserrat",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Morocco",
//       "currency_code": "MAD"
//   },
//   {
//       "country": "Mozambique",
//       "currency_code": "MZN"
//   },
//   {
//       "country": "Myanmar",
//       "currency_code": "MMR"
//   },
//   {
//       "country": "Namibia",
//       "currency_code": "NAD"
//   },
//   {
//       "country": "Nauru",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Nepal",
//       "currency_code": "NPR"
//   },
//   {
//       "country": "Netherlands",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Netherlands Antilles",
//       "currency_code": "ANG"
//   },
//   {
//       "country": "New Caledonia",
//       "currency_code": "XPF"
//   },
//   {
//       "country": "New Zealand",
//       "currency_code": "NZD"
//   },
//   {
//       "country": "Nicaragua",
//       "currency_code": "NIO"
//   },
//   {
//       "country": "Niger",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Nigeria",
//       "currency_code": "NGN"
//   },
//   {
//       "country": "Niue",
//       "currency_code": "NZD"
//   },
//   {
//       "country": "Norfolk Island",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "North Korea",
//       "currency_code": "KPW"
//   },
//   {
//       "country": "Northern Ireland",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "Northern Mariana Islands",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Norway",
//       "currency_code": "NOK"
//   },
//   {
//       "country": "Oman",
//       "currency_code": "OMR"
//   },
//   {
//       "country": "Pakistan",
//       "currency_code": "PKR"
//   },
//   {
//       "country": "Palau",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Palestine",
//       "currency_code": null
//   },
//   {
//       "country": "Panama",
//       "currency_code": "PAB"
//   },
//   {
//       "country": "Papua New Guinea",
//       "currency_code": "PGK"
//   },
//   {
//       "country": "Paraguay",
//       "currency_code": "PYG"
//   },
//   {
//       "country": "Peru",
//       "currency_code": "PEN"
//   },
//   {
//       "country": "Philippines",
//       "currency_code": "PHP"
//   },
//   {
//       "country": "Pitcairn",
//       "currency_code": "NZD"
//   },
//   {
//       "country": "Poland",
//       "currency_code": "PLN"
//   },
//   {
//       "country": "Portugal",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Puerto Rico",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Qatar",
//       "currency_code": "QAR"
//   },
//   {
//       "country": "Reunion",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Romania",
//       "currency_code": "RON"
//   },
//   {
//       "country": "Russian Federation",
//       "currency_code": "RUB"
//   },
//   {
//       "country": "Rwanda",
//       "currency_code": "RWF"
//   },
//   {
//       "country": "Saint Helena",
//       "currency_code": "SHP"
//   },
//   {
//       "country": "Saint Kitts and Nevis",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Saint Lucia",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Saint Pierre and Miquelon",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Saint Vincent and the Grenadines",
//       "currency_code": "XCD"
//   },
//   {
//       "country": "Samoa",
//       "currency_code": "WST"
//   },
//   {
//       "country": "San Marino",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Sao Tome and Principe",
//       "currency_code": "STD"
//   },
//   {
//       "country": "Saudi Arabia",
//       "currency_code": "SAR"
//   },
//   {
//       "country": "Scotland",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "Senegal",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Serbia",
//       "currency_code": "RSD"
//   },
//   {
//       "country": "Seychelles",
//       "currency_code": "SCR"
//   },
//   {
//       "country": "Sierra Leone",
//       "currency_code": "SLL"
//   },
//   {
//       "country": "Singapore",
//       "currency_code": "SGD"
//   },
//   {
//       "country": "Slovakia",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Slovenia",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Solomon Islands",
//       "currency_code": "SBD"
//   },
//   {
//       "country": "Somalia",
//       "currency_code": "SOS"
//   },
//   {
//       "country": "South Africa",
//       "currency_code": "ZAR"
//   },
//   {
//       "country": "South Georgia and the South Sandwich Islands",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "South Korea",
//       "currency_code": "KRW"
//   },
//   {
//       "country": "South Sudan",
//       "currency_code": "SSP"
//   },
//   {
//       "country": "Spain",
//       "currency_code": "EUR"
//   },
//   {
//       "country": "Sri Lanka",
//       "currency_code": "LKR"
//   },
//   {
//       "country": "Sudan",
//       "currency_code": "SDG"
//   },
//   {
//       "country": "Suriname",
//       "currency_code": "SRD"
//   },
//   {
//       "country": "Svalbard and Jan Mayen",
//       "currency_code": "NOK"
//   },
//   {
//       "country": "Swaziland",
//       "currency_code": "SZL"
//   },
//   {
//       "country": "Sweden",
//       "currency_code": "SEK"
//   },
//   {
//       "country": "Switzerland",
//       "currency_code": "CHF"
//   },
//   {
//       "country": "Syria",
//       "currency_code": "SYP"
//   },
//   {
//       "country": "Tajikistan",
//       "currency_code": "TJS"
//   },
//   {
//       "country": "Tanzania",
//       "currency_code": "TZS"
//   },
//   {
//       "country": "Thailand",
//       "currency_code": "THB"
//   },
//   {
//       "country": "The Democratic Republic of Congo",
//       "currency_code": "CDF"
//   },
//   {
//       "country": "Togo",
//       "currency_code": "XOF"
//   },
//   {
//       "country": "Tokelau",
//       "currency_code": "NZD"
//   },
//   {
//       "country": "Tonga",
//       "currency_code": "TOP"
//   },
//   {
//       "country": "Trinidad and Tobago",
//       "currency_code": "TTD"
//   },
//   {
//       "country": "Tunisia",
//       "currency_code": "TND"
//   },
//   {
//       "country": "Turkey",
//       "currency_code": "TRY"
//   },
//   {
//       "country": "Turkmenistan",
//       "currency_code": "TMT"
//   },
//   {
//       "country": "Turks and Caicos Islands",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Tuvalu",
//       "currency_code": "AUD"
//   },
//   {
//       "country": "Uganda",
//       "currency_code": "UGX"
//   },
//   {
//       "country": "Ukraine",
//       "currency_code": "UAH"
//   },
//   {
//       "country": "United Arab Emirates",
//       "currency_code": "AED"
//   },
//   {
//       "country": "United Kingdom",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "United States",
//       "currency_code": "USD"
//   },
//   {
//       "country": "United States Minor Outlying Islands",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Uruguay",
//       "currency_code": "UYU"
//   },
//   {
//       "country": "Uzbekistan",
//       "currency_code": "UZS"
//   },
//   {
//       "country": "Vanuatu",
//       "currency_code": "VUV"
//   },
//   {
//       "country": "Venezuela",
//       "currency_code": "VEF"
//   },
//   {
//       "country": "Vietnam",
//       "currency_code": "VND"
//   },
//   {
//       "country": "Virgin Islands, British",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Virgin Islands, U.S.",
//       "currency_code": "USD"
//   },
//   {
//       "country": "Wales",
//       "currency_code": "GBP"
//   },
//   {
//       "country": "Wallis and Futuna",
//       "currency_code": "XPF"
//   },
//   {
//       "country": "Western Sahara",
//       "currency_code": "MAD"
//   },
//   {
//       "country": "Yemen",
//       "currency_code": "YER"
//   },
//   {
//       "country": "Zambia",
//       "currency_code": "ZMW"
//   },
//   {
//       "country": "Zimbabwe",
//       "currency_code": "ZWD"
//   }
// ]

const country_currency = [
  {
    "currency_code": "EUR"
},
  {
    "currency_code": "GBP"
},
{
  "currency_code": "TRY"
},
]



const websiteLanguage =  [
  {
    "language": "en"
},
  {
    "language": "tr"
},
]



const Header = ({setlogoutRender,logoutRender}) => {




  const [ t] = useTranslation()
  const [showUserProfile, setShowUserProfile] = useState(localStorage.getItem("accessToken") != null ? true : false)
  const travellerData = useSelector((state) => state.travelDetails)
  const location = useLocation()
  // location.pathname
  const myState = useSelector((state) => state.currentUserReducer);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [countryCurrencyState, setCountryCurrencyState] = useState(travellerData.currencyCode)
  const [websiteLangState, setWebsteLangState] = useState(travellerData.webSiteLanguage)
  const selectedCity = useSelector((state) => state.filterProductByCityReducer) 


  const contryChangeHandler = async (e) => {
    const present = countryCurrencyState
    dispatch(currencyCodeAction(e.target.value))
    setCountryCurrencyState(e.target.value)

    let options = {
      url:`${Base_url}/get-currency-exchange`,
      method:"POST",
      headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      },
      // data:{
      //   "originalCurr":present,
      //   "targetCurr":e.target.value,
      //   "amount": 1
      // }
      data:{
        "originalCurr":"GBP",
        "targetCurr":e.target.value,
        "amount": 1
      }

    }

    try{
      let {data} = await axios(options)
      dispatch(currencyConversionAction(data.amount.toFixed(2)))
    }catch(error){
      console.log(error)
    }

  } 



  const changeWebsiteLanguage = (e) => {
      localStorage.setItem("lang",e.target.value)
      dispatch(webSiteLanguageAction(e.target.value))
      i18next.changeLanguage(e.target.value.toLowerCase())
      dispatch(filterProductByCityAction(""))
      if(location.pathname == "/"){
        setlogoutRender(!logoutRender)
      }else if(location.pathname == "/dashBoard"){
        setlogoutRender(!logoutRender)
      }
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [NearBystate, setNearBYState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Recommendationstate, setRecommendationState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [AttractionsState, setAttractionsState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [UniqueExperienceState, setUniqueExperienceState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [TravelTransportState, setTravelTransportState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [TourSightSeeingState, setTourSightSeeingState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Ticket_PassesState, setTicket_PassesState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Seasonal_OccasionState, setSeasonal_OccasionState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [OutDoorActivitiesState, setOutDoorActivitiesState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [FoodDrinkState, setFoodDrinkState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Classes_WorkshopState, setClasses_WorkshopState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [ArtCultureState, setArtCultureState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [FirstArtState, setFirstArtState] = useState("");
  const [FirstClass_workshopState, setFirstClass_workshopState] = useState("");
  const [FirstFood_DrinkState, setFirstFood_DrinkState] = useState("");
  const [FirstOutDoorActivitesState, setFirstOutDoorActivitesState] =
    useState("");
  const [FirstSeasonl_SpecialState, setFirstSeasonl_SpecialState] =
    useState("");
  const [FirstTickets_PassesState, setFirstTickets_PassesState] = useState("");
  const [FirstTour_sightseeingState, setFirstTour_sightseeingState] =
    useState("");
  const [FirstTravel_TransportState, setFirstTravel_TransportState] =
    useState("");


    const [showSmallScreenSearch, setShowSmallScreenSearch] = useState(false)

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElState, setAnchorElState] = React.useState(null);
  const open = Boolean(anchorEl);
  const UserProfileOpen = Boolean(anchorElState);
  
  const [searchInputValue, setSearchInputValue] = useState("")

  const countyList = useSelector((state) => state.countryListReducer)
	const [isFocus, setIsFocus] = useState(false);
	const [isHovered, setIsHovered] = useState(false);
	const inputRef = useRef();
  const [placesName, setPlacesName] = useState(countyList)
  const [showMenuOptions, setShowMenuOptions] = useState(false)


  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const handleUserProfileClick = (event) => {
    setAnchorElState(event.currentTarget);
  };
  const handleUserProfileClose = () => {
    setAnchorElState(null);
  };

  
  const headerSearchHandler = (e) => {
    setSearchInputValue(e.target.value)
    let word = e.target.value
    let filterPlace = countyList.filter(item => item.toLowerCase().startsWith(word) )
    setPlacesName(filterPlace)
  }




  // main toogle drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //  nearby toggle drawer
  const NearbyToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setNearBYState({ ...NearBystate, [anchor]: open });
  };

  // recommendation toggle drawer
  const RecommendationToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setRecommendationState({ ...Recommendationstate, [anchor]: open });
  };

  // attractions
  const AttractionsToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAttractionsState({ ...AttractionsState, [anchor]: open });
  };

  // unique Experience
  const UniqueExperienceToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setUniqueExperienceState({ ...UniqueExperienceState, [anchor]: open });
  };

  // Travel , Transportation And service
  const Travel_TransportationToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTravelTransportState({ ...TravelTransportState, [anchor]: open });
  };

  // tour, sighitseeing and cruises
  const Tour_SightSeeingToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTourSightSeeingState({ ...TourSightSeeingState, [anchor]: open });
  };

  // Ticket And Passes
  const Ticket_PassesToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTicket_PassesState({ ...Ticket_PassesState, [anchor]: open });
  };

  // seasonal nad special occasions
  const Seasonal_special_occasionsToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSeasonal_OccasionState({ ...Seasonal_OccasionState, [anchor]: open });
  };

  // outDoor Activites
  const OutDoor_ActivitesToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOutDoorActivitiesState({ ...OutDoorActivitiesState, [anchor]: open });
  };

  // Food NAd Drink
  const Food_DrinkToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setFoodDrinkState({ ...FoodDrinkState, [anchor]: open });
  };

  // classes and workshops
  const Classes_WorkshopToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setClasses_WorkshopState({ ...Classes_WorkshopState, [anchor]: open });
  };

  // art and culture
  const Art_CultureToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setArtCultureState({ ...ArtCultureState, [anchor]: open });
  };

  //  main toggle Drawer
  const list = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "380px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 5,
        zIndex: 1000000000000,
        padding:"5% 0% 0% 0%"
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* title */}
      <Box
        className="title"
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          paddingLeft:"10%"
        }}
      >
        <CloseIcon
          sx={{ fontSize: { xs: "25px", md: "30px" } }}
          onClick={toggleDrawer(anchor, false)}
        />
        <Typography sx={{ fontSize: { xs: "20px", md: "22px" } }}>
          MekoTourizm
        </Typography>
      </Box>

      {/* registeration signup or login */}
      <Box
        className="registeration"
        sx={{
          display: localStorage.getItem("accessToken") == null ? "flex" : "none",
          flexDirection: "column",
          rowGap: 6,
          paddingLeft: "10%",
        }}
      >
        <Typography
          onClick={() => navigate("/login")}
          sx={{
            "&:hover": { cursor: "pointer",textDecoration:"underLine" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("Login")}
        </Typography>
        <Typography
          onClick={() => navigate("/signup")}
          sx={{
            "&:hover": { cursor: "pointer",textDecoration:"underLine" },
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("SignUp")}
        </Typography>
      </Box>

      <Divider />

      {/* basic pages like home booking etc */}
      <Box
        className="basic Pages"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 5,
          paddingLeft: "10%",
        }}
      >
        <Box
          className="Home"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex" : "none",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/")}
        >
          <HomeIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            {t("Home")}
          </Typography>
        </Box>
        <Box
          className="Profile"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex" : "none",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/userProfile")}
        >
          <AccountCircleIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            {t("Profile")}
          </Typography>
        </Box>
        {/* <Box
          className="WishList"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex" : "none",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/wishList")}
        >
          <FavoriteBorderIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            WishList
          </Typography>
        </Box> */}
        <Box
          className="dashBoard"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex" : "none",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/dashBoard")}
        >
          <DashboardIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            {t("DashBoard")}
          </Typography>
        </Box>
        <Box
          className="Booking"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex" : "none",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/bookingPage")}
        >
          <BookOnlineIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            {t("Bookings")}
          </Typography>
        </Box>
        <Box
          className="Help"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          // onClick={() => navigate("/helpPage")}
        >
          <HelpOutlineIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover":{cursor:"pointer",textDecoration:"underLine"}
            }}
          >
            {t("Help")}
          </Typography>
        </Box>
        {/* <Box
          className="En"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <SportsScoreIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
            }}
          >
            En
          </Typography>
        </Box> */}
        {/* <Box
          className="INR"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <CurrencyRupeeIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
            s
          />
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
            }}
            s
          >
            INR
          </Typography>
        </Box> */}
      </Box>

      <Divider />

      {/* Explore London */}
      <Box
        className="Explore London"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 5,
          paddingLeft: "10%",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
          }}
        >
          {t("Explore")}
        </Typography>
        {/* <Typography>London Tours</Typography> */}
        <Box
          className="All London Tours"
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          {/* <Typography variant="h6"
          onClick={()=>navigate("/")}
          sx={{
            "&:hover":{
              cursor:"pointer"
            }
          }}
          >
            All London Tours
          </Typography> */}

          {/* arts and Culture */}
          {/* <Box className="Art & Culture">
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
          </Box> */}

          {/* Audio Guides */}
          {/* <Box className="Audio Guides">
            <Typography>Audio Guides</Typography>
          </Box> */}

          {/* Classes & Workshops */}
          {/* <Box className="Classes & Workshops">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Classes_WorkshopToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Classes & Workshops
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Food & Drink */}
          {/* <Box className="Food & Drink">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Food_DrinkToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Food & Drink
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Kid Friendly */}
          {/* <Box className="Kid Friendly">
            <Typography>Kid Friendly</Typography>
          </Box> */}

          {/* Likely To Sell Out */}
          {/* <Box className="Likely To Sell Out">
            <Typography>Likely To Sell Out</Typography>
          </Box> */}

          {/* Outdoor Activities */}
          {/* <Box className="Outdoor Activities ">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={OutDoor_ActivitesToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Outdoor Activities
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Seasonal & Special Occasions */}
          {/* <Box className="Seasonal & Special Occasions">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Seasonal_special_occasionsToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Seasonal & Special Occasions
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Tickets & Passes */}
          {/* <Box className="Tickets & Passes">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
                onClick={Ticket_PassesToggleDrawer("left", true)}
              >
                Tickets & Passes
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Tours, Sightseeing & Cruises */}
          <Box className="Tours, Sightseeing & Cruises">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                  fontSize: { xs: "14px", md: "16px" },
                }}
                // onClick={Tour_SightSeeingToggleDrawer("left", true)}
                onClick={()=>{
                  if(location.pathname == "/dashBoard"){
                    dispatch(filterProductByCityAction(""))
                    navigate("/dashBoard")
                    setlogoutRender(!logoutRender)
                  }else{
                    dispatch(filterProductByCityAction(""))
                    navigate("/dashBoard")
                  }
                 
                }}
              >
                {t("Tours, Sightseeing & Cruises")}
              </Typography>
              <Box className="arrows"
              sx={{
                marginRight:"15px",
                "&:hover":{cursor:"pointer"}
              }}
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>

          {/* TRavel TRansportation And Services */}
          {/* <Box className="Travel & Transportation Services">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Travel_TransportationToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Travel & Transportation Services
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}

          {/* Unique Experiences */}
          {/* <Box className="Unique Experiences">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={UniqueExperienceToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Unique Experiences
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box> */}
        </Box>
      </Box>

      {/* Attractions */}
      {/* <Box
        className="attractions"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={AttractionsToggleDrawer("left", true)}
      >
        <Typography>Attractions</Typography>
        <KeyboardArrowRightIcon />
      </Box> */}

      {/* Recommendations */}
      {/* <Box
        className="Recommendations "
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={RecommendationToggleDrawer("left", true)}
      >
        <Typography>Recommendations</Typography>
        <KeyboardArrowRightIcon />
      </Box> */}

      {/* NearBy */}
      {/* <Box
        className="NearBy"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={NearbyToggleDrawer("left", true)}
      >
        <Typography>NearBy</Typography>
        <KeyboardArrowRightIcon />
      </Box>  */}

      <Divider />

      <Box
      sx={{
        paddingLeft: "10%",
        paddingBottom:"10%",
        
      }}
      >
        <Typography sx={{fontSize: { xs: "14px", md: "16px" },"&:hover":{cursor:"pointer",textDecoration:"underLine"}}} 
        onClick={()=>navigate("/aboutTurkey")}
        >
          {t("About Turkey")}
        </Typography>
      </Box>
    </Box>
  );

  // nearby modal
  const NearByModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={NearbyToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={NearbyToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      <Box
        className="differnet Items"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Typography>England Tours</Typography>
        <Typography>Harley</Typography>
        <Typography>Stansted Mountfitchet</Typography>
        <Typography>Cambridge</Typography>
        <Typography>Oxford</Typography>
        <Typography>Southampton</Typography>
        <Typography>Birmingham</Typography>
        <Typography>Bristol</Typography>
        <Typography>Cardiff</Typography>
        <Typography>Bruges</Typography>
        <Typography>Lille</Typography>
        <Typography>Manchester</Typography>
        <Typography>LiverPool</Typography>
        <Typography>Soth East England</Typography>
        <Typography>East of England</Typography>
        <Typography>Nord-Pas de Calais</Typography>
      </Box>
    </Box>
  );

  // recommendationModal
  const recommendationModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={RecommendationToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={RecommendationToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      <Box
        className="differnet Items"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Typography>All Recommendations</Typography>
        <Typography>Ways To Beat The Crowd in London</Typography>
        <Typography>Don't Miss these Must-Do Activites in London</Typography>
        <Typography>How To Spend 3 Days in London</Typography>
        <Typography>Private Walking Tours in London</Typography>
        <Typography>Top Parks & Gardens in London</Typography>
        <Typography>doctor who Tours in London</Typography>
        <Typography>London FootBall Tours</Typography>
      </Box>
    </Box>
  );

  // AttractionsModal
  const AttractionsModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={AttractionsToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={AttractionsToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      <Box
        className="differnet Items"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Typography>Things To Do In London</Typography>
        <Typography>Stonehenge Tours & Tickets</Typography>
        <Typography>London Eye Tours & Tickets</Typography>
        <Typography>Thames River Tours & Tickets</Typography>
        <Typography>Changing Of The Gaurd Tours & Tickets</Typography>
        <Typography>Buckingham Palace Tours & Tickets</Typography>
        <Typography>House Of Parliament & Big Ben Tours & Tickets</Typography>
      </Box>
    </Box>
  );

  // UniqueExperinecModal
  const uniqueExperienceModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={UniqueExperienceToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={UniqueExperienceToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {/* main body */}
      <Box
        className="mainUnique Experience"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
        }}
      >
        {/* back Button London Tour*/}
        <Box
          className="mainUnique Experience"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            paddingLeft: "10%",
          }}
        >
          <KeyboardBackspaceIcon
            sx={{
              "&:hover": { cursor: "pointer" },
            }}
            onClick={UniqueExperienceToggleDrawer(anchor, false)}
          />
          <Typography>London Tour</Typography>
        </Box>

        <Box
          className="mainBody"
          sx={{
            paddingLeft: "10%",
            fontSize: "30px",
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
          }}
        >
          <Typography>All Unique Experiences</Typography>
          <Typography>Volunteer Tours</Typography>
        </Box>
      </Box>
    </Box>
  );

  // Travel , TRansport & service Modal
  const Travel_Transport_serviceModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Travel_TransportationToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Travel_TransportationToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstTravel_TransportState == "" ? (
        <Box
          className="mainTravel&TransporationServices"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainTravel&TransporationServices"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Travel_TransportationToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Travel & Transporation Services</Typography>

            {/* Services*/}
            <Box
              className="Services"
              onClick={() => setFirstTravel_TransportState("Services")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Services
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Transfers*/}
            <Box
              className="Transfers"
              onClick={() => setFirstTravel_TransportState("Transfers")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Transfers
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Transportations*/}
            <Box
              className="Transportations"
              onClick={() => setFirstTravel_TransportState("Transportation")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Transportations
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstTravel_TransportState == "Services" ? (
        <Box
          className="Services"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Services*/}
          <Box
            className="BackButtonServices"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTravel_TransportState("")}
            />
            <Typography>Travel & Transporation Services</Typography>
          </Box>
          <Typography>All Services</Typography>
          <Typography>Discount Cards</Typography>
          <Typography>Photo Shoots</Typography>
          <Typography>Shopping Passes & Offers</Typography>
          <Typography>Shopping Tours</Typography>
        </Box>
      ) : FirstTravel_TransportState == "Transportation" ? (
        <Box
          className="Transportation"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Transportation*/}
          <Box
            className="BackButtonServices"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTravel_TransportState("")}
            />
            <Typography>Travel & Transporation Services</Typography>
          </Box>
          <Typography>All Transportation</Typography>
          <Typography>Bus Services</Typography>
          <Typography>Private Drivers</Typography>
          <Typography>Rail Services</Typography>
          <Typography>Transportational Rental</Typography>
          <Typography>Transportational Services</Typography>
        </Box>
      ) : FirstTravel_TransportState == "Transfers" ? (
        <Box
          className="Transfers"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Transfers*/}
          <Box
            className="BackButtonServices"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTravel_TransportState("")}
            />
            <Typography>Travel & Transporation Services</Typography>
          </Box>
          <Typography>All Transfers</Typography>
          <Typography>Airport & Hotel Transfers</Typography>
          <Typography>Port Transfers</Typography>
          <Typography>Rail Transfers</Typography>
        </Box>
      ) : null}
    </Box>
  );

  // Tour, sightseeing & cruises
  const Tour_sightseeing_Modal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: { xs: "25px", md: "30px" } }}
          onClick={Ticket_PassesToggleDrawer(anchor, false)}
        />
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "22px" },
          }}
        >
          Travel
        </Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          alignItems: "center",
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
            fontSize: { xs: "25px", md: "30px" },
          }}
          onClick={Tour_SightSeeingToggleDrawer(anchor, false)}
        />
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "22px" },
          }}
        >
          Back To Main
        </Typography>
      </Box>

      <Divider />

      {FirstTour_sightseeingState == "" ? (
        <Box
          className="mainTravel&TransporationServices"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainTour,SightSeeing&Cruises"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              alignItems: "center",
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Tour_SightSeeingToggleDrawer(anchor, false)}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Back To Tour
            </Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              All Tours, Sightseeing & Cruises
            </Typography>

            {/* Cruises & Sailing*/}
            <Box
              className="Cruises & Sailing"
              onClick={() => setFirstTour_sightseeingState("Cruises & Sailing")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Cruises & Sailing
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* How To Get Around*/}
            <Box
              className="How To Get Around"
              onClick={() => setFirstTour_sightseeingState("How To Get Around")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  How To Get Around
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Private And Luxury*/}
            <Box
              className="Private And Luxury"
              //  onClick={()=>setFirstTour_sightseeingState("SightSeeing Tours")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Private And Luxury
                </Typography>
              </Box>
            </Box>

            {/* SightSeeing Tours*/}
            <Box
              className="SightSeeing Tours"
              onClick={() => setFirstTour_sightseeingState("SightSeeing Tours")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  SightSeeing Tours
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Tours By Duration*/}
            <Box
              className="Tours By Duration"
              onClick={() => setFirstTour_sightseeingState("Tours By Duration")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Tours By Duration
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstTour_sightseeingState == "Cruises & Sailing" ? (
        <Box
          className="Cruises & Sailing"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Cruises & Sailing*/}
          <Box
            className="BackButtonCruises & Sailing"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All Cruises & Sailing
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Catamaran Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Day Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Dinner Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Gandala Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Night Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Parts of Call Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Share Excursions
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Cruises
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "How To Get Around" ? (
        <Box
          className="How To Get Around"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button How To Get Around*/}
          <Box
            className="BackButtonHow To Get Around"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All How To Get Around
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Air Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bike Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bus Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Classic Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            E-Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Helicopter Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Hot Air Balloon Rides
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Limousine Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Luxury Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Mountain Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Pedicab Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Power Boats
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Public Transporatation Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Rail Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Road Trip
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Self Giuded Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Speed Boat Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Vespa, Scooter & Moped Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Walking Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Water Tours
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "SightSeeing Tours" ? (
        <Box
          className="SightSeeing Tours"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button SightSeeing Tours*/}
          <Box
            className="BackButtonSightSeeing Tours"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All SightSeeing Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Adventure Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            City Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Hop on Hop off Buses
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Night Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Observation Decks
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Private SightSeeing Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Passes
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Skip The Line Tickets
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SkyScrappers & Towers
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "Tours By Duration" ? (
        <Box
          className="Tours By Duration"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Tours By Duration*/}
          <Box
            className="BackButtonTours By Duration"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All Tours By Duration
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Day Trips
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Full-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Half-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Layover Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Multi-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Overnight Tours
          </Typography>
        </Box>
      ) : null}
    </Box>
  );

  // Ticket & Passes
  const Ticket_PassesModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Ticket_PassesToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Ticket_PassesToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstTickets_PassesState == "" ? (
        <Box
          className="mainTour,SightSeeing&Cruises"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainSeasonal&SpecialOccasions"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Ticket_PassesToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Tickets & Passes</Typography>

            {/* Amusement Parks*/}
            <Box
              className="Amusement Parks"
              onClick={() => setFirstTickets_PassesState("Amusement Parks")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Amusement Parks
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Attraction & Messeums*/}
            <Box
              className="Attraction & Messeums"
              onClick={() =>
                setFirstTickets_PassesState("Attractions & Messeums")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Attraction & Messeums
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Packages & Special Events*/}
            <Box
              className="Packages & Special Events"
              onClick={() =>
                setFirstTickets_PassesState("Packages & Special Events")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Packages & Special Events
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Shows & Performances*/}
            <Box
              className="Shows & Performances"
              onClick={() =>
                setFirstTickets_PassesState("Shows & Performances")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Shows & Performances
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Sporting Events*/}
            <Box
              className="Sporting Events"
              onClick={() => setFirstTickets_PassesState("Sporting Events")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Sporting Events
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstTickets_PassesState == "Amusement Parks" ? (
        <Box
          className="Amusement Parks"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Amusement Parks*/}
          <Box
            className="BackButtonAmusement Parks"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTickets_PassesState("")}
            />
            <Typography>Tickets & Passes</Typography>
          </Box>
          <Typography>All Amusement Parks</Typography>
          <Typography>Theme Parks</Typography>
        </Box>
      ) : FirstTickets_PassesState == "Attractions & Messeums" ? (
        <Box
          className="Attractions & Messeums"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Attractions & Messeums*/}
          <Box
            className="BackButtonAttractions & Messeums"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTickets_PassesState("")}
            />
            <Typography>Tickets & Passes</Typography>
          </Box>
          <Typography>All Attractions & Messeums</Typography>
          <Typography>Ancient Ruins</Typography>
          <Typography>Aquariums</Typography>
          <Typography>Arena Tours</Typography>
          <Typography>Art Galleries</Typography>
          <Typography>Castle Tours</Typography>
          <Typography>Factory Tours</Typography>
          <Typography>Monuments and Memorials</Typography>
          <Typography>Messeum Tickets And Passes</Typography>
          <Typography>National Parks</Typography>
          <Typography>Natural Attractions</Typography>
          <Typography>Parks</Typography>
          <Typography>Planetariums</Typography>
          <Typography>Religious Sites</Typography>
        </Box>
      ) : FirstTickets_PassesState == "Packages & Special Events" ? (
        <Box
          className="Packages & Special Events"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Packages & Special Events*/}
          <Box
            className="BackButtonPackages & Special Events"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTickets_PassesState("")}
            />
            <Typography>Tickets & Passes</Typography>
          </Box>
          <Typography>All Packages & Special Events</Typography>
          <Typography>City Packages</Typography>
        </Box>
      ) : FirstTickets_PassesState == "Shows & Performances" ? (
        <Box
          className="Shows & Performances"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Shows & Performances*/}
          <Box
            className="BackButtonShows & Performances"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTickets_PassesState("")}
            />
            <Typography>Tickets & Passes</Typography>
          </Box>
          <Typography>All Shows & Performances</Typography>
          <Typography>Adults -only Shows</Typography>
          <Typography>Cabaret</Typography>
          <Typography>Circus Shows</Typography>
          <Typography>Comedy Shows</Typography>
          <Typography>Concerts</Typography>
          <Typography>Dinner & Ticket Shows</Typography>
          <Typography>Family -Friendly Shows</Typography>
          <Typography>Fashion Shows</Typography>
          <Typography>Festivals</Typography>
          <Typography>Jazz Shows</Typography>
          <Typography>Musicals</Typography>
          <Typography>NightLife</Typography>
          <Typography>opera Performances</Typography>
          <Typography>Shows</Typography>
          <Typography>Theater Shows</Typography>
        </Box>
      ) : FirstTickets_PassesState == "Sporting Events" ? (
        <Box
          className="Sporting Events"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Sporting Events*/}
          <Box
            className="BackButtonSporting Events"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTickets_PassesState("")}
            />
            <Typography>Tickets & Passes</Typography>
          </Box>
          <Typography>All Sporting Events</Typography>
          <Typography>Archery</Typography>
          <Typography>Motor Sports</Typography>
          <Typography>Soccer</Typography>
        </Box>
      ) : null}
    </Box>
  );

  // Seasonal & special Occasions
  const Seasonal_special_oCCasionModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstSeasonl_SpecialState == "" ? (
        <Box
          className="mainSeasonal&SpecialOccasions"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainSeasonal&SpecialOccasions"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Seasonal & Specail Occasions</Typography>

            {/* Holidays*/}
            <Box
              className="Holidays"
              onClick={() => setFirstSeasonl_SpecialState("Holidays")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Holidays
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Once In a LifeTime Experience */}
            <Box
              className="Once In a LifeTime Experience"
              //  onClick={()=>setFirstSeasonl_SpecialState("Once In a LifeTime Experience")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Once In a LifeTime Experience
                </Typography>
              </Box>
            </Box>

            {/* Weddings & Celebrations */}
            <Box
              className="Weddings & Celebrations"
              onClick={() =>
                setFirstSeasonl_SpecialState("Wedding & Celebrations")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Weddings & Celebrations
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstSeasonl_SpecialState == "Holidays" ? (
        <Box
          className="Holidays"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonHolidays"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstSeasonl_SpecialState("")}
            />
            <Typography>Seasonal & Special Occasions</Typography>
          </Box>
          <Typography>All Holidays</Typography>
          <Typography>Boxing Day</Typography>
          <Typography>carnival</Typography>
          <Typography>Halloween</Typography>
          <Typography>New Years</Typography>
          <Typography>Spring Break</Typography>
        </Box>
      ) : FirstSeasonl_SpecialState == "Wedding & Celebrations" ? (
        <Box
          className="Wedding & Celebrations"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonWedding & Celebrations"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstSeasonl_SpecialState("")}
            />
            <Typography>Seasonal & Special Occasions</Typography>
          </Box>
          <Typography>All Wedding & Celebrations</Typography>
          <Typography>Honeymoon Packages</Typography>
          <Typography>Romantic Tours</Typography>
          <Typography>Wedding Ceremonies</Typography>
          <Typography>Wedding Packages</Typography>
        </Box>
      ) : null}
    </Box>
  );

  // outDoor Activites
  const outDoorActivitesModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstOutDoorActivitesState == "" ? (
        <Box
          className="mainOutDoorAndActivitees"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainOutDoorAndActivitees"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All OutDoor Activities</Typography>

            {/* Active & Outdoor Classes*/}
            <Box
              className="Active & Outdoor Classes"
              onClick={() =>
                setFirstOutDoorActivitesState("Active & Outdoor Classes")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Active & Outdoor Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Extreme Sports */}
            <Box
              className="Extreme Sports"
              onClick={() => setFirstOutDoorActivitesState("Extreme Sports")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Extreme Sports
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Fun & Games */}
            <Box
              className="Fun & Games"
              onClick={() => setFirstOutDoorActivitesState("Fun & Games")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Fun & Games
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* In The Air */}
            <Box
              className="In The Air"
              onClick={() => setFirstOutDoorActivitesState("in The Air")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  In The Air
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Motor Sports */}
            <Box
              className="Motor Sports"
              onClick={() => setFirstOutDoorActivitesState("Motor Sports")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Motor Sports
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Nature and WildLife Tours */}
            <Box
              className="Nature and WildLife Tours"
              onClick={() =>
                setFirstOutDoorActivitesState("Nature and WildLife Tours")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Nature and WildLife Tours
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* On The Ground */}
            <Box
              className="On The Ground"
              onClick={() => setFirstOutDoorActivitesState("On The Ground")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  On The Ground
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* On The water */}
            <Box
              className="On The water"
              onClick={() => setFirstOutDoorActivitesState("On The Water")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  On The water
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstOutDoorActivitesState == "Active & Outdoor Classes" ? (
        <Box
          className="Active & Outdoor Classes"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonActive & Outdoor Classes"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All Active & Outdoor Classes</Typography>
          <Typography>Boxing Classes</Typography>
          <Typography>Crossfit Classes</Typography>
          <Typography>Cycling Classes</Typography>
          <Typography>Dance Lessons</Typography>
          <Typography>Fitness Classes</Typography>
          <Typography>Gymnastics Classes</Typography>
          <Typography>Soccer Classes</Typography>
          <Typography>Sports Lessons</Typography>
          <Typography>Yoga Classes</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "Extreme Sports" ? (
        <Box
          className="Extreme Sports"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Extreme Sports*/}
          <Box
            className="BackButtonExtreme Sports"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All Extreme Sports</Typography>
          <Typography>4WD Tours</Typography>
          <Typography>Axe Throwing</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "Fun & Games" ? (
        <Box
          className="Fun & Games"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Fun & Games*/}
          <Box
            className="BackButtonFun & Games"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All Fun & Games</Typography>
          <Typography>Escape Rooms</Typography>
          <Typography>VR Experiences</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "in The Air" ? (
        <Box
          className="in The Air"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button in The Air*/}
          <Box
            className="BackButtonin The Air"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All in The Air</Typography>
          <Typography>Air Tours</Typography>
          <Typography>Helicopter Tours</Typography>
          <Typography>Hot Air Ballon Rides</Typography>
          <Typography>VR Experiences</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "Motor Sports" ? (
        <Box
          className="Motor Sports"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Motor Sports*/}
          <Box
            className="BackButtonMotor Sports"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All Motor Sports</Typography>
          <Typography>4WD Tours</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "Nature and WildLife Tours" ? (
        <Box
          className="Nature and WildLife Tours"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Nature and WildLife Tours*/}
          <Box
            className="BackButtonNature and WildLife Tours"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All Nature and WildLife Tours</Typography>
          <Typography>Aquarims</Typography>
          <Typography>Natural Attractions</Typography>
          <Typography>Natural Parks</Typography>
          <Typography>Natural Walks</Typography>
          <Typography>WildLife Encounters</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "On The Ground" ? (
        <Box
          className="On The Ground"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button On The Ground*/}
          <Box
            className="BackButtonOn The Ground"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All On The Ground</Typography>
          <Typography>Bike Rentals</Typography>
          <Typography>Climbing</Typography>
          <Typography>Hiking Tours</Typography>
          <Typography>Mountain Bike Tours</Typography>
          <Typography>Obastacle Courses</Typography>
          <Typography>outback Tours</Typography>
          <Typography>Pedicab Tours</Typography>
          <Typography>Roller Skating</Typography>
          <Typography>Running Tours</Typography>
          <Typography>Scavenger Hunts</Typography>
        </Box>
      ) : FirstOutDoorActivitesState == "On The Water" ? (
        <Box
          className="On The Water"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button On The Water*/}
          <Box
            className="BackButtonOn The Water"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstOutDoorActivitesState("")}
            />
            <Typography>Outdoor Activities</Typography>
          </Box>
          <Typography>All On The Water</Typography>
          <Typography>Catamaran Cruises</Typography>
          <Typography>Dinner Cruises</Typography>
          <Typography>Gandala Cruises</Typography>
          <Typography>Jet Boat Rental</Typography>
          <Typography>Night Cruises</Typography>
          <Typography>Power Boats</Typography>
          <Typography>Sightseeing Cruises</Typography>
          <Typography>Speed Boat Rentals</Typography>
        </Box>
      ) : null}
    </Box>
  );

  // Food & drink Modal
  const Food_DrinkModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Food_DrinkToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstFood_DrinkState == "" ? (
        <Box
          className="mainFoodAndDrink"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainFoodAndDrink"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Food_DrinkToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Food & Drink</Typography>

            {/* Coffee & Tea */}
            <Box
              className="Coffee & Tea"
              onClick={() => setFirstFood_DrinkState("Coffee & Tea")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Coffee & Tea
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Desserts And Sweets */}
            <Box
              className="Desserts And Sweets"
              onClick={() => setFirstFood_DrinkState("Desserts & Sweets")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Desserts And Sweets
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Dining Experiences */}
            <Box
              className="Dining Experiences"
              onClick={() => setFirstFood_DrinkState("Dinig Experience")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Dining Experiences
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Food And Drink Classes */}
            <Box
              className="Food And Drink Classes"
              onClick={() => setFirstFood_DrinkState("Food & Drink Classes")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Food And Drink Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Food Tours */}
            <Box
              className="Food Tours"
              onClick={() => setFirstFood_DrinkState("Food Tours")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Food Tours
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Wine,Bear & Spirits */}
            <Box
              className="Wine,Bear & Spirits"
              onClick={() => setFirstFood_DrinkState("Wine,Bear & Spirits")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Wine,Bear & Spirits
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstFood_DrinkState == "Coffee & Tea" ? (
        <Box
          className="Coffee & Tea"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonCoffee & Tea"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Coffee & Tea</Typography>
          <Typography>Coffee & Tea Tours</Typography>
          <Typography>High Tea</Typography>
        </Box>
      ) : FirstFood_DrinkState == "Desserts & Sweets" ? (
        <Box
          className="Desserts & Sweets"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Desserts & Sweets*/}
          <Box
            className="BackButtonDesserts & Sweets"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Desserts & Sweets</Typography>
          <Typography>Chocolate Tours</Typography>
          <Typography>Dessert Tours</Typography>
          <Typography>Donut Walking Tours</Typography>
          <Typography>Pastry Tours</Typography>
        </Box>
      ) : FirstFood_DrinkState == "Dinig Experience" ? (
        <Box
          className="Dinig Experience"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Desserts & Sweets*/}
          <Box
            className="BackButtonDinig Experience"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Dinig Experience</Typography>
          <Typography>Dinner</Typography>
          <Typography>Dinner Cruises</Typography>
          <Typography>Dinner & Show Tickets</Typography>
          <Typography>Lunch</Typography>
          <Typography>Restaurants</Typography>
        </Box>
      ) : FirstFood_DrinkState == "Food & Drink Classes" ? (
        <Box
          className="Food & Drink Classes"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Food & Drink Classes*/}
          <Box
            className="BackButtonFood & Drink Classes"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Food & Drink Classes</Typography>
          <Typography>Cocktail Tastings</Typography>
          <Typography>Cooking Classes</Typography>
          <Typography>Wine Making Workshops</Typography>
        </Box>
      ) : FirstFood_DrinkState == "Food Tours" ? (
        <Box
          className="Food Tours"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Food Tours*/}
          <Box
            className="BackButtonFood Tours"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Food Tours</Typography>
          <Typography>Culinary Tours</Typography>
          <Typography>donuut walking Tours</Typography>
          <Typography>Markets</Typography>
          <Typography>Street Food Tours</Typography>
          <Typography>Wine Tastings</Typography>
        </Box>
      ) : FirstFood_DrinkState == "Wine,Bear & Spirits" ? (
        <Box
          className="Wine,Bear & Spirits"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Wine,Bear & Spirits*/}
          <Box
            className="BackButtonWine,Bear & Spirits"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstFood_DrinkState("")}
            />
            <Typography>Food & Drink</Typography>
          </Box>
          <Typography>All Wine,Bear & Spirits</Typography>
          <Typography>Bar Tours</Typography>
          <Typography>Beer & Brewery Tours</Typography>
          <Typography>Distillery Tours</Typography>
          <Typography>Wine Making Workshops</Typography>
          <Typography>Wine Tastings</Typography>
          <Typography>Wine Tours</Typography>
        </Box>
      ) : null}
    </Box>
  );

  // Classes And Workshops
  const classes_workShopsModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstClass_workshopState == "" ? (
        <Box
          className="mainClassesAndWorshop"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainClassesAndWorshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Classes_WorkshopToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Classes And Workshops</Typography>

            {/* Active And Outdoor Classes */}
            <Box
              className="Active And Outdoor Classes"
              onClick={() =>
                setFirstClass_workshopState("AllActiveAndOutdoorClasses")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Active And Outdoor Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Art And Culture Calvsses */}
            <Box
              className="Art And Culture Calsses"
              onClick={() =>
                setFirstClass_workshopState("ArtAndCultureClasses")
              }
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Art And Culture Calsses
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Food & Drink Classes */}
            <Box
              className="Food & Drink Classes"
              onClick={() => setFirstClass_workshopState("FoodAndDrinkClasses")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Food & Drink Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Language Classes */}
            <Box
              className="Language Classes"
              onClick={() => setFirstClass_workshopState("Language Classes")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Language Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Wellness Classes */}
            <Box
              className="Wellness Classes"
              onClick={() => setFirstClass_workshopState("Wellness Classes")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Wellness Classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstClass_workshopState == "AllActiveAndOutdoorClasses" ? (
        <Box
          className="AllActiveAndOutdoorClasses"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonClassesAndWorkshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstClass_workshopState("")}
            />
            <Typography>Classes & Workshops</Typography>
          </Box>
          <Typography>All Active & Outdoor Classes</Typography>
          <Typography>Boxing Classes</Typography>
          <Typography>Crossfit Classes</Typography>
          <Typography>Cycling Classes</Typography>
          <Typography>Dance Classes</Typography>
          <Typography>Fitness Classes</Typography>
          <Typography>Gymnastics Classes</Typography>
          <Typography>Soccer Classes</Typography>
          <Typography>Sports Lessons</Typography>
          <Typography>Yoga Classes</Typography>
        </Box>
      ) : FirstClass_workshopState == "ArtAndCultureClasses" ? (
        <Box
          className="ArtAndCultureClasses"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonClassesAndWorkshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstClass_workshopState("")}
            />
            <Typography>Classes & Workshops</Typography>
          </Box>
          <Typography>All Art & Culture Classes</Typography>
          <Typography>Art Classes</Typography>
          <Typography>Craft Classes</Typography>
          <Typography>Dance Lessons</Typography>
          <Typography>English Lessons</Typography>
          <Typography>Music Classes</Typography>
          <Typography>Painting Classes</Typography>
          <Typography>Pottery Classes</Typography>
        </Box>
      ) : FirstClass_workshopState == "FoodAndDrinkClasses" ? (
        <Box
          className="FoodAndDrinkClasses"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonClassesAndWorkshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstClass_workshopState("")}
            />
            <Typography>Classes & Workshops</Typography>
          </Box>
          <Typography>All Food & Drink Classes</Typography>
          <Typography>Cocktail Tastings</Typography>
          <Typography>Cooking Classes</Typography>
          <Typography>Wine Making Workshops</Typography>
        </Box>
      ) : FirstClass_workshopState == "Language Classes" ? (
        <Box
          className="Language Classes"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonClassesAndWorkshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstClass_workshopState("")}
            />
            <Typography>Classes & Workshops</Typography>
          </Box>
          <Typography>All Language Classes</Typography>
          <Typography>Engliosh Lessons</Typography>
        </Box>
      ) : FirstClass_workshopState == "Wellness Classes" ? (
        <Box
          className="Wellness Classes"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Classes And Workshop*/}
          <Box
            className="BackButtonClassesAndWorkshop"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstClass_workshopState("")}
            />
            <Typography>Classes & Workshops</Typography>
          </Box>
          <Typography>All Wellness Classes</Typography>
          <Typography>Yoga Classes</Typography>
        </Box>
      ) : null}
    </Box>
  );

  //  Art And Culture Modal
  const Art_cultureModal = (anchor) => (
    <Box
      sx={{
        width: { xs: "250px", md: "350px" },
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
      // onKeyDown={NearbyToggleDrawer(anchor, false)}
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Art_CultureToggleDrawer(anchor, false)}
          // onClick={toggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
          }}
          onClick={Art_CultureToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

      {FirstArtState == "" ? (
        <Box
          className="mainAllArtAndCulture"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="BackButtonLondonTour"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>London Tour</Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "10%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >
            <Typography>All Art & Culture</Typography>

            {/* arts and Culture */}
            <Box
              className="Art & Culture"
              onClick={() => setFirstArtState("AllArtAndCultureClasses")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Art & Culture classes
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* arts and Design */}
            <Box
              className="Art & Design"
              onClick={() => setFirstArtState("ArtsAndDesign")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Art & Design
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Culture */}
            <Box
              className="Culture"
              onClick={() => setFirstArtState("Culture")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Culture
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* pop Culture */}
            <Box
              className="Pop Culture"
              onClick={() => setFirstArtState("PopCulture")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Pop Culture
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Shows and Performance */}
            <Box
              className="Shows and Performance"
              onClick={() => setFirstArtState("ShowsAndPerformances")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Shows and Performance
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Traditional Wellness */}
            <Box
              className=" Traditional Wellness"
              onClick={() => setFirstArtState("TraditionalWellness")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                  }}
                >
                  Traditional Wellness
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstArtState == "AllArtAndCultureClasses" ? (
        <Box
          className="AllArtAndCultureClasses"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Art And Culture Classes</Typography>
          <Typography>Art Classes</Typography>
          <Typography>Craft Classes</Typography>
          <Typography>Dance Lessons</Typography>
          <Typography>Engllish Lessons</Typography>
          <Typography>Music Classes</Typography>
          <Typography>Painting Classes</Typography>
          <Typography>pottery Classes</Typography>
        </Box>
      ) : FirstArtState == "ArtsAndDesign" ? (
        <Box
          className="ArtsAndDesign"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
              //  onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Art & Design</Typography>
          <Typography>Architecture Tours</Typography>
          <Typography>Art Galleries</Typography>
          <Typography>Art Tours</Typography>
          <Typography>Musseums</Typography>
        </Box>
      ) : FirstArtState == "Culture" ? (
        <Box
          className="Culture"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
              //  onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Culture</Typography>
          <Typography>Ancient Ruins</Typography>
          <Typography>Archaeology Tours </Typography>
          <Typography>Castle Tours</Typography>
          <Typography>Costume Dress Experiences</Typography>
          <Typography>Cultural Tours</Typography>
          <Typography>Factory Tours</Typography>
          <Typography>Fashion Tours</Typography>
          <Typography>Historical Tours</Typography>
          <Typography>Literary Tours</Typography>
          <Typography>Musseums</Typography>
          <Typography>Music Tours</Typography>
          <Typography>Photography Tours</Typography>
          <Typography>Religious Tours</Typography>
          <Typography>Underground Tours</Typography>
        </Box>
      ) : FirstArtState == "PopCulture" ? (
        <Box
          className="PopCulture"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
              //  onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Pop Culture</Typography>
          <Typography>Crime Tours</Typography>
          <Typography>Game Of Thrones Tour</Typography>
          <Typography>Ghost Tours</Typography>
          <Typography>Harry Potter Tours</Typography>
          <Typography>Movies Tours</Typography>
          <Typography>Street Art Tours</Typography>
          <Typography>TV Tours</Typography>
        </Box>
      ) : FirstArtState == "ShowsAndPerformances" ? (
        <Box
          className="ShowsAndPerformances"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
              //  onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Shows And Performances</Typography>
          <Typography>Adults Only Shows</Typography>
          <Typography>Cabaret</Typography>
          <Typography>Circus Shows</Typography>
          <Typography>Concerts</Typography>
          <Typography>Dinner And Show Tickets</Typography>
          <Typography>Family - frinedly Shows</Typography>
          <Typography>Fashion Shows</Typography>
          <Typography>Festivals</Typography>
          <Typography>Jazz Shows</Typography>
          <Typography>Musicals</Typography>
          <Typography>NightLife</Typography>
          <Typography>Oprea Performances</Typography>
          <Typography>Shows</Typography>
          <Typography>TheaterShows</Typography>
        </Box>
      ) : FirstArtState == "TraditionalWellness" ? (
        <Box
          className="TraditionalWellness"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "10%",
          }}
        >
          {/* back Button Art Culture*/}
          <Box
            className="BackButtonArtCulture"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              paddingLeft: "10%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstArtState("")}
              //  onClick={Art_CultureToggleDrawer(anchor, false)}
            />
            <Typography>Art & Culture</Typography>
          </Box>
          <Typography>All Traditional Wellness</Typography>
          <Typography>Spas</Typography>
        </Box>
      ) : null}
    </Box>
  );


  const fetchCurrentUser = async () => {

    if(localStorage.getItem("accessToken") != null){
    let options ={
      url:`${Base_url}/user/me`,
      method:"GET",
      headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      }
    }


    try{
      let {data} = await axios(options)
      localStorage.setItem("userId",data.id)
      dispatch(currentUserAction(data))
    }catch(error){
      if(error.response.data.error == "Unauthorized"){
        localStorage.removeItem("accessToken")
        // navigate("/")
      }
    }
  }
  }


  useEffect(()=>{
    fetchCurrentUser()
  },[])




  return (
    <Box
      sx={{
        fontSize: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: { xs: "space-between", md: "space-between" },
        width: { xs: "96%", md: "88%" },
        padding: { xs: "2% 2% 1% 2%", md: "1% 6% 0% 6%" },
      }}
    >

      {/* left part  */}
      <Box
        className={"leftPart"}
        sx={{
          display: !showSmallScreenSearch ? "flex" : "none",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 1,
        }}
      >
        <MenuIcon
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={toggleDrawer("left", true)}
        />
        {/* <Typography
          variant="h4"
          onClick={() => {
            if(localStorage.getItem("accessToken") == null){
              navigate("/login")
            }else{
              navigate("/HomePage")
            }
          }}
          sx={{
            "&:hover": { cursor: "pointer" },
            fontSize: { xs: "28px", md: "28px" },
          }}
        >
          MekoTourizm
        </Typography> */}
        {/* <Box component={"img"} src={WebSiteLogo1} alt={"logo"} sx={{
          width:{xs:"100px",md:"150px"},
          height:{xs:"50px",md:"50px"},
          margin:"0px",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={() => {
          if(localStorage.getItem("accessToken") == null){
            navigate("/login")
          }else{
            navigate("/HomePage")
          }
        }}
        /> */}
         {/* <Box component={"img"} src={WebSiteLogo2} alt={"logo"} sx={{
          width:{xs:"100px",md:"150px"},
          height:{xs:"50px",md:"50px"},
          margin:"0px",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={() => {
          if(localStorage.getItem("accessToken") == null){
            navigate("/login")
          }else{
            navigate("/HomePage")
          }
        }}
        /> */}
        <Box component={"img"} src={WebSiteLogo4} alt={"logo"} sx={{
          width:{xs:"100px",md:"180px"},
          height:{xs:"50px",md:"50px"},
          margin:"0px",
          "&:hover":{cursor:"pointer"}
        }}
        onClick={() => {
          // if(localStorage.getItem("accessToken") == null){
          //   navigate("/login")
          // }else{
          //   navigate("/")
          // }
          navigate("/")
        }}
        /> 
      </Box>

      {/* serach box for big screens */}
      <Box
          className="textField&SearchIcons"
          sx={{
            display: {xs:"none",md:"flex"},
            flexDirection: "row",
            alignItems: "center",
            columnGap: 2,
            "&:hover": { border: "1px solid black" },
            border: "1px solid white",
            padding: "2px",
            position:"relative"
          }}
        >
          <input
            type={"text"}
            placeholder="Search for Istanbul,Turkey"
            style={{
              outline: "none",
              height: "30px",
              width: "320px",
              border: "1px solid white",
            }}
            // value={searchInputValue}
            //         onChange={(e) => {
            //           setSearchInputValue(e.target.value);
            //         }}
            //         ref={inputRef}
            //         onFocus={() => setIsFocus(true)}
						// onBlur={() => {
						// 	if (!isHovered) {
						// 		setIsFocus(false);
						// 	}
						// }}
            value={searchInputValue}
            onChange={headerSearchHandler}
            onClick={()=>setShowMenuOptions(!showMenuOptions)}
          />
          <SearchIcon 
          sx={{"&:hover":{cursor:"pointer"}}}
          onClick={()=>{
            if(location.pathname == "/dashBoard"){
              dispatch(filterProductByCityAction(searchInputValue.toLowerCase()))
              setShowMenuOptions(false)
              setSearchInputValue("")
              setlogoutRender(!logoutRender)
            }else{
              dispatch(filterProductByCityAction(searchInputValue.toLowerCase()))
              setSearchInputValue("")
            setShowMenuOptions(false)
            navigate("/dashBoard")
            }
          }}
          />
            <Typography
                sx={{
                   position:"absolute",
                   top:"102%",
                   left:"0px",
                   zIndex:19999,
                   width:"100%",
                   backgroundColor:"white",
                   height:{xs:"50vh",md:placesName.length < 5 ? "fit-content" :"40vh"},
                   overflow:"auto",
                   display:showMenuOptions ? "flex" : "none" ,
                   flexDirection:"column",
              }}
                >
        {placesName.map((option,index) => (
                      <MenuItem key={index} value={option}  
                      onClick={()=>{
                        if(location.pathname == "/dashBoard"){
                          dispatch(filterProductByCityAction(option.toLowerCase()))
                          setShowMenuOptions(false)
                          setSearchInputValue("")
                          setlogoutRender(!logoutRender)
                        }else{
                          dispatch(filterProductByCityAction(option.toLowerCase()))
                          setSearchInputValue("")
                        setShowMenuOptions(false)
                        navigate("/dashBoard")
                        }
                      }}
                      >
                         {option}
                      </MenuItem>
                    ))}
        </Typography>
        </Box>
       

      

       {/* { isFocus && (
					      	<Box
						              	className="shadow-lg absolute w-full"
						              	onMouseEnter={() => {
						              		setIsHovered(true);
						              	}}
						              	onMouseLeave={() => {
						              		setIsHovered(false);
						              	}}
                            sx={{
                              width:{xs:"85%",md:"24%"},
                              height:{xs:"10vh",md:"10vh"},
                              position:"absolute",
                              top:{xs:"10%",md:"9%"},
                              left:{xs:"3%",md:"34%"},
                              zIndex:199999,
                              backgroundColor:"white",
                              display:"flex",
                              flexDirection:"column",
                              paddingLeft:{xs:"1%",md:"1%"},
                              backgroundColor:"#dce5f2",
                              overflow:"auto"
                            }}
						              >
							{countyList.map((suggestion, index) => {
								const isMatch =
									suggestion.toLowerCase().indexOf(searchInputValue.toLowerCase()) >
									-1;
								return (
									<Box key={index} >
										{isMatch && (
											<Box
												className="p-5 hover:bg-gray-200 cursor-pointer"
												onClick={() => {
													setSearchInputValue(suggestion);
													inputRef.current.focus();
                          setIsFocus(false)
												}}
                        sx={{"&:hover":{cursor:"pointer"},}}
											>
												<Typography sx={{fontSize:{xs:"12px",md:"14px"}}}>{suggestion}</Typography>
											</Box>
										)}
									</Box>
								);
							})}
						</Box>
					)} */}

        {/* <TextField
                    // id="outlined-select-currency"
                    select
                    // value={cardEexpiryMonth}
                    // onChange={handleExpiryMonth}
                  >
                    {countyList.map((option,index) => (
                      <MenuItem key={index} value={option}  >
                         {option}
                      </MenuItem>
                    ))}
                  </TextField> */}







        {/* right part */}
      <Box
        className="rightPart"
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "row",
          alignItems: "center",
          columnGap: 2,
        }}
      >
        {/* website language selection  */}
               <TextField
                    id="outlined-select-currency"
                    select
                    value={countryCurrencyState}
                    onChange={contryChangeHandler}
                  >
                    {country_currency.map((option,index) => (
                      <MenuItem key={index} value={option.currency_code}  >
                         {option.currency_code}
                      </MenuItem>
                    ))}
                  </TextField>

                  <TextField
                    id="outlined-select-currency"
                    select
                    value={travellerData.webSiteLanguage}
                    onChange={changeWebsiteLanguage}
                  >
                    {websiteLanguage.map((option,index) => (
                      <MenuItem key={index} value={option.language.toUpperCase()}  >
                         {option.language.toUpperCase()}
                      </MenuItem>
                    ))}
                  </TextField>


        {/* help */}
        <Box
          className="help"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
          // onClick={() => navigate("/helpPage")}
        >
          <HelpOutlineIcon />
          <Typography sx={{ fontSize: { xs: "8px", md: "16px" } }} >
            {t("Help")}
          </Typography>
        </Box>
        
        {/* booking button */}
        <Box
          className="booking"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
          onClick={() => {
            if(localStorage.getItem("accessToken") != null){
              navigate("/bookingPage")
            }else{
              
            }
          }}
        >
           <BookOnlineIcon
            sx={{
              fontSize: { xs: "20px", md: "22px" },
            }}
          />
          <Typography sx={{ fontSize: { xs: "8px", md: "16px" } }} >
            {t("Bookings")}
          </Typography>
        </Box>

        {/* account */}
        <Box
          className="account"
          sx={{
            display: localStorage.getItem("accessToken") == null ? "flex": "none",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
        >
          <PermIdentityIcon />
          <Typography
            sx={{ fontSize: { xs: "8px", md: "16px" } }} 
            onClick={handleClick}
          >
            {t("Account")}
          </Typography>
        </Box>

          {/* user NAme and Profile */}
          <Box
          className="userName&profile"
          sx={{
            display: localStorage.getItem("accessToken") != null ? "flex": "none",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
        >
          <PermIdentityIcon />
          <Typography
            sx={{ fontSize: { xs: "8px", md: "16px" } }} 
            onClick={handleUserProfileClick}
          >
            {myState.firstName} {myState.lastName}
          </Typography>
        </Box>
      </Box>

      {/* search icon for small creens */}
      <Box
        className="rightPartMediaQuery"
        sx={{ display: { xs: !showSmallScreenSearch ? "flex" : "none", md: "none" } }}
        onClick={()=>{
          if(showSmallScreenSearch == false){
            setShowSmallScreenSearch(true)
          }else{
            setShowSmallScreenSearch(false)
          }
        }}
      >
        <SearchIcon sx={{ fontSize: "30px" }} />
      </Box>


      {/* sdearch box and search icon and cancel button */}
      <Box className="searchTab"
      sx={{
        display:{xs:showSmallScreenSearch ? "flex" : "none", md:"none"},
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        width:"94%",
        border:"2px solid #ededeb",
        padding:"3%",
        borderRadius:"20px",
        position:"relative"
      }}
      >
           <input
            type={"text"}
            placeholder="Search for Istanbul,Turkey"
            style={{
              width:"80%",
            height:"30px",
            outline:"none",
            border:"none"
            }}
            // value={searchInputValue}
            //         onChange={(e) => {
            //           setSearchInputValue(e.target.value);
            //         }}
            //         ref={inputRef}
            //         onFocus={() => setIsFocus(true)}
						// onBlur={() => {
						// 	if (!isHovered) {
						// 		setIsFocus(false);
						// 	}
						// }}
            value={searchInputValue}
            onChange={headerSearchHandler}
            onClick={()=>setShowMenuOptions(!showMenuOptions)}
          />
          <SearchIcon 
          sx={{"&:hover":{cursor:"pointer"}}}
          onClick={()=>{
            if(location.pathname == "/dashBoard"){
              dispatch(filterProductByCityAction(searchInputValue.toLowerCase()))
              setShowMenuOptions(false)
              setSearchInputValue("")
              setlogoutRender(!logoutRender)
            }else{
              dispatch(filterProductByCityAction(searchInputValue.toLowerCase()))
              setSearchInputValue("")
            setShowMenuOptions(false)
            navigate("/dashBoard")
            }
          }}
          />
          <CloseIcon onClick={()=>{
            setShowSmallScreenSearch(false)
            setIsFocus(false);
          }}
          sx={{
            fontSize:"30px"
          }}
          />
           <Typography
                sx={{
                   position:"absolute",
                   top:"102%",
                   left:"0px",
                   zIndex:19999,
                   width:"100%",
                   backgroundColor:"white",
                   height:{xs:placesName.length < 5 ? "fit-content" :"30vh",md:placesName.length < 5 ? "fit-content" :"40vh"},
                   overflow:"auto",
                   display:showMenuOptions ? "flex" : "none" ,
                   flexDirection:"column",
              }}
                >
        {placesName.map((option,index) => (
                      <MenuItem key={index} value={option}  
                      onClick={()=>{
                        if(location.pathname == "/dashBoard"){
                          dispatch(filterProductByCityAction(option.toLowerCase()))
                          setShowMenuOptions(false)
                          setSearchInputValue("")
                          setlogoutRender(!logoutRender)
                        }else{
                          dispatch(filterProductByCityAction(option.toLowerCase()))
                          setSearchInputValue("")
                        setShowMenuOptions(false)
                        navigate("/")
                        }
                      }}
                      >
                         {option}
                      </MenuItem>
                    ))}
        </Typography>
      </Box>

      {/* NearBy Drawer */}
      <Drawer
        anchor={"left"}
        open={NearBystate["left"]}
        onClose={NearbyToggleDrawer("left", false)}
      >
        {NearByModal("left")}
      </Drawer>

      {/* Recommendation Drawer */}
      <Drawer
        anchor={"left"}
        open={Recommendationstate["left"]}
        onClose={RecommendationToggleDrawer("left", false)}
      >
        {recommendationModal("left")}
      </Drawer>

      {/* Attractions Drawer */}
      <Drawer
        anchor={"left"}
        open={AttractionsState["left"]}
        onClose={AttractionsToggleDrawer("left", false)}
      >
        {AttractionsModal("left")}
      </Drawer>

      {/* unique Experience Drawer */}
      <Drawer
        anchor={"left"}
        open={UniqueExperienceState["left"]}
        onClose={UniqueExperienceToggleDrawer("left", false)}
      >
        {uniqueExperienceModal("left")}
      </Drawer>

      {/* Travel, TRansportaion & services Drawer */}
      <Drawer
        anchor={"left"}
        open={TravelTransportState["left"]}
        onClose={Travel_TransportationToggleDrawer("left", false)}
      >
        {Travel_Transport_serviceModal("left")}
      </Drawer>

      {/* Tour , sightSeeing and cruises Drawer */}
      <Drawer
        anchor={"left"}
        open={TourSightSeeingState["left"]}
        onClose={Tour_SightSeeingToggleDrawer("left", false)}
      >
        {Tour_sightseeing_Modal("left")}
      </Drawer>

      {/* Ticket and Passes Drawer */}
      <Drawer
        anchor={"left"}
        open={Ticket_PassesState["left"]}
        onClose={Ticket_PassesToggleDrawer("left", false)}
      >
        {Ticket_PassesModal("left")}
      </Drawer>

      {/* Seasonal & special Ocassions Drawer */}
      <Drawer
        anchor={"left"}
        open={Seasonal_OccasionState["left"]}
        onClose={Seasonal_special_occasionsToggleDrawer("left", false)}
      >
        {Seasonal_special_oCCasionModal("left")}
      </Drawer>

      {/* OutDoor Activites Drawer */}
      <Drawer
        anchor={"left"}
        open={OutDoorActivitiesState["left"]}
        onClose={OutDoor_ActivitesToggleDrawer("left", false)}
      >
        {outDoorActivitesModal("left")}
      </Drawer>

      {/* Food And Drink Drawer */}
      <Drawer
        anchor={"left"}
        open={FoodDrinkState["left"]}
        onClose={Food_DrinkToggleDrawer("left", false)}
      >
        {Food_DrinkModal("left")}
      </Drawer>

      {/* classes and workshops Drawer */}
      <Drawer
        anchor={"left"}
        open={Classes_WorkshopState["left"]}
        onClose={Classes_WorkshopToggleDrawer("left", false)}
      >
        {classes_workShopsModal("left")}
      </Drawer>

      {/* Art And culture  Drawer */}
      <Drawer
        anchor={"left"}
        open={ArtCultureState["left"]}
        onClose={Art_CultureToggleDrawer("left", false)}
      >
        {Art_cultureModal("left")}
      </Drawer>

      {/* Main Drawer */}
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>


      {/* account, signup and login menuitems */}
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          onClick={() => navigate("/signup")}
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("SignUp")}
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/login")}
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("Login")}
        </MenuItem>
      </Menu>


      {/* user name, user Profle and logOut menu items */}
      <Menu
        id="basic-menu"
        anchorEl={anchorElState}
        open={UserProfileOpen}
        onClose={handleUserProfileClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
          onClick={()=>{
            localStorage.removeItem("accessToken")
            if(location.pathname == "/"){
              setlogoutRender(!logoutRender)
              setAnchorElState(null);
              navigate("/")
            }else{
              navigate("/")
            }
          }}
        >
          {t("LOGOUT")}
        </MenuItem>
        <MenuItem
          onClick={() => navigate("/userProfile")}
          sx={{
            fontSize: { xs: "14px", md: "16px" },
          }}
        >
          {t("Profile")}
        </MenuItem>
      </Menu>


    </Box>
  );
};

export default Header;
