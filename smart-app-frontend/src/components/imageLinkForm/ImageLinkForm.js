import "./ImageLinkForm.css";
import AIPredict from "../AIPredict/AIPredict";
import { useState } from "react";
import Clarifai from "clarifai";

const app = new Clarifai.App({
  apiKey: "2f49c7a6a4314c3da7a1894b57db68e3",
});

const ImageLinkForm = () => {
  const [userInput, setUserInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const insertUrlInput = (event) => {
    setUserInput((userInput) => event.target.value);
  };

  const buttonSubmit = (event) => {
    setImageUrl((imageUrl) => userInput);
    console.log(imageUrl);

    app.models
      .predict(
        "53e1df302c079b3db8a0a36033ed2d15",
        "https://samples.clarifai.com/face-det.jpg"
      )
      .then(
        function (response) {
          console.log(response);
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
