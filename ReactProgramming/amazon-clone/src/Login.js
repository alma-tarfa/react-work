import React, {useState} from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";

function Login() {
    const history = useHistory()
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();// this stops the refresh!!

    //do the login logic here 
    auth.signInWithEmailAndPassword(email, password)
    .then((auth) =>{
        // Logged in, redirect to homepge 
        history.push("/");
    })
    .catch(e => alert(e.message));
  };
  const register = (event) => {
    event.preventDefault();// this stops the refresh!!

    //do the register logic here 
    auth.createUserWithEmailAndPassword(email, password)
    .then(auth =>{
        //created a user and logged in 
    }).catch(e =>{
        alert(e.message);
    })
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>Email</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="email" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} className="login__signInButton" type="submit">
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to Amazon's Conditions of Use & Sale. Please
          see our Privacy Notice, our Cookies Notice and our Interest-Based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create you Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
