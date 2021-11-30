import "./ImageLinkForm.css";
import AIPredict from "../AIPredict/AIPredict";
import { useState } from "react";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "8ddcea24d66c4b928328a75cedd3d670",
});

const ImageLinkForm = () => {
  const [userInput, setUserInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const insertUrlInput = (e) => {
    e.preventDefault();
    return setUserInput(e.target.value);
  };

  const buttonSubmit = (click) => {
    setImageUrl((imageUrl) => userInput);
    console.log("image url", imageUrl);
    console.log("user input", userInput);

    app.models.predict(Clarifai.GENERAL_MODEL, `${userInput}`).then(
      function (response) {
        const objectName = response.outputs[0].data.concepts[0].name;
        console.log(objectName);
      },
      function (err) {
        console.log("error found", err);
      }
    );
  };

  return (
    <div className="centered">
      <div className="imageLinkForm">
        <h4>{"Paste your URL down below"}</h4>
        <input
          id="urlInput"
          type="text"
          value={userInput}
          onChange={insertUrlInput}
        />
        <button onClick={buttonSubmit}>PREDICT</button>
        <AIPredict imageUrl={imageUrl} />
      </div>
    </div>
  );
};

export default ImageLinkForm;
