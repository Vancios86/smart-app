import "./AIPredict.css";

const AIPredict = ({ imageUrl }) => {
  console.log(imageUrl);
  return (
    <div className="centered photo">
      <img src={imageUrl} alt="" />
    </div>
  );
};

export default AIPredict;
