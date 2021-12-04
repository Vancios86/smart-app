import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import SignIn from "./components/authentification/SignIn";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import PredictionsCount from "./components/predictionsCount/PredictionsCount";
import ParticlesBackground from "./components/particles/Particles";
import { useState } from "react";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const isAuthorized = () => {
    setAuthorized(true);
  };

  return (
    <>
      {authorized ? (
        <div className="App">
          <Logo />
          <Navigation />
          <PredictionsCount />
          <ImageLinkForm />
          <ParticlesBackground />
        </div>
      ) : (
        <SignIn isAuthorized={isAuthorized} />
      )}
    </>
  );
}

export default App;
