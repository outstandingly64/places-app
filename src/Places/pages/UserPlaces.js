import React from "react";
import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from '../../Shared/DUMMY/dummy-objects';

import PlaceList from "../components/PlaceList";

const UserPlaces = (props) => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  //TODO: HOOK UP TO BACKEND
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
