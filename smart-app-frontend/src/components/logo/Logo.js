import Tilt from "react-parallax-tilt";
import logoIcon from "./logo.png";

const Logo = () => {
  return (
    <Tilt
      className="parallax-effect-glare-scale"
      perspective={500}
      glareEnable={true}
      glareMaxOpacity={0.45}
      scale={1.02}
    >
      <div className="inner-element">
        <img src={logoIcon} alt="logo" />
      </div>
    </Tilt>
  );
};

export default Logo;
