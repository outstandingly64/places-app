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
import { DUMMY_PLACES } from '../../Shared/DUMMY/dummy-objects';

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
