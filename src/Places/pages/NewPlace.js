import React, {useContext} from "react";

import Input from "../../Shared/components/FormElements/Input";
import Button from "../../Shared/components/FormElements/Button";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Utilities/validators";
import { useForm } from '../../Shared/Hooks/form-hook';
import { useHttpClient } from "../../Shared/Hooks/http-hook"; 
import { AuthContext } from "../../Shared/context/auth-context";
import "./PlaceForm.css";

const NewPlace = () => {
  const auth = useContext(AuthContext)
  const {isLoading, error, sendRequest, clearError} = useHttpClient();

  const NEW_PLACE_INPUTS = {
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
  const [formState, inputHandler] = useForm(NEW_PLACE_INPUTS, false);

  const submitHandler = async (event) => {
    event.preventDefault();
    try{
      await sendRequest(
        'http://localhost:5000/api/places',
        'POST',
        JSON.stringify({
          title: formState.inputs.title.value,
          description: formState.inputs.description.value,
          address: formState.inputs.address.value,
          creator: auth.userId
        }),
        {
          'Content-Type': 'application/json'
        }
        );
        // TODO: after successful API POST request, we must redirect the user to a different page
    }catch(err){

    }
    
  };

  return (
    <>
    <ErrorModal error={error} onClear={clearError}/>
    <form className="place-form" onSubmit={submitHandler}>
      {isLoading && <LoadingSpinner asOverlay/>}
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
    </>
  );
};

export default NewPlace;

/**
 * type 'cmmb' for comment block like this one
 * type 'nfn' for named function
 */
