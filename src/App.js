import React from "react";
import { BrowserRouter as Router,
  Route, 
  Routes,
Navigate } from "react-router-dom";

import MainNavigation from './Shared/components/Navigation/MainNavigation';
import NewPlace from "./Places/pages/NewPlace";
import UpdatePlace from "./Places/pages/UpdatePlace";
import UserPlaces from './Places/pages/UserPlaces';
import Users from './User/pages/Users';

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Routes>
        <Route path="/" element={<Users />} />
        <Route path="/:userId/places" exact element={<UserPlaces />} />
        <Route path="/places/new" exact element={<NewPlace />} />
        <Route path="/places/:placeId" element={<UpdatePlace/>} />
        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
      </main>
    </Router>
  );
};

export default App;
