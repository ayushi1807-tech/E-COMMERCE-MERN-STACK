import { useContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Registration from './pages/Registration'
import Login from './pages/Login'
import Home from './pages/Home'
import Nav from './component/Nav'
import { userDataContext } from './context/Usercontex'

function App() {
 let {userData} = useContext(userDataContext)
  return (
    <>
     {userData && <Nav />}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Registration/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </>
  )
}

export default App
