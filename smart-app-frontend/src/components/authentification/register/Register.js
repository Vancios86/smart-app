import '../signIn/SignIn.css';
import { useState } from 'react';

const Register = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onNameChange = (event) => {
    setName(event.target.value);
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const onRegisterSubmit = (click) => {
    onRouteChange('homePage');

    addUser();
    async function addUser() {
      const apiCall = await fetch('http://localhost:3001/register/', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const newUser = await apiCall.json();
      if (newUser) {
        loadUser(newUser);
        console.log(newUser);
        console.log('registered');
        onRouteChange('homePage');
      }
      if (!newUser.name || !newUser.email || !newUser.password) {
        console.log('register unsuccessful');
        onRouteChange('register');
      }
    }
  };

  return (
    <div className='container'>
      <article className='article ba b--black-10 mv4 mw6 shadow-3 center'>
        <main className='pa4 black-80'>
          <form className='measure center'>
            <fieldset id='register' className='ba b--transparent ph0 mh0'>
              <legend className='f4 fw6 ph0 mh0 center'>Register</legend>
              <div className='mt3 mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='name'>
                  Name
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100'
                  type='text'
                  name='name'
                  id='name'
                  onChange={onNameChange}
                />
              </div>
              <div className='mt3'>
                <label className='db fw6 lh-copy f6' htmlFor='email-address'>
                  Email
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100'
                  type='email'
                  name='email-address'
                  id='email-address'
                  onChange={onEmailChange}
                />
              </div>
              <div className='mv3'>
                <label className='db fw6 lh-copy f6' htmlFor='password'>
                  Password
                </label>
                <input
                  className='pa2 input-reset ba bg-transparent w-100'
                  type='password'
                  name='password'
                  id='password'
                  onChange={onPasswordChange}
                />
              </div>
            </fieldset>
            <div className='centered'>
              <input
                className='ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                type='submit'
                value='Register'
                onClick={onRegisterSubmit}
              />
            </div>
          </form>
          <div className='lh-copy mt3 center'>
            <p
              onClick={() => onRouteChange('signIn')}
              className='f6 link dim black centered pointer'
            >
              Sign in
            </p>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Register;
