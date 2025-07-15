import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
//outlet -  layout ko base ki tarah use karega means header same footer same bs beech ki cheeze change hote rhengi

function Layout() {
  return (
    <>
    <Header/> 
    <Outlet />
    <Footer />
    </>
  )
} // header footer same rahenge aur beech ki cheeze change hoti rahegi

export default Layout
//iska kaam h components ko render karna