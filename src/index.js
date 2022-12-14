import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css'; //Dont Uncomment this
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { store } from "../src/Redux/store";
import { Provider } from "react-redux";


//Login With Google
import { GoogleOAuthProvider } from '@react-oauth/google';
const ClientID = "203777550442-g8l716tt85eb7mm5pejp6ndtrob3mnl7.apps.googleusercontent.com" 
//........................

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={ClientID}> 
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
        <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
