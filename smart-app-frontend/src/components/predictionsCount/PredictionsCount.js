import './Predictions.css';

const PredictionsCount = ({ name, entries }) => {
  console.log(name, entries);
  // const userName = user.name;
  // const userEntries = user.entries;
  return (
    <div className='predictionsCount centered'>
      <h4>{`${name}, so far you've made ${entries} predictions`}</h4>
      <p>
        This app knows how to recognize ingredients from photos with food. Just
        choose any photo and copy paste the URL. For a better experience choose
        photos with .jpg format
      </p>
    </div>
  );
};

export default PredictionsCount;
