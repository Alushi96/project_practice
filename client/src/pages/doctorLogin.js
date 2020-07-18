import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import DrDashboard from "./drdashboard";
import API from "../utils/API";

import { useAuth } from "../context/auth";
import { Error } from "../components/AuthForms";

function Login(props) {

  

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isLogIn, setLogIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();
  const referer = '/';


  function postLogin() {
    API.doctorLogIn({
      userName,
      password
    }).then(result => {
      if (result.data[0]) {
        setAuthTokens(result.data[0]._id);
        if (result.data[0].Doctor === false) {
        setLoggedIn(true);
        } else if (result.data[0].Doctor === true) {
          setLogIn(true);
        }
      } else {
        setIsError(true);
      }
    }).catch(e => {
      setIsError(true);
    });
  }

  if (isLoggedIn) {
    console.log("Logged In!!")
    return <Redirect to="/ptdashboard" />;
  }

  if (isLogIn) {
    console.log("Logged In!!")
    return <Redirect to="/drdashboard" />;
  }

        return (
            
                 <div className="App">
      <div className="auth-wrapper">
        <div className="auth-inner">
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
              <Link className="navbar-brand" to={"/sign-in"}>HealthApp</Link>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in/user"}> User Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-in/doctor"}> Doctor Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign-Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
            <form>
                <h3> Doctor Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={userName} className="form-control" placeholder="Enter email" id="email-input"  onChange={e => {setUserName(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} className="form-control" placeholder="Enter password" id="password-input" onChange={e => {setPassword(e.target.value);}}/>
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="button" className="btn btn-primary btn-block" id="subBtn" onClick={postLogin}>Submit</button>
                {/* <Link to={`${props.match.url}/drdashboard`} role="button" className="btn btn-link">Submit</Link>{" "} */}
                <p className="forgot-password text-right">
                    Don't have an account yet? <a href="/sign-up">Sign-Up</a>
                </p>
                { isError &&<Error>The username or password provided were incorrect!</Error> }
            </form>
      {/* <Route exact path={`${props.match.url}/drdashboard`} component={DrDashboard} /> */}


            </div>
            </div>
            </div>
              

        );
    }
        
    export default Login;

