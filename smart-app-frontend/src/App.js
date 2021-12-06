import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import SignIn from "./components/authentification/signIn/SignIn";
import Register from "./components/authentification/register/Register";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import PredictionsCount from "./components/predictionsCount/PredictionsCount";
import ParticlesBackground from "./components/particles/Particles";
import { useState } from "react";

function App() {
  const [route, setRoute] = useState("signIn");

  function onRouteChange(route) {
    return setRoute(route);
  }

  return (
    <>
      {route === "homePage" ? (
        <div className="App">
          <Logo />
          <Navigation onRouteChange={onRouteChange} />
          <PredictionsCount />
          <ImageLinkForm />
          <ParticlesBackground />
        </div>
      ) : route === "signIn" ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
