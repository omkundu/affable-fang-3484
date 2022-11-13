import React from 'react';
import { Routes, Route } from "react-router-dom"

import { LoginAndRegister } from "../Components/Login/LoginAndRegister"
import { MenPage } from "../Pages/MenPage/MenPage"
import { WomenPage } from '../Pages/women/WomenPage';
import Delivery from "../Pages/Delivery"
import WomenProducts from "../Pages/WomenProducts"
import { ProductDetailsPage } from "../Pages/ProductDetailsPage"

import PrivateRoute from './PrivateRoutes/PrivateRoute';


function MainRoutes() {
  return (
    <Routes>

      <Route path='/' element={<WomenPage />} />
      <Route path='/' element={<WomenPage />} />
      <Route path="/men" element={<MenPage />}> </Route>
      <Route path='/login' element={<LoginAndRegister />} />
      <Route path='/delivery' element={<Delivery />} />
      <Route path='/womenproducts' element={<WomenProducts />} />
      <Route path='/WomenProducts/:id' element={<ProductDetailsPage />} />

    </Routes>
  );
}

export default MainRoutes;

