import {combineReducers} from "redux"
import {addTravelMembers, booking_date_day, travelDetails, signUpInfo, loginDetails, totalProductReducer, currentUserReducer, singleProductReducer, cratItemReducer, displayProductReducer, countryListReducer, filterProductByCityReducer, productImageReducer, selectedBookedProductReducer, verticalImagesReducer} from "./reducer"

const rootReducer = combineReducers({
    addTravelMembers,
    booking_date_day,
    travelDetails,
    signUpInfo,
    loginDetails,
    totalProductReducer,
    currentUserReducer,
    singleProductReducer,
    cratItemReducer,
    displayProductReducer,
    countryListReducer,
    filterProductByCityReducer,
    productImageReducer,
    selectedBookedProductReducer,
    verticalImagesReducer
})

export default  rootReducer