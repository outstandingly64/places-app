import React, { useReducer, useEffect } from "react";

import { validate } from "../../Utilities/validators";
import "./Input.css";

//should always return a new state
const inputReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        value: action.val,
        isValid: validate(action.val, action.validators),
      };

      case "BLUR":
        return {
          ...state,
          isBlurred: true
        };

    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: props.initialValue || "",
    isBlurred: false,
    isValid: props.initialValid || false,
  });

  const { onInput, id } = props;
  const { value, isValid } = inputState;

  useEffect(() => {
    onInput(id, value, isValid)
  }, [id, value, isValid, onInput]);

  //this function is called upon every keystroke event
  const changeHandler = (event) => {
    //pass in an object: the action (.type & .val & .validators)
    dispatch({
      type: "CHANGE",
      val: event.target.value,
      validators: props.validators,
    });
  };

  const blurHandler = () => {
    dispatch({
      type: `BLUR`
    });
  };

  const inputEl = (
    <input
      id={props.id}
      type={props.type}
      placeholder={props.placeholder}
      onBlur={blurHandler}
      onChange={changeHandler}
      value={inputState.value}
    />
  );

  const textAreaEl = (
    <textarea
      id={props.id}
      rows={props.rows || 3}
      onBlur={blurHandler}
      onChange={changeHandler}
      value={inputState.value}
    />
  );

  const element = props.element === "input" ? inputEl : textAreaEl;

  return (
    <div
      className={`form-control ${
        !inputState.isValid && inputState.isBlurred && "form-control--invalid"
      }`}
    >
      <label htmlFor={props.id}>{props.label}</label>
      {element}
      {!inputState.isValid && inputState.isBlurred && <p>{props.errorText}</p>}
    </div>
  );
};

export default Input;
