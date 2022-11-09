 import React from 'react'
 import { Route, Routes, Link } from 'react-router-dom';
// import { BottomNav } from '../components/Navbar/BottomNav';
// import { Navbar } from '../components/Navbar/Navbar';
// import { TopNav } from '../components/Navbar/TopNav';
import { WomenPage } from '../pages/women/WomenPage';
//  import {WomenPage}  from "../pages/women/WomenPage"
// import { Footer } from "./components/Footer/Footer"
// import { Navbar } from "./components/Navbar/Navbar"
const MainRoutes = () => {
  return (
   <>
   {/* <TopNav/> */}
   {/* <Navbar/> */}
    <Link to="/women"></Link>
    
     <Routes>
   <Route path="/" element={<WomenPage/>}> </Route>
   </Routes> 
   {/* <Footer/> */}
   </> 
    
  
  )
 }

export default MainRoutes;