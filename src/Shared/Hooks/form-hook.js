import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
    switch (action.type) {
      case "INPUT_CHANGE":
        let formIsValid = true;
        for (const inputId in state.inputs) {
          if (inputId === action.inputId) {
            formIsValid = formIsValid && action.isValid;
          } else {
            formIsValid = formIsValid && state.inputs[inputId].isValid;
          }
        }
        return {
          ...state,
          inputs: {
            ...state.inputs,
            [action.inputId]: { value: action.value, isValid: action.isValid },
          },
          isValid: formIsValid,
        };
      default:
        return state;
    }
  };

//TODO: custom hook for forms validation
// parameter types: (nested object, boolean)
export const useForm = (initalInputs, initialValidity) => {

    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initalInputs,
        isValid: initialValidity, 
      });

      const inputHandler = useCallback((id, value, isValid) => {
        //this is where ACTIONS are dispatched. ACTIONS are objects as you can see.
        dispatch({
          type: "INPUT_CHANGE",
          value: value,
          isValid: isValid,
          inputId: id,
        });
      }, []);

      return [formState, inputHandler];

};

// extracted hardcoded inputs & validity.
// useForm will now be provided its input
// structure & validity through parameters

// {
//     title: {
//       value: "",
//       isValid: false,
//     },
//     description: {
//       value: "",
//       isValid: false,
//     },
//     address: {
//       value: "",
//       isValid: false,
//     },
//   }