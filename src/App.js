import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import GlobalStyle from "./pages/GlobalStyles";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Recommend from "./pages/Recommend"
import RecomModal from "./pages/RecomModal";
import Favorite from "./pages/Favorite";
import FavoriteModal from "./pages/FavoriteModal";
import Search from "./pages/Search";
import MyreviewModal from"./pages/MyreviewModal";



function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/Recommend" element={<Recommend />} />
        <Route path="/RecomModal" element={<RecomModal />} />
        <Route path="/Favorite" element={<Favorite />} />
        <Route path="/FavoriteModal" element={<FavoriteModal />} />
        <Route path="/MyreviewModal" element={<MyreviewModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
