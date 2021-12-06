import "./SignIn.css";

const SignIn = ({ onRouteChange }) => {
  return (
    <div className="container">
      <article className="article ba b--black-10 mv4 mw6 shadow-3 center">
        <main className="pa4 black-80">
          <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0 center">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-black w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent hover-black w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="centered">
              <input
                className="ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Sign in"
                onClick={() => onRouteChange("homePage")}
              />
            </div>
            <div className="lh-copy mt3 center">
              <p
                onClick={() => onRouteChange("register")}
                className="f6 link dim black centered pointer"
              >
                Register
              </p>
            </div>
          </form>
        </main>
      </article>
    </div>
  );
};

export default SignIn;
