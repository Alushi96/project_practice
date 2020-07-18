import React from "react";
import { Link, Route } from "react-router-dom";
import DrDashboard from "./drdashboard";

function Login(props) {
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
                    <Link className="nav-link" to={"/sign-in"}>Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to={"/sign-up"}>Sign-Up</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          
            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                {/* <button type="submit" className="btn btn-primary btn-block">Submit</button> */}
                <Link to={`${props.match.url}/drdashboard`} role="button" className="btn btn-link">Submit</Link>{" "}
                <p className="forgot-password text-right">
                    Don't have an account yet? <a href="/sign-up">Sign-Up</a>
                </p>
            </form>
      <Route exact path={`${props.match.url}/drdashboard`} component={DrDashboard} />


            </div>
            </div>
            </div>
              

        );
    }
        
    export default Login;

