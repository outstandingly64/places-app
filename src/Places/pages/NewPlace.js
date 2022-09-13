import React from 'react'

import Input from '../../Shared/components/FormElements/Input';
import './NewPlace.css';

const NewPlace = () => {
  return (
    <form className="place-form">
      <Input element='input' type="text" label="Title" validators={[]} errorText='enter valid title, bro.'/>
    </form>
  )
}

export default NewPlace;


/**
 * type 'cmmb' for comment block like this one
 * type 'nfn' for named function
 */

