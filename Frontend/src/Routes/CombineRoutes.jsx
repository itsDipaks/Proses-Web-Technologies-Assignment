import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import List from '../Pages/List'
import Edit from '../Components/Edit'

const CombineRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/list' element={<List/>}/>
            <Route path='/list/:id' element={<Edit/>}/>
        </Routes>
    </div>
  )
}

export default CombineRoutes