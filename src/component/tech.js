import React from "react";
import './tech.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import sp from '../images/spp.png';
import ims from '../images/ims.jpeg';
import sap from '../images/SAp.jpeg';
import dm from '../images/dm.png';
export default function Tech() {
    return (
        <>
            <div className="container-fluid  row bg-light">
                <div className="col-lg-12">
                <h1 className="text-center">Learn 4.0 Technologies</h1>
                <p className="text-center">The term IT (Information Technology) in its simplest form covers every task that computers are used for. The usage of technology to crunch information and resolve business challenges or to streamline and organize processes through technology in an organization is commonly known as IT.</p>
                </div>
                <div className="col-lg-5 ml-5 row soft ">
                    <h2>Software Programming</h2>
                    <p>Software programming is the act of writing computer code that enables computer software to function.<br /> The computer technology field often has overlapping terminology<br /> that can be confusing to discern.</p>
                
                    <img src={sp} width="100rem" className="ml-5"/>

                </div>
                <div className="col-lg-1">

                </div>

                <div className="col-lg-5 ims row">
                    <h2>Infrastructure Management Specialist</h2>
                    <p>Infrastructure management is the management of both technical and operational components—including <br />hardware, software, policies, processes, data, facilities and equipment—for business effectiveness.</p>
                    <img src={ims} width="100rem" className="ml-5" />

                </div>
                    <div className="col-lg-5 ml-5 sap row">
                        <h2>Systems Applications and Products in Data Processing</h2>
                        <p>SAP SE is a German multinational software company based in Walldorf, Baden-Württemberg. It develops<br /> enterprise software to manage business operations and customer relations.</p>
                        <img src={sap} width="100rem" className="ml-5" />

                    </div>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5 dm row ">
                        <h2>Digital Marketing</h2>
                        <p>Digital marketing is the component of marketing that uses the Internet and online based digital technologies<br /> such as desktop computers, mobile phones and other digital media<br /> and platform</p>
                        <img src={dm} width="100rem" className="ml-5"/>

                    </div>
                </div>
        </>
    );

}