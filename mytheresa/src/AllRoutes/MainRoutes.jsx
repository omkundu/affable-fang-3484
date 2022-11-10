import WomenProducts from '../Pages/WomenProducts'


 import React from 'react'
 import { Route, Routes, Link } from 'react-router-dom';
// import  {WomenPage}  from '../pages/women/WomenPage';
import { LoginAndRegister } from "../Login/LoginAndRegister"
 const MainRoutes = () => {
  return (
   <>   
     <Routes>
        {/* <Route path="/" element={<WomenPage/>}> </Route> */}
        <Route path="/WomenProducts" element={<WomenProducts/>}></Route>
        <Route path='/Register' element={<LoginAndRegister/>}></Route>
    </Routes> 
  
   </> 
    
  
  )
 }

 export default MainRoutes;




