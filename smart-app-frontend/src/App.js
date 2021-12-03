import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import PredictionsCount from "./components/predictionsCount/PredictionsCount";
import ParticlesBackground from "./components/particles/Particles";

function App() {
  return (
    <div className="App">
      <Logo />
      <Navigation />
      <PredictionsCount />
      <ImageLinkForm />
      <ParticlesBackground />
    </div>
  );
}

export default App;
