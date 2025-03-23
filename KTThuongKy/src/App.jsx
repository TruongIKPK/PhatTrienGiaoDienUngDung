import React from "react";
import { useState } from 'react'
import './App.css'
import Header, {menuList} from './components/Header'
import Footer from './components/Footer'
import MenuList from './components/MenuList'
import BookTable from './components/BookTable'
import { MenuProvider } from "./store/MenuContext";
import Home from './pages/Home'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom'
function App() {
  return (
    <>
    <MenuProvider>
      <Header/>
      <Routes>
          {menuList.map((item, index)=>(
            <Route key={index} path={item.link} element={React.createElement(item.tagName)}></Route>
          ))}
          <Route path="/booktable" element={<BookTable/>}></Route>
      </Routes>
      <Footer/>
    </MenuProvider>
    </>
  )
}

export default App
