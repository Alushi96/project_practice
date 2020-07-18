import React, { Component } from "react";

export default class Locationcard extends Component {
    render() {
        return (
            <table className="table table-bordered">
            <thead>
              <tr>
                <th>Your Provider</th>
                <th>Office Information</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.doctor}<br/>
                {this.props.specialty}<br/>
                </td>
                <td>{this.props.officename} <br/>
                {this.props.address1} <br/>
                {this.props.hours} <br/>
                {this.props.phone}</td>
              </tr>
            </tbody>
          </table>
        );
    }
}



