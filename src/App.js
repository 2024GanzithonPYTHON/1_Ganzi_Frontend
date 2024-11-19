import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import GlobalStyle from "./pages/GlobalStyles";
import Signup from "./pages/Signup";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import My from "./pages/My";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my" element={<My />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
