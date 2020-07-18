import React from "react";
import API from "../utils/API";
import $ from "jquery";

function SignUp() {

    /* eslint-disable require-jsdoc */
$(document).ready(() => {
    // Getting references to our form and input
    const fNameInput = $('input#first-name');
    const mNameInput = $('input#middle-name');
    const lNameInput = $('input#last-name');
    const dob = $('input#example-date-input');
    const pNumber = $('input#example-tel-input');
    const emailInput = $('input#email-input');
    const passwordInput = $('input#password-input');
    const doctor = $("input#customCheck1");
    const address = $("input#address")
  
    // When the signup button is clicked,
    // we validate the email and password are not blank
    $("#subBtn").on('click', (event) => {
      event.preventDefault();
      console.log("Submit");
      const userData = {
        Name: fNameInput.val().trim()+" "+mNameInput.val().trim(),
        Surname: lNameInput.val().trim(),
        DOB: dob.val().trim(),
        PhoneNumber: pNumber.val().trim(),
        Email: emailInput.val().trim(),
        Password: passwordInput.val().trim(),
        Doctor: doctor.val().trim(),
        Address: address.val().trim()
      };
  
      if (!userData.Email || !userData.Password) {
        return;
      }

      if (userData.Doctor === "doctor") {
        userData.Doctor = true
      } else {
        userData.Doctor = false
      }

      // If we have an email and password, run the signUpUser function
      // eslint-disable-next-line no-use-before-define

      if (userData.Doctor === false) {
        console.log("Client");
      signUpUser(userData.Name, userData.Surname, userData.DOB, userData.PhoneNumber, userData.Email, userData.Password, userData.Doctor,userData.Address);
      fNameInput.val('');
      mNameInput.val('');
      lNameInput.val('');
      dob.val('');
      pNumber.val('')
      emailInput.val('');
      passwordInput.val('');
      doctor.val('');
      address.val('');
      } else if (userData.Doctor === true) {
        console.log("Doctor");
        signUpDoctor(userData.Name, userData.Surname, userData.DOB, userData.PhoneNumber, userData.Email, userData.Password, userData.Doctor,userData.Address);
        fNameInput.val('');
        mNameInput.val('');
        lNameInput.val('');
        dob.val('');
        pNumber.val('')
        emailInput.val('');
        passwordInput.val('');
        doctor.val('');
        address.val('');
      }
    });
  
    // Does a post to the signup route. If successful,
    // we are redirected to the members page Otherwise we log any errors
    function signUpUser(Name, Surname, DOB, PhoneNumber, Email, Password, Doctor, Address) {
      API.saveUser({
        Name,
        Surname,
        DOB,
        PhoneNumber,
        Email,
        Password,
        Doctor,
        Address
      })
      // eslint-disable-next-line no-unused-vars
          .then((data) => {
            window.location.replace('/sign-in/user');
          // If there's an error, handle it by throwing up a bootstrap alert
          })
      // eslint-disable-next-line no-use-before-define
          .catch(handleLoginErr);
    }

    function signUpDoctor(Name, Surname, DOB, PhoneNumber, Email, Password, Doctor, Address) {
    API.saveDoctor({
      Name,
      Surname,
      DOB,
      PhoneNumber,
      Email,
      Password,
      Doctor,
      Address
    })
    // eslint-disable-next-line no-unused-vars
        .then((data) => {
          window.location.replace('/sign-in/doctor');
        // If there's an error, handle it by throwing up a bootstrap alert
        })
    // eslint-disable-next-line no-use-before-define
        .catch(handleLoginErr);
  }
  
    function handleLoginErr(err) {
      $('#alert .msg').text(err.responseJSON);
      $('#alert').fadeIn(500);
    }
  });
  

        return (
<div className="App">
            <div className="auth-wrapper">
              <div className="auth-inner">
            <form className="signup">
                <h3>User Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" className="form-control" placeholder="First name" id="first-name"/>
                </div>

                <div className="form-group">
                    <label>Middle name</label>
                    <input type="text" className="form-control" placeholder="Middle name" id="middle-name"/>
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" id="last-name"/>
                </div>

                <div className="form-group">
                    <label>Address</label>
                    <input type="tel" className="form-control" placeholder="123 State St. Rochester, NY 14623" id="address" />
                </div>

                <div className="form-group">
                    <label>Date of Birth</label>
                    <input type="date" className="form-control" placeholder="MM/DD/YYYY" id="example-date-input" />
                </div>

                <div className="form-group">
                    <label>Phone Number</label>
                    <input type="tel" className="form-control" placeholder="1-(555)-555-5555" id="example-tel-input" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" id="email-input"/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" id="password-input"/>
                </div>

                <div className="form-group">
                    <label>Label</label>
                    <input type="name" className="form-control" placeholder="Enter label" id="customCheck1"/>
                </div>


                <button type="submit" id="subBtn" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
    export default SignUp;