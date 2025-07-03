import { useContext, useState } from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Nav from "./component/Nav";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import { userDataContext } from "./context/Usercontex";

function App() {
  let { userData } = useContext(userDataContext);
  let location = useLocation();
  return (
    <>
      {userData && <Nav />}
      <Routes>


        <Route path="/login" 
        element={
        userData ? (
      <Navigate to="/" />
    ) : (
      <Login />
    )} />


        <Route path="/signup" 
        element={userData ? (
      <Navigate to="/" />
    ) : (
      <Registration />
    )}/>

        <Route path="/" element={userData ? <Home/> : <Navigate to="/login" state={{from : location.pathname}}/>} />


        <Route path="/about" element={userData ? <About/> : <Navigate to="/login" state={{from : location.pathname}}/>} />


        <Route path="/collection" element={userData ? <Collections/> : <Navigate to="/login" state={{from : location.pathname}}/>} />

        <Route path="/product" element={userData ? <Product/> : <Navigate to="/login" state={{from : location.pathname}}/>} />


        <Route path="/contact" element={userData ? <Contact/> : <Navigate to="/login" state={{from : location.pathname}}/>} />
      </Routes>
    </>
  );
}

export default App;
