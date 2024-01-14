import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import {
  Member_Login_Page,
  Member_Resources_Pages,
  Login_Error_Page,
  Our_Portfolio,
  Home_Page,
  Teams_Page,
  Stock_Pitches_Page,
  Market_Research_Page,
  Transactional_Analysis_Page,
  Events_Page,
  Sponsor_Page,
  User_Form,
} from "../views";
import { onAuthStateChanged, signOut } from "@firebase/auth";
import { auth } from "./firebase/config";
import { HashLoader } from "react-spinners";
import { AuthContext, AuthProvider } from "./auth-context";
import PrivateRoute from "./private-route";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home_Page />} />
          <Route path="/portfolio" exact element={<Our_Portfolio />} />
          <Route path="/team" exact element={<Teams_Page />} />
          <Route path="/stock-pitches" exact element={<Stock_Pitches_Page />} />
          <Route
            path="/market-research"
            exact
            element={<Market_Research_Page />}
          />
          <Route
            path="/transactional-analysis"
            exact
            element={<Transactional_Analysis_Page />}
          />
          <Route path="/events" exact element={<Events_Page />} />
          <Route path="/sponsor" exact element={<Sponsor_Page />} />
          <Route path="/member-login" exact element={<Member_Login_Page />} />
          <Route path="/user-form" exact element={<User_Form />} />
          {/* Error Routes */}
          <Route path="/login-error" element={<Login_Error_Page />} />
          {/* Protected Routes */}
          <Route
            path="/member-resources"
            exact
            element={<PrivateRoute page="Member Resources" />}
          />
          <Route path="/admin" exact element={<PrivateRoute page="Admin" />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
