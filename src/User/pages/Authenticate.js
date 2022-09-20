import React from 'react'
import './Authenticate.css';
import Card from '../../Shared/components/UIElements/Card';
import Input from '../../Shared/components/FormElements/Input';
import Button from '../../Shared/components/FormElements/Button';

import {useForm} from "../../Shared/Hooks/form-hook";
import { VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../Shared/Utilities/validators';

const Authenticate = () => {
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

 const [formState, inputHandler] = useForm(initialInputs, false);

 const authSubmitHandler = event => {
  event.preventDefault();
  console.log(formState.inputs);
 };

  return (
    <Card className="authentication">
      <h2>Login Required</h2>
      <hr/>
      <form onSubmit={authSubmitHandler}>
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
        <Button type="submit" disabled={!formState.isValid}>LOGIN</Button>
      </form>
    </Card>
  )
}

export default Authenticate;