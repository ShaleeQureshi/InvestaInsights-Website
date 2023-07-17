import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { Login_Page, Member_Resources_Pages } from "../views";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/login" element={<Login_Page />} />
        <Route path="/member-resources" element={<Member_Resources_Pages />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
