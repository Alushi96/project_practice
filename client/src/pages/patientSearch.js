import React, { useState, useEffect } from "react";
import Actioncard from "../components/actioncard";
import API from "../utils/API";
import { useAuth } from "../context/auth";
import 'bootstrap/dist/css/bootstrap.min.css';



function PatientSearch() {

    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const doctorID = existingTokens;

    const [id, setID] = useState("");
    const [patient, setPatient] = useState([]);

    const patientData = {
        id: doctorID
    };

    function postSubmit() {
        API.getUser(id)
          .then(res => setPatient(res.data))
          .catch(err => console.log(err));

    }

    function postAdd() {
        API.addPatient(doctorID, patient)
        .catch(err => console.log(err))

        API.addDoctor(patient._id, patientData)
        .catch(err => console.log(err))

    }





    const [user, setUser] = useState([])

    useEffect(() => {
        loadUser()
    }, [])

    function loadUser() {

        API.getDoctor(doctorID)
          .then(res => setUser(res.data))
          .catch(err => console.log(err));

    };


    const { setAuthTokens } = useAuth();
      
    function logOut() {
        setAuthTokens("");
    }



        return (
        <div>
           <div className="sb-nav-fixed">
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <a className="navbar-brand" href="index.html">HealthApp</a>
            <button className="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i className="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for a Patient" aria-label="Search" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="button"><i className="fas fa-search">Search</i></button>
                    </div>
                </div>
            </form>
            {/* <!-- Navbar--> */}
            <ul className="navbar-nav ml-auto ml-md-0">
            <li className="nav-item dropdown">
                    {/* <a className="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a> */}
                    {/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown"> */}
                 
                        <a className="dropdown-item" onClick={logOut}>Logout</a>
                    {/* </div> */}
                </li>
            </ul>
        </nav>
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                    <div className="sb-sidenav-menu">
                        <div className="nav">
                            <div className="sb-sidenav-menu-heading">Menu</div>
                            <a className="nav-link" href="/drdashboard">
                                <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                                Dashboard
                            </a>
                            <div className="sb-sidenav-menu-heading">Interface</div>
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                                <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                                Schedule
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav className="sb-sidenav-menu-nested nav">
                                    <a className="nav-link" href="layout-static.html">Schedule Appointment</a>
                                    <a className="nav-link" href="layout-sidenav-light.html">Virtual Appointment</a>
                                </nav>
                            </div>
                            <a className="nav-link collapsed" href="/recordentry" data-toggle="collapse" data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                                Medical Records
  
                                <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                            </a>
                            <div className="sb-sidenav-menu-heading">Additional Features</div>
                            <a className="nav-link" href="/recordentry">
                                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                                Health Condition Search
                            </a>
                        
                        </div>
                    </div>
                    <div className="sb-sidenav-footer">
                        <div className="small">Logged in as:</div>
                        Dr. {user.Name +" "+ user.Surname}
                    </div>
                </nav>
            </div>
            <div id="layoutSidenav_content">
                <main className="bg-light">
                    <div className="container-fluid bg-light">
                        <h1 className="mt-4">Physician Dashboard</h1>
                        <ol className="breadcrumb mb-4">
                            <li className="breadcrumb-item active">Welcome, Dr. {user.Name +" "+ user.Surname}</li>
                        </ol>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-primary text-white mb-4">
                                    <div className="card-body">Search a Patient</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="/patientSearch" >View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-warning text-white mb-4">
                                    <div className="card-body">Upcoming Appointments</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-md-6">
                                <div className="card bg-success text-white mb-4">
                                    <div className="card-body">Schedule Appointment</div>
                                    <div className="card-footer d-flex align-items-center justify-content-between">
                                        <a className="small text-white stretched-link" href="#">View Details</a>
                                        <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           <Actioncard title="Health Search Term" color="bg-danger"/>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table mr-1"></i>
                               Patient Search
                            </div>
                            <form>

                            <div className="form-group">
                                <label>Patient ID</label>
                                <input type="id" value={id} className="form-control" placeholder="Enter Patient ID" id="id-input" onChange={e => {setID(e.target.value);}}/>
                            </div>

                            <button type="button" className="btn btn-primary btn-block" id="subBtn" onClick={postSubmit}>Submit</button>

                            </form>
                        </div>
                        <div className="card mb-4">
                            <div className="card-header">
                                <i className="fas fa-table mr-1"></i>
                               Patient Details
                            </div>
                            <p>Patient ID: {patient._id}</p>
                            <p>Name: {patient.Name+" "+patient.Surname}</p>
                            <p>DOB: {patient.DOB}</p>
                            <p>Email: {patient.Email}</p>
                            <p>Phone Number: {patient.PhoneNumber}</p>
                            <button type="button" className="btn btn-primary btn-block" id="subBtn" onClick={postAdd}>Add Patient</button>
                        </div>
                    </div>
                </main>
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright &copy; HealthApp 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    </div>
</div>
);
}

export default PatientSearch;
