import React from "react";

import Card from "../../Shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import "./PlaceList.css";

const PlaceList = (props) => {
  const noPlacesJSX = (
    <div className="place-list center">
      <Card>
        <h2>No Places Found. Go Conquer One And Return With The Spoils</h2>
        <button>Share Place</button>
      </Card>
    </div>
  );

  if (props.items.length === 0) {
    return noPlacesJSX;
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <PlaceItem 
        key={place.id}
        id={place.id}
        image={place.imageUrl}
        title={place.title}
        description={place.description}
        address={place.address}
        creatorID={place.creator}
        coordiantes={place.location}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
