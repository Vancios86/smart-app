import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import PredictionsCount from "./components/predictionsCount/PredictionsCount";
import TheParticles from "./components/particles/Particles";

function App() {
  return (
    <div className="App">
      <TheParticles />
      <Logo />
      <Navigation />
      <ImageLinkForm />
      <PredictionsCount />
      {/*<AIPredict /> */}
      {/* define the particles options */}
    </div>
  );
}

export default App;
