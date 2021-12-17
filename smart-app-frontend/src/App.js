import Navigation from './components/navigation/Navigation';
import Logo from './components/logo/Logo';
import SignIn from './components/authentification/signIn/SignIn';
import Register from './components/authentification/register/Register';
import ImageLinkForm from './components/imageLinkForm/ImageLinkForm';
import PredictionsCount from './components/predictionsCount/PredictionsCount';
import ParticlesBackground from './components/particles/Particles';
import { useState } from 'react';

function App() {
  const [route, setRoute] = useState('signIn');
  const [user, setUser] = useState({
    id: '',
    name: '',
    email: '',
    entries: '',
    joined: '',
  });

  function onRouteChange(route) {
    return setRoute(route);
  }

  async function loadUser(userData) {
    setUser({
      id: userData.id,
      name: userData.name,
      email: userData.email,
      entries: userData.entries,
      joined: userData.joined,
    });
    console.log(user);
    return user;
  }

  return (
    <>
      {route === 'homePage' ? (
        <div className='App'>
          <Logo />
          <Navigation onRouteChange={onRouteChange} />
          <PredictionsCount name={user.name} entries={user.entries} />
          <ImageLinkForm user={user} />
          <ParticlesBackground />
        </div>
      ) : route === 'signIn' ? (
        <SignIn onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </>
  );
}

export default App;
