import axios from "axios";

export default {
  getUser: function(id) {
    return axios.get("/api/user/" + id);
  },
  getDoctor: function(id) {
    return axios.get("/api/doctor/" + id);
  },
  saveUser: function(userData) {
    return axios.post("/api/user", userData);
  },
  saveDoctor: function(userData) {
    return axios.post("/api/doctor", userData);
  },
  userLogIn: function(loginData) {
    console.log("hit");
    return axios.post("/api/login", loginData);
  },
  doctorLogIn: function(loginData) {
    console.log("hit");
    return axios.post("/api/login/doctor", loginData);
  },
  addPatient: function(id, patientID) {
    console.log("dhit")
    return axios.put("/api/doctor/" + id, patientID);
  },
  addDoctor: function(id, doctorID) {
    console.log("phit")
    return axios.put("/api/user/" + id, doctorID);
  },
  addExtend: function(id, docInfo) {
    console.log("dhit")
    return axios.put("/api/doctor/signup/" + id, docInfo);
  }
};
