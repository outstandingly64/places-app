import React, { useRef } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
    const fileChooserRef = useRef();

    const chosenHandler = (event) => {
        console.log(event.target);
    }

    const chooseImageHandler = () => {
        fileChooserRef.current.click();
    };

  return (
    <div className="form-control">
      <input
        id={props.id}
        ref={fileChooserRef}
        style={{ display: "none" }}
        type="file"
        accept=".jpg,.png,.jpeg"
        onChange={chosenHandler}
      />
      <div className={`image-upload ${props.center && 'center'}`}>
        <div className="image-upload__preview">
            <img src="" alt="Preview"/>
        </div>
        <Button type="button" onClick={chooseImageHandler}>CHOOSE IMAGE</Button>
      </div>
    </div>
  );
};

export default ImageUpload;
