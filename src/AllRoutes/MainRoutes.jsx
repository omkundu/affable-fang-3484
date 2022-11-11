import React from 'react';
import { Routes, Route } from "react-router-dom"
import { Footer } from "../components/Footer/Footer"
import { Login } from '../components/Login/Login';
import { WomenPage } from '../Pages/women/WomenPage';
 import {MenPage} from "../Pages/MenPage/MenPage"
import Delivery from './Delivery'

import PrivateRoute from './PrivateRoutes/PrivateRoute';


function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={
          <WomenPage />
      } />
      <Route path="/men" element={<MenPage/>}> </Route>
      <Route path='/login' element={<Login/>} />
      <Route path='/delivery' element={<Delivery/>} />

    </Routes>
  //  <Footer/>
  );
}

export default MainRoutes;

