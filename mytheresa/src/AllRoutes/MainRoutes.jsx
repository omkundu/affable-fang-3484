// import React from 'react'
// import { Route, Routes } from 'react-router-dom'
// import { Login } from '../Login/Login'
// import { LoginAndRegister } from '../Login/LoginAndRegister'
// import { Register } from '../Login/Register'

import { Route, Routes } from "react-router-dom"
import { LoginAndRegister } from "../Login/LoginAndRegister"
import HomePage from "./HomePage"
const MainRoutes = () => {
  return (
    <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/Register' element={<LoginAndRegister/>}></Route>

    </Routes>
  )
}

export default MainRoutes