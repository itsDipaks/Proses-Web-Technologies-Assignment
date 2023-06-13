import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import List from '../Pages/List'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list' element={<List/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes