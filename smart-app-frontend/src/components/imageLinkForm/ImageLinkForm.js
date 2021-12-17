import './ImageLinkForm.css';
import AIPredict from '../AIPredict/AIPredict';
import { useState, useEffect } from 'react';
import Clarifai from 'clarifai';
import DataDisplay from '../dataDisplay/DataDisplay';

const app = new Clarifai.App({
  apiKey: '8ddcea24d66c4b928328a75cedd3d670',
});

const ImageLinkForm = () => {
  const [userInput, setUserInput] = useState('');
  const [ingredients, setIngredients] = useState([]);

  const insertUrlInput = (e) => {
    e.preventDefault();
    return setUserInput(e.target.value);
  };

  const onImageSubmit = (click) => {
    app.models
      .predict(Clarifai.FOOD_MODEL, `${userInput}`)
      .then((response) => {
        const receivedDataArray = response.outputs[0].data.concepts;
        return setIngredients([...receivedDataArray]);
      })
      .catch((err) => console.log('error occured:', err));
  };

  useEffect(() => {
    if (userInput === '') {
      setIngredients([]);
    }
  }, [userInput]);

  return (
    <>
      <div className='centered'>
        <div className='imageLinkForm'>
          <h4>{'Paste your URL down below'}</h4>
          <input
            id='urlInput'
            type='text'
            value={userInput}
            onChange={insertUrlInput}
          />
          <button onClick={onImageSubmit}>PREDICT</button>
          <AIPredict imageUrl={userInput} />
        </div>
      </div>
      <DataDisplay data={ingredients} />
    </>
  );
};

export default ImageLinkForm;
