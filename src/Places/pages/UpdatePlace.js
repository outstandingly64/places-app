import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Input from "../../Shared/components/FormElements/Input";
import Button from "../../Shared/components/FormElements/Button";
import Card from '../../Shared/components/UIElements/Card';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from "../../Shared/Utilities/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import "./PlaceForm.css";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Angkor Wat",
    description:
      "Angkor Wat was built by the Khmer King Suryavarman II in the early 12th century in Yaśodharapura, the capital of the Khmer Empire, as his state temple and eventual mausoleum.",
    imageUrl:
      "https://imgs.search.brave.com/z2IZQu8rxfZRMZi6GNziv6OSRDszQL-vwrapC069utM/rs:fit:1200:802:1/g:ce/aHR0cHM6Ly9jZG4u/YXJzdGVjaG5pY2Eu/bmV0L3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDE4LzEwL2FuZ2tv/clRPUC5qcGc",
    address: "Krong Siem Reap, Cambodia",
    location: {
      lat: 13.4124693,
      lng: 103.864797,
    },
    creator: "u3",
  },
  {
    id: "p2",
    title: "Tenochtitlan",
    description:
      "The city was built on an island in what was then Lake Texcoco in the Valley of Mexico. The city was the capital of the expanding Aztec Empire in the 15th century until it was captured by the Spanish in 1521. At its peak, it was the largest city in the pre-Columbian Americas.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/El_templo_mayor_en_Tenochtitlan.png/800px-El_templo_mayor_en_Tenochtitlan.png",
    address:
      "Historic center of Mexico City, Centro, Mexico City, CDMX, Mexico",
    location: {
      lat: 19.4337383,
      lng: -99.1454316,
    },
    creator: "u1",
  },
  {
    id: "p3",
    title: "Alexandria",
    description:
      "Alexandria is a port city located on the Mediterranean Sea in northern Egypt founded in 331 BCE by Alexander the Great.",
    imageUrl:
      "https://m.economictimes.com/thumb/msid-68970748,width-1200,height-900,resizemode-4,imgsize-1607403/1.jpg",
    address: "Alexandria, Alexandria Governorate, Egypt",
    location: {
      lat: 31.2242387,
      lng: 29.884846,
    },
    creator: "u2",
  },
];

const UpdatePlace = () => {
const [isLoading, setIsLoading] = useState(true);

  const placeId = useParams().placeId;

  const UPDATE_PLACE_INPUTS = {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
  };

  const [formState, inputHandler, setFormData] = useForm(
    UPDATE_PLACE_INPUTS,
    false
  );

  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(()=>{
    if(identifiedPlace){
        setFormData({
                title: {
                    value: identifiedPlace.title,
                    isValid: true,
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true,
                },
            }, true);
            setIsLoading(false);
    }
    
  }, [setFormData, identifiedPlace]);

  

  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
  };

  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
            <h2>Could not find conquered place!</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <h2>LOADING...</h2>
      </div>
    );
  }

  return (
     <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description of at least 5 characters."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
