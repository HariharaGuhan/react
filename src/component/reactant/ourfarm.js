import React from "react";
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import vegi from '../../images/vegi.jpeg';
import vegi2 from '../../images/vegi2.jpeg';
import mus from '../../images/mus.jpeg';
import fmpro from '../../images/fmproduct.jpeg';
export default function Ourfarm() {
    return (
        <>
            <div className="container-fluid bg-success">
                <h2 className="text-center text-light">About our Farm</h2>
                <p className="font-italic text-light">A farmer is someone who grows plants and raises animals for human use. Farmers have to work very hard and long hours in order to be successful. The work of farmers is necessary for human survival. Farming, or agriculture, has been around for about 10,000 years.</p>
                <div className="row container-fluid bg-light">
                    <div className="col-lg-3">
                    <div className="bg-white">
                            <h3 className="text-center text-success">VEGETABLES</h3>
                            <p className="font-italic">Vegetables are parts of plants that are consumed food.</p>
                            </div>
                        <img src={vegi} />
                    </div>
                    <div className="col-lg-3">
                    <div className="bg-white">
                            <h3 className="text-center text-success">HOW IT WORKS ?</h3>
                            <p className="font-italic">Types of production. Production for the fresh market.</p>
                            </div>
                        <img src={vegi2} />
                    </div><div className="col-lg-3">
                    <div className="bg-white">
                            <h3 className="text-center text-success">FLEXIBILITY</h3>
                            <p className="font-italic">Production factors and techniques.</p>
                            </div>
                        <img src={mus} width />
                    </div>
                    <div className="col-lg-3">
                    <div className="bg-white">
                        <h3 className="text-center text-success">FARM PRODUCTS</h3>
                        <p className="font-italic">Practices required for a vegetable crop grown.</p>
                        </div>
                    <img src={fmpro} />
                </div>
            </div>
        </div>
        </>
    );
}