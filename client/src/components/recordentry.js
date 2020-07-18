import React, { Component } from "react";

export default class Recordentry extends Component {
    render() {
        return (
            
            <form>
                <div className="form-row">
                    <div className="form-group col-md-8">
                        <label for="inputFull">Full Name</label>
                        <input type="text" className="form-control" id="inputFull" placeholder="Enter full name" />
                    </div>

                    <div className="form-group col-md-8">
                        <label for="inputProblems">Health Problems</label>
                        <input type="text" className="form-control" id="inputProblems" placeholder="Health concerns/problems" />
                </div>
                    </div>

                    <div className="form-group">
                    <label for="inputAddress">Medications</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="Medication dosage" />
                    </div>
                    
                    <div className="form-group">
                    <label for="inputDirectives">Directives</label>
                    <input type="text" className="form-control" id="Directives" placeholder="Directives for patient to follow" />
                    </div>

                    <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputHistory">History</label>
                        <input type="text" className="form-control" id="inputHistory" />
                    </div>
                    </div>

                    <div className="form-group">
                    
                    </div>

                    <button type="submit" className="btn btn-primary">Update Record</button>

          </form>
          
        );
    }
}


