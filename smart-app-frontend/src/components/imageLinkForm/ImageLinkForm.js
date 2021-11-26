import "./ImageLinkForm.css";

const ImageLinkForm = () => {
  return (
    <div className="centered">
      <div className="imageLinkForm">
        <h4>{"Paste your URL down below"}</h4>
        <input id="urlInput" type="text" />
        <button>PREDICT</button>
      </div>
    </div>
  );
};

export default ImageLinkForm;
