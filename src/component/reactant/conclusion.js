import React from "react";
import '../reactant/conclusin.css'
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Conclusion() {
    return (
        <>
            <div className="container-fluid bg-light row p-5">
                <div className="col-lg-5 bg-light ">
                    <h5 className="text-success mt-5">ORGANIC FARM</h5>
                    <h1 className="text-warning font-italic">OF ORGANIC FOOD</h1>

                    <p className="font-italic">Organic produce may have more of certain antioxidants and types of flavonoids, which have antioxidant properties. Omega-3 fatty acids. The feeding requirements for organic farm animals (livestock) usually cause higher levels of omega-3 fatty acids.</p>
                    <button type="button" class="btn btn-warning">Learn More</button>
                </div>
                <div className="col-lg-7 bg-light">
                    <div className="row mr-5 borc">
                    </div>
                </div>
            </div>
        </>
    )
}