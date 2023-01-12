import React from "react";
import '../../component/reactant/product.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import farmm from'../../images/allfru.jpeg';
export default function Farm() {
    return (
        <>
        <div className="container-fluid bg-light row p-5">
            <div className="col-lg-5 borf">
                {/* <img src={farmm} className="col-lg-12"/> */}
            </div>
            <div className="col-lg-7 bg-light mt-5 p-5">
                <div className="row mr-5">
                    <h5 className="text-success mr-5">ORGANIC FARM</h5>
                    <h1 className="text-warning font-italic">OUR PROMISES</h1>

                    <p className="font-italic">Organic produce may have more of certain antioxidants and types of flavonoids, which have antioxidant properties. Omega-3 fatty acids. The feeding requirements for organic farm animals (livestock) usually cause higher levels of omega-3 fatty acids.</p>
                    <button type="button" class="btn btn-warning">Learn More</button>
                </div>
            </div>
        </div>
        </>
    )
}