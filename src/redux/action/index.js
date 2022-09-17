
//  adding adults number for tour
export const addAdults = (payload) => {
    return {
        type:"addAdult",
        payload
    }
}

//  removing adults number for tour
export const removeAdults = (payload) => {
    return {
        type:"removeAdult",
        payload
    }
}

//  adding child number for tour
export const addChild = (payload) => {
    return {
        type:"addChild",
        payload
    }
}

//  removing adults number for tour
export const removeChild = (payload) => {
    return {
        type:"removeChild",
        payload
    }
}


// tourBookingDate
export const tourBookingDate = (payload) => {
    const splitItems = payload.toString().split(" ")
    const [BookDay, BookMonth, BookDate, BookYear, BookTime ] = splitItems
    return {
        type:"booking_date_day",
        payload:{
            BookDate,
            BookDay,
            BookMonth,
            BookYear,
            BookTime
        }
    }
}



// travelerDetails
// firstName
export const addFirstName = (payload) => {
    return {
        type:"firstName",
        payload
    }
} 

// LastName
export const addLastName = (payload) => {
    return {
        type:"lastName",
        payload
    }
}


// specialRequirements
export const specialRequirements = (payload) => {
    return {
        type:"specialRequirements",
        payload
    }
}


// CardholderName
export const CardholderName = (payload) => {
    return {
        type:"CardholderName",
        payload
    }
}


// CreditCardNumber
export const CreditCardNumber = (payload) => {
    return {
        type:"CreditCardNumber",
        payload
    }
}

// ExpirationMonth
export const ExpirationMonth = (payload) => {
    return {
        type:"ExpirationMonth",
        payload
    }
}

// Expirayyear
export const Expirayyear = (payload) => {
    return {
        type:"Expirayyear",
        payload
    }
}

// SecurityCode
export const SecurityCode = (payload) => {
    return {
        type:"SecurityCode",
        payload
    }
}

// Country
export const Country = (payload) => {
    return {
        type:"Country",
        payload
    }
}


// SaveCreditCard
export const SaveCreditCard = (payload) => {
    return {
        type:"SaveCreditCard",
        payload
    }
}

// EmailAddress
export const EmailAddress = (payload) => {
    return {
        type:"EmailAddress",
        payload
    }
}

// PhoneNumber
export const PhoneNumber = (payload) => {
    return {
        type:"PhoneNumber",
        payload
    }
}

// PromoCode
export const PromoCode = (payload) => {
    return {
        type:"PromoCode",
        payload
    }
}

// countryCode
export const countryCode = (payload) => {
    return {
        type:"countryCode",
        payload
    }
}



//  signUpdetails
// email info
export const signUpEmail = (payload) => {
    return {
        type:"signupEmail",
        payload
    }
}


// firstName info
export const signUpFirstName = (payload) => {
    return {
        type:"signupFirstName",
        payload
    }
}


// lastName info
export const signUpLastName = (payload) => {
    return {
        type:"signupLastName",
        payload
    }
}


// PhoneNumber info
export const signUpPhoneNumber = (payload) => {
    return {
        type:"signupPhoneNumber",
        payload
    }
}



// password info
export const signUpPassword = (payload) => {
    return {
        type:"signupPassword",
        payload
    }
}


//  phoneNumberCode
export const phoneNumberCode = (payload) => {
    return {
        type:"phoneNumberCode",
        payload
    }
}



//  User Login details
export const LoginEmail = (payload) => {
    return {
        type:"loginEmail",
        payload
    }
}


// user Login Password
export const loginPassword = (payload) => {
    return {
        type:"loginPassword",
        payload
    }
}


//  product list total
export const productAction = (payload) => {
    return {
        type:"productList",
        payload
    }
}

// currency
export const currencyCodeAction = (payload) =>{
    return {
        type:"currencyCode",
        payload
    }
}

// currency conversion
export const currencyConversionAction = (payload) => {
    return {
        type:"currencyConversion",
        payload
    }
}

// singleProduct selected
export const individualProductAction = (payload) => {
    return {
        type:"individualProduct",
        payload
    }
}


//  current user details
export const currentUserAction = (payload) => {
    return {
        type:"currentUserDetails",
        payload
    }
}

// adding item to cart
export const cartItemAction = (payload) => {
    return {
        type:"addCartItem",
        payload
    }
} 


//  dupliacte list of product to display in dashboard
export const displayProductAction = (payload) => {
    return {
        type:"addProductList",
        payload
    }
}



export const countryListAction = (payload) => {
    return {
        type:"countryList",
        payload
    }
}



export const filterProductByCityAction = (payload) => {
    return {
        type:"filterProduct",
        payload
    }
}

export const london = (payload) => {
    return {
        type:"london",
        payload
    }
}
export const amsterdam = (payload) => {
    return {
        type:"amsterdam",
        payload
    }
}
export const dubai = (payload) => {
    return {
        type:"dubai",
        payload
    }
}
export const edenburgh = (payload) => {
    return {
        type:"edenburgh",
        payload
    }
}
export const florence = (payload) => {
    return {
        type:"florence",
        payload
    }
}
export const istanbul = (payload) => {
    return {
        type:"istanbul",
        payload
    }
}
export const krakow = (payload) => {
    return {
        type:"krakow",
        payload
    }
}
export const raykjavik = (payload) => {
    return {
        type:"raykjavik",
        payload
    }
}
export const rome = (payload) => {
    return {
        type:"rome",
        payload
    }
}
export const venice = (payload) => {
    return {
        type:"venice",
        payload
    }
}

export const selectedBookedProductAction = (payload) => {
    return {
        type:"selectedProduct",
        payload
    }
}


//  vertical images in tour details page
export const verticalImagesAction = (payload) => {
    return {
        type:"VerticalImages",
        payload
    }
} 

export const webSiteLanguageAction = (payload) => {
    return {
        type:"websiteLanguage",
        payload
    }
}