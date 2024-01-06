import React from 'react'
import { Routes, Route as R } from 'react-router-dom'
import Home from '../Pages/Home'
import Treanding from '../Pages/Treanding'

function Route() {
  return (
    <>
        <Routes>
            <R path='/' element={<Home/>}></R>
            <R path='/Treanding' element={<Treanding/>}></R>
        </Routes>
    </>
  )
}

export default Route