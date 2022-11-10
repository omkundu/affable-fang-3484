import React from 'react'
import {Routes , Route} from "react-router-dom"
import Delivery from './Delivery'

const MainRoutes = () => {
  return (
    <Routes>
      <Route path='/delivery' element={<Delivery/>} />
    </Routes>
  )
}

export default MainRoutes