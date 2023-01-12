import React from "react";
import './notification.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faBellConcierge } from "@fortawesome/free-solid-svg-icons";
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
export function Notii() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Notifictions</h1>
                
                <div className=" row p-2">
                    <div className="col-lg-4 &nbsp;">

                    </div>
                    <div className="col-lg-6 d-flex bg-primary m-2 text-center">
                        <FontAwesomeIcon icon={faCircleCheck} className="mt-3"/>
                        <h2 className="m-2">Information Message</h2>
                    </div>
                    <div className="col-lg-4 &nbsp;">

                    </div>
                </div>
                <div className=" row p-2">
                    <div className="col-lg-4 &nbsp;">

                    </div>
                    <div className="col-lg-6 d-flex bg-success m-2 text-center">
                        <FontAwesomeIcon icon={faCircleCheck} className="mt-3"/>
                        <h2 className="m-2">Success Message</h2>
                    </div>
                    <div className="col-lg-4 &nbsp;">

                    </div>
                </div>
                <div className=" row p-2">
                    <div className="col-lg-4 &nbsp;">

                    </div>
                    <div className="col-lg-6 d-flex bg-warning m-2 text-center">
                        <FontAwesomeIcon icon={faBellConcierge } className="mt-3"/>
                        <h2 className="m-2">Warning Message</h2>
                    </div>
                    <div className="col-lg-4 &nbsp;">

                    </div>
                </div>
                <div className=" row p-2">
                    <div className="col-lg-4 &nbsp;">

                    </div>
                    <div className="col-lg-6 d-flex bg-danger m-2 text-center">
                        <FontAwesomeIcon icon={faBellConcierge } className="mt-3"/>
                        <h2 className="m-2">Danger Message</h2>
                    </div>
                    <div className="col-lg-4 &nbsp;">

                    </div>
                </div>

            </div> 
           
        </>

    );
}