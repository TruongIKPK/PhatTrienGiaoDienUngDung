import React from "react";
import { useState } from 'react'
import './App.css'
import Header, { menuList } from './components/Header'
import Footer from './components/Footer'
import MenuList from './components/MenuList'
import BookTable from './components/BookTable'
import { MenuProvider } from "./store/MenuContext";
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <>
      <MenuProvider>
        <Header />
        <Routes>
          {menuList.map((item, index) => (
            <Route key={index} path={item.link} element={React.createElement(item.tagName)}></Route>
          ))}
          {/* Duyệt qua submenu */}
          {menuList.map((item) =>
            item.subMenu
              ? item.subMenu.map((subItem, subIndex) => (
                <Route key={`sub-${subIndex}`} path={subItem.link} element={React.createElement(subItem.tagName)} />
              ))
              : null
          )}
          <Route path="/booktable" element={<BookTable />}></Route>
          {/* Routes cho submenu */}
          {/* <Route path="/menu/starter" element={React.createElement(item.subMenu.)} />
          <Route path="/menu/main" element={<MainCourse />} />
          <Route path="/menu/dessert" element={<Dessert />} /> */}
        </Routes>
        <Footer />
      </MenuProvider>
    </>
  )
}
export default App
