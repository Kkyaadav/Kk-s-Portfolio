import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router'
function layout() {
  return (
    <div className='dark:bg-black dark:text-white '>
    <Header/>
    <Outlet />
    <Footer/>
    </div>
  )
}

export default layout