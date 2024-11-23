import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import GlobalStyle from "./pages/GlobalStyles";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import FavEdit from "./pages/FavEdit";
import RevCheck from "./pages/RevCheck";
import FavoriteModal from "./pages/FavoriteModal";
import Search from "./pages/Search";
import Favorite from "./pages/Favorite";
import My from "./pages/My";
import Recommend from "./pages/Recommend";
import Reward from "./pages/Reward";
import Complete from "./pages/Complete";
import MainModal from "./pages/MainModal";
import RecomModal from "./pages/RecomModal";
import ReviewModal from "./pages/ReviewModal";

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/my" element={<My />} />
        <Route path="/recommend" element={<Recommend />} />
        <Route path="/main" element={<Main />} />
        <Route path="/favorite/edit" element={<FavEdit />} />
        <Route path="/recommend/review" element={<RevCheck />} />{" "}
        <Route path="/FavoriteModal" element={<FavoriteModal />} />
        <Route path="/reward" element={<Reward />} />
        <Route path="/complete" element={<Complete />} />
        <Route path="/MainModal" element={<MainModal />} />
        <Route path="RecomModal" element={<RecomModal />} />
        <Route path="ReviewModal" element={<ReviewModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
