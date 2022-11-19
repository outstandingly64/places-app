import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import MainNavigation from "./Shared/components/Navigation/MainNavigation";
import LoadingSpinner from "./Shared/components/UIElements/LoadingSpinner";
//import Users from "./User/pages/Users";
//import UserPlaces from "./Places/pages/UserPlaces";
//import NewPlace from "./Places/pages/NewPlace";
//import UpdatePlace from "./Places/pages/UpdatePlace";
//import Authenticate from "./User/pages/Authenticate";
import { AuthContext } from "./Shared/context/auth-context";
import { useAuth } from "./Shared/Hooks/auth-hook";

const Users = React.lazy(() => import("./User/pages/Users"));
const UserPlaces = React.lazy(() => import("./Places/pages/UserPlaces"));
const NewPlace = React.lazy(() => import("./Places/pages/NewPlace"));
const UpdatePlace = React.lazy(() => import("./Places/pages/UpdatePlace"));
const Authenticate = React.lazy(() => import("./User/pages/Authenticate"));

const App = () => {
  const { token, login, logout, userId } = useAuth();

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
      value={{
        isLoggedIn: !!token,
        token: token,
        userId: userId,
        login: login,
        logout: logout,
      }}
    >
      <Router>
        <MainNavigation />
        <main>
            <Suspense
              fallback={
                <div className="center">
                    <LoadingSpinner />
                  </div>
              }
              >
              <Routes>
              {routes}
          </Routes>
            </Suspense>
        </main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
