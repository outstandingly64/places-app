import React, { useRef, useState, useEffect } from "react";

import Button from "./Button";
import "./ImageUpload.css";

const ImageUpload = (props) => {
  const [file, setFile] = useState();
  const [previewUrl, setPreviewUrl] = useState();
  const [isValid, setIsValid] = useState(false);

    const fileChooserRef = useRef();

    // generate a preview with useEffect when the file changes
    useEffect(() => {
      if(!file) return;

      const fileReader = new FileReader();
      fileReader.onload = () => {
        setPreviewUrl(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    }, [file]);

    const chosenHandler = (event) => {
      let chosenFile;
      let fileIsValid = isValid;

        if(event.target.files && event.target.files.length === 1){
          chosenFile = event.target.files[0];
          setFile(chosenFile);
          setIsValid(true);
          fileIsValid = true;
        } else{
          setIsValid(false);
          fileIsValid = false;
        }

        props.onInput(props.id, chosenFile, fileIsValid);
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
            {previewUrl && <img src={previewUrl} alt="Preview"/>}
            {!previewUrl && <p>Please choose an image!</p>}
        </div>
        <Button type="button" onClick={chooseImageHandler}>CHOOSE IMAGE</Button>
      </div>
      {!isValid && <p>{props.errorText}</p>}
    </div>
  );
};

export default ImageUpload;
