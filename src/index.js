import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./redux/Store";
import { createTheme, ThemeProvider } from "@mui/material";
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import En from "./locales/english/english.json"
import TRK from "./locales/turkey/turkey.json"



const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    fontFamily: ['Poppins'].join(",")
  },
});

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: En
      },
      tr: {
        translation: TRK
      },
    },
    lng: localStorage.getItem("lang") == null ? "en" : localStorage.getItem("lang").toLowerCase(), // if you're using a language detector, do not define the lng option
    fallbackLng: "en",

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  });


const changeWebsiteLanguage = (lang) => {
  return () => {
    i18n.changeLanguage(lang)
    localStorage.setItem("lang",lang)
  }
}


// function App() {
//   const { t } = useTranslation();


//   useEffect(() => {
//     i18n.changeLanguage(localStorage.getItem("lang") || "en")
//   },[])

//   return <>
//     <h2>{t('Welcome to React')}</h2>
//     <button onClick={changeWebsiteLanguage("en")}>English</button>
//     <button onClick={changeWebsiteLanguage("tr")}>Turkey</button>
//   </>;
// }






root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={AppStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
