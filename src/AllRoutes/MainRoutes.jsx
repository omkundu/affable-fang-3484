import React from 'react';
import { Routes, Route } from "react-router-dom"

// import { Login } from '../Components/Login/Login';
import  {LoginAndRegister} from "../Components/Login/LoginAndRegister"

import { Login } from '../components/Login/Login';

import { WomenPage } from '../Pages/women/WomenPage';
import Delivery from './Delivery'

import PrivateRoute from './PrivateRoutes/PrivateRoute';


function MainRoutes() {
  return (
    <Routes>
      <Route path='/' element={
          <WomenPage />
      } />

      <Route path='/login' element={<LoginAndRegister/>} />
      <Route path='/delivery' element={""} />

      <Route path='/login' element={<Login/>} />
      <Route path='/delivery' element={<Delivery/>} />


    </Routes>
  );
}

export default MainRoutes;

