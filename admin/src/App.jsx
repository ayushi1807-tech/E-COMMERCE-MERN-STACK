import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Add from "./pages/Add";
import List from "./pages/List";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import { useContext } from "react";
import { adminDataContext } from "./context/AdminContext";

function App() {
  const { adminData } = useContext(adminDataContext);

  return (
    <>
      
      {!adminData ? (
        <Login />
      ) : (
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add" element={<Add />} />
            <Route path="/list" element={<List />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
