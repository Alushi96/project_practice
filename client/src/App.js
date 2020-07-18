import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserLogin from "./pages/userLogin";
import DoctorLogin from "./pages/doctorLogin";
import SignUp from "./pages/signup";
import DrDashboard from "./pages/drdashboard";
import PtDashboard from "./pages/ptdashboard";
import Recordentry from "./pages/recordentry";
import PatientSearch from "./pages/patientSearch";
import SignupExtend from "./pages/signupextend";

import PrivateRoute from './PrivateRoute';
import { AuthContext } from "./context/auth";


function App(props) {

  const existingTokens = JSON.parse(localStorage.getItem("tokens"));
  const [authTokens, setAuthTokens] = useState(existingTokens);
  
  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  }

  return (
    <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
  <Router>   

            <Route exact path='/' component={UserLogin} />
            <Route path="/sign-in/user" component={UserLogin} />
            <Route path="/sign-in/doctor" component={DoctorLogin} />
            <Route path="/sign-up" component={SignUp} />
            <PrivateRoute path="/drdashboard" component={DrDashboard} />
            <PrivateRoute path="/signupextend" component={SignupExtend} />
            <PrivateRoute path="/ptdashboard" component={PtDashboard} />
            <PrivateRoute path="/patientSearch" component={PatientSearch} />
            <PrivateRoute path="/recordentry" component={Recordentry} />

    </Router>
    </AuthContext.Provider>
  );
}

export default App;
