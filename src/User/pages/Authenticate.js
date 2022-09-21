import React, { useState, useContext } from "react";
import "./Authenticate.css";
import Card from "../../Shared/components/UIElements/Card";
import Input from "../../Shared/components/FormElements/Input";
import Button from "../../Shared/components/FormElements/Button";

import { useForm } from "../../Shared/Hooks/form-hook";
import { AuthContext } from "../../Shared/context/auth-context";
import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../Shared/Utilities/validators";

const Authenticate = () => {
  const auth = useContext(AuthContext);
  const [loggedIn, setLoggedIn] = useState(true);

  const initialInputs = {
    email: {
      value: "",
      isValid: false,
    },
    password: {
      value: "",
      isValid: false,
    },
  };

  const [formState, inputHandler, setFormData] = useForm(initialInputs, false);

  const authSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState.inputs);
    auth.login();
  };

  const switchModeHandler = () => {
    if(!loggedIn){
        setFormData({
        ...formState.inputs,
          name: undefined,
        }, formState.inputs.email.isValid && formState.inputs.password.isValid);
    }else{
      setFormData({
        ...formState.inputs,
        name: {
          value: '',
          isValid: false
        }
      }, false);
    }

    setLoggedIn((prevMode) => !prevMode);
  };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr />
      <form onSubmit={authSubmitHandler}>
        {!loggedIn && (
          <Input
            element="input"
            id="name"
            type="text"
            label="Fullname"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a royal name!"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="password"
          validators={[VALIDATOR_MINLENGTH(7)]}
          errorText="Please enter valid password, at least 7 characters."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {loggedIn ? "LOGIN" : "SIGNUP"}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {loggedIn ? "SIGNUP" : "LOGIN"}
      </Button>
    </Card>
  );
};

export default Authenticate;
