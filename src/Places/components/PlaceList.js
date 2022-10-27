import React from "react";

import Card from "../../Shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";
import Button from '../../Shared/components/FormElements/Button';

import "./PlaceList.css";

/**
 * OTHER COMPONENTS USING THIS:
 * 1. <UserPlaces/>
 */

const PlaceList = (props) => {
  const noPlacesJSX = (
    <div className="place-list center">
      <Card>
        <h2>No Places Found. Go Conquer One And Return With The Spoils</h2>
        <Button to='/places/new'>Share Place</Button>
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
        image={place.image}
        title={place.title}
        description={place.description}
        address={place.address}
        creatorID={place.creator}
        coordinates={place.location}
        royalPronoun={place.creatorPronoun}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
