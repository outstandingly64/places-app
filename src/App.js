import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./Shared/components/Navigation/MainNavigation";
import NewPlace from "./Places/pages/NewPlace";
import UpdatePlace from "./Places/pages/UpdatePlace";
import UserPlaces from "./Places/pages/UserPlaces";
import Users from "./User/pages/Users";
import Authenticate from "./User/pages/Authenticate";
import { AuthContext } from "./Shared/context/auth-context";

const App = () => {
  /**
   * Authentication STATE:
   */
  const [token, setToken] = useState(false);
  const [userId, setUserId] = useState(false);

  const login = useCallback((uid, token) => {
    setToken(token);
    setUserId(uid);
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
  }, []);

  /**
   * One set of routes exists at a time
   * determined by current authentication state
   * (isLoggedIn or !isLoggedIn)
   */
  let routes;

  if (token) {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/places/new" exact element={<NewPlace />} />
            <Route path="/places/:placeId" element={<UpdatePlace />} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </>
    );
  } else {
    routes = (
      <>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/auth" exact element={<Authenticate />} />
        <Route path="/*" element={<Navigate to="/auth" replace />} />
      </>
    );
  }

  return (
    <AuthContext.Provider
      value={{ isLoggedIn: !!token, token: token, userId: userId, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          <Routes>
            {routes}
          </Routes>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
