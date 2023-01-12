import React from "react";
import '../component/super.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import rcb from '../images/rcb-img.png';
import csk from '../images/csk-img.png';
export default function Super() {
    return (
        <>
            <div className="ipl">
                <div className="container-fluid p-5">
                    <div className="row">
                        <div className="col-lg-12 p-5">
                            <h1 className="head text-light">Super Over league</h1>
                        </div>
                        <div className="col-lg-12 p-5">
                            <img src={rcb} width="200rem" />
                            <img width="200rem" src={csk} />

                        </div>
                    </div>
                </div>
            </div>
        </>


    );



}

