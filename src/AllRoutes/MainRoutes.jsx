import React from 'react';
import { Routes, Route } from "react-router-dom"
// import { Footer } from "../components/Footer/Footer"
// import { Login } from '../Components/Login/Login';
import  {LoginAndRegister} from "../Components/Login/LoginAndRegister"
// import {MenPage} from "../Pages/MenPage/MenPage"



// import { Login } from '../Components/Login/Login';

import {MenPage} from "../Pages/MenPage/MenPage"
import { Login } from '../Components/Login/Login';


import { WomenPage } from '../Pages/women/WomenPage';
import Delivery from "../Pages/Delivery"

import PrivateRoute from './PrivateRoutes/PrivateRoute';



function MainRoutes() {
  return (
    <Routes>

      <Route path='/' element={
          <WomenPage />
      } />
      {/* <Route path="/men" element={<MenPage/>}> </Route> */}
      <Route path='/login' element={<LoginAndRegister/>} />
      <Route path='/delivery' element={<Delivery/>} />
      

      <Route path='/' element={<WomenPage /> } />
      <Route path="/men" element={<MenPage/>}> </Route>

      <Route path='/login' element={<LoginAndRegister/>} />
      <Route path='/delivery' element={<Delivery/>} />
     


    </Routes>
  );
}

export default MainRoutes;

