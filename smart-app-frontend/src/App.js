import Particles from "react-tsparticles";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imageLinkForm/ImageLinkForm";
import PredictionsCount from "./components/predictionsCount/PredictionsCount";

function App() {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div className="App">
      <Logo />
      <Navigation />
      <ImageLinkForm />
      <PredictionsCount />
      {/*<AIPredict /> */}
      {/* define the particles options */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 30,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 333,
                duration: 3,
                opacity: 0.9,
                size: 33,
              },
              push: {
                quantity: 1,
              },
              repulse: {
                distance: 189,
                duration: 0.9,
              },
            },
          },
          particles: {
            color: {
              value: "#5900ff",
            },
            links: {
              color: "#ffbbcc",
              distance: 150,
              enable: true,
              opacity: 0.6,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 1.2,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 90,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 6,
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}

export default App;
