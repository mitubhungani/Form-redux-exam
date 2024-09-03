import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AddUser from '../pages/AddUser'

const AllRoute = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/adduser' element={<AddUser/>}></Route>
        </Routes>
    </div>
  )
}

export default AllRoute