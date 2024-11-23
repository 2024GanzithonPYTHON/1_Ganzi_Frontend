import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import GlobalStyle from "./pages/GlobalStyles";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import MainModal from "./pages/MainModal";
import FavoriteModal from "./pages/FavoriteModal";
import RecomModal from "./pages/RecomModal";
import ReviewModal from "./pages/ReviewModal";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/MainModal" element={<MainModal />} />
        <Route path="/FavoriteModal" element={<FavoriteModal />} />
        <Route path="RecomModal" element={<RecomModal />} />
        <Route path="ReviewModal" element={<ReviewModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
