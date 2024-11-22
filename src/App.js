import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/Login";
import GlobalStyle from "./pages/GlobalStyles";
import Main from "./pages/Main";
import RecomModal from "./pages/RecomModal";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/RecomModal" element={<RecomModal />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
