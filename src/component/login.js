import React from "react";
import '../component/login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faComputer } from "@fortawesome/free-solid-svg-icons";
import computer from '../images/lap.jpeg';
export function Login() {
    return (
        <>
        <div className=" p-5 5container-fluid li">
            <div className="bg-light container  mb-5">
                <div className="row mt-3">
                    <div className="col-lg-5 p-5">
                        <img src={computer} className="mt-5" />
                    </div>
                    <div className="col-lg-7  text-center">
                        <h1>Member Login</h1>
                            <div class=" col-lg-12 d-flex">
                                <FontAwesomeIcon icon={faEnvelope} className="col-lg-2 text-warning bg-light" />
                                <input type="email" class="form-control" id="col-lg-6 exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div className="col-lg-12 d-flex">
                                <FontAwesomeIcon icon={faComputer} className=" col-lg-2 text-warning bg-light" />
                                <input type="password" class="form-control mb-2" id="col-lg-7 exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div className=" col-lg-12 ml-5">

                                <button type="submit" class="btn btn-primary text-center ml-5">Login</button>
                                <p>Forgot<span className=" rounded text-success">Username/Password</span></p>
                                <p className="text-success">Create your Account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}