import React from "react";
import '../../component/reactant/home.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import leaf from '../../images/leaf.jpeg';
import nav from '../../images/nav.png';
export default function Home() {
    return (
        <>
            <div className="container-fluid ">
                <div className="container-fluid row bg-light">
                    <div className="col-lg-11">
                        <div className="row">
                            <img src={leaf} width="50rem" />

                            <h1 className="text-justify text-success float-top">ORGANIC</h1>
                        </div>
                    </div>
                    <div className="col-lg-1 row">

                        <img src={nav} width="80rem" />
                    </div>
                </div>
                <div className="container-fluid row bord p-5 bg-light">
                    <div className="col-lg-5 p-3">
                        <div className="row mrr mr-5">
                            <h5 className="text-success mr-5">FRESH FOOD</h5>
                            <h1 className="text-warning font-italic">ORGANIC</h1>
                            <p className="font-italic">Organic food, ecological food or biological food are food and drinks produced by methods complying with the standards of organic farming.</p>
                            <button type="button" class="btn btn-success">Learn More</button>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}