import React, { Component } from "react";

export default class Actioncard extends Component {
    render() {
        return (
            <div className="col-xl-3 col-md-6">
            <div className= {`card text-white mb-4 ${this.props.color}`} >
        <div className="card-body">{this.props.title}</div>
                <div className="card-footer d-flex align-items-center justify-content-between">
                    <a className="small text-white stretched-link" href="#">View Details</a>
                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                </div>
            </div>
        </div>
        );
    }
}
