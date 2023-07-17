import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login_Page, Member_Resources_Pages } from "../views";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login_Page />} />
        <Route path="/member-resources" element={<Member_Resources_Pages />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
