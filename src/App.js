import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import StorePage from "./components/StorePage";
import CartPage from "./components/CartPage";
import Register from "./components/Register";
import Login from "./components/Login";
import Help from "./components/Help";
import { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");

  return (
    <div>
      <Header username={username} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUsername={setUsername} />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </div>
  );
};

export default App;
