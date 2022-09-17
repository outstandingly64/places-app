import React from "react";

import Input from "../../Shared/components/FormElements/Input";
import Button from "../../Shared/components/FormElements/Button";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Utilities/validators";
import { useForm } from '../../Shared/Hooks/form-hook';
import "./PlaceForm.css";

const NewPlace = () => {
  const newPlaceInputs = {
    title: {
      value: "",
      isValid: false,
    },
    description: {
      value: "",
      isValid: false,
    },
    address: {
      value: "",
      isValid: false,
    },
  };

  // you can use any name you want when using array de-structuring
  const [formState, inputHandler] = useForm(newPlaceInputs, false);

  const submitHandler = (event) => {
    event.preventDefault();
    //TODO: This WILL be sent to a backend server later.
    console.log(formState.inputs);
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter valid title!"
        onInput={inputHandler}
      />
      <Input
        id="address"
        element="input"
        label="Conquered Place Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid place address!"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Conquered Place Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter valid place description containing at least 5 characters!"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;

/**
 * type 'cmmb' for comment block like this one
 * type 'nfn' for named function
 */
