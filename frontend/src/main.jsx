import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import AuthContext from "./context/authContext.jsx";
import Usercontex from "./context/Usercontex.jsx";
import ShopContext from "./context/ShopContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthContext>
      <Usercontex>
        <ShopContext>
          <App />
        </ShopContext>
      </Usercontex>
    </AuthContext>
  </BrowserRouter>
);
