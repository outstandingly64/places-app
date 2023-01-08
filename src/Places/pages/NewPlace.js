import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../Shared/components/FormElements/Input";
import Button from "../../Shared/components/FormElements/Button";
import ErrorModal from "../../Shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../Shared/components/UIElements/LoadingSpinner";
import ImageUpload from "../../Shared/components/FormElements/ImageUpload";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Utilities/validators";
import { useForm } from "../../Shared/Hooks/form-hook";
import { useHttpClient } from "../../Shared/Hooks/http-hook";
import { AuthContext } from "../../Shared/context/auth-context";
import "./PlaceForm.css";

const NewPlace = () => {
  const auth = useContext(AuthContext);
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

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
    image: {
      value: null,
      isValid: false,
    },
  };

  // you can use any name you want when using array de-structuring
  const [formState, inputHandler] = useForm(NEW_PLACE_INPUTS, false);

  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", formState.inputs.title.value);
      formData.append("description", formState.inputs.description.value);
      formData.append("address", formState.inputs.address.value);
      formData.append("image", formState.inputs.image.value);
      await sendRequest(
        process.env.REACT_APP_BACKEND_URL + "/places",
        "POST",
        formData,
        { Authorization: "Bearer " + auth.token }
      );
      navigate("/");
    } catch (err) {}
  };

  return (
    <>
      <ErrorModal error={error} onClear={clearError} />
      <form className="place-form" onSubmit={submitHandler}>
        {isLoading && <LoadingSpinner asOverlay />}
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
        <ImageUpload
          center
          id="image"
          onInput={inputHandler}
          errorText="Please provide an image of type .png, .jpg, or .jpeg!"
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
