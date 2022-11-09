
 import React from 'react'
 import { Route, Routes, Link } from 'react-router-dom';
// import { BottomNav } from '../components/Navbar/BottomNav';
// import { Navbar } from '../components/Navbar/Navbar';
// import { TopNav } from '../components/Navbar/TopNav';
import { WomenPage } from '../pages/women/WomenPage';
//  import {WomenPage}  from "../pages/women/WomenPage"
// import { Footer } from "./components/Footer/Footer"
// import { Navbar } from "./components/Navbar/Navbar"
import { LoginAndRegister } from "../Login/LoginAndRegister"
import HomePage from "./HomePage"
const MainRoutes = () => {
  return (
   <>
 
    <Link to="/women"></Link>
    
     <Routes>
   <Route path="/" element={<WomenPage/>}> </Route>
   <Route path='/Register' element={<LoginAndRegister/>}></Route>
   </Routes> 
  
   </> 
    
  
  )
 }

export default MainRoutes;

import React from 'react'
 import { Route, Routes, Link } from 'react-router-dom';
// import { BottomNav } from '../components/Navbar/BottomNav';
// import { Navbar } from '../components/Navbar/Navbar';
// import { TopNav } from '../components/Navbar/TopNav';
import { WomenPage } from '../pages/women/WomenPage';
//  import {WomenPage}  from "../pages/women/WomenPage"
// import { Footer } from "./components/Footer/Footer"
// import { Navbar } from "./components/Navbar/Navbar"
import { LoginAndRegister } from "../Login/LoginAndRegister"
import HomePage from "./HomePage"
const MainRoutes = () => {
  return (
  <>
    <Link to="/women"></Link>
    <Routes>
            <Route path="/" element={<WomenPage/>}> </Route>
            <Route path='/Register' element={<LoginAndRegister/>}></Route>

    </Routes>
    </>
  )
}

export default MainRoutes

