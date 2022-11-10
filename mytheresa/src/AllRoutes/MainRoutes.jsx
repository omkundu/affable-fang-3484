 import React from 'react'
 import { Route, Routes, Link } from 'react-router-dom';
import WomenPage  from "../Pages/women/WomenPage";
import { LoginAndRegister } from "../Login/LoginAndRegister"
import WomenProducts from '../Pages/WomenProducts'
const MainRoutes = () => {
  return (
   <>    
     <Routes>
   <Route path="/" element={<WomenPage/>}> </Route>
   <Route path="/WomenProducts" element={<WomenProducts/>}> </Route>

   <Route path='/Register' element={<LoginAndRegister/>}></Route>
   </Routes> 
  
   </> 
    
  
  )
 }

 export default MainRoutes

