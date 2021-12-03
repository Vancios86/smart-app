import "./Predictions.css";

const PredictionsCount = () => {
  return (
    <div className="predictionsCount centered">
      <h4>{`Ion, so far you've made 9 predictions`}</h4>
      <p>
        This app knows how to recognize ingredients from photos with food. Just
        choose any photo and copy paste the URL. For a better experience choose
        photos with .jpg format
      </p>
    </div>
  );
};

export default PredictionsCount;
