import React from "react";
import '../../component/reactant/fruitssix.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import straa from '../../images/stran.jpeg';
import vegee from '../../images/vegee.jpeg';
import leaves from '../../images/sdleave.jpeg';


export default function fruitssix() {
    return (
        <>
<div className="container-fluid bg-light ">
    <div className="container row ">
        <div className="col-lg-4 bg-white">
            <img src={straa} className="roun"/>
            <h3 className="text-center">Fresh Fruits</h3>
            <p className="text-center font-italic">A farmer is someone who grows plants and raises animals for human use. Farmers have to work very hard and long hours in order to be success</p>
            <button class="btn btn-secondary mrr" type="submit">Learn More</button>
        </div>

        <div className="col-lg-4 bg-white">
            <img src={vegee}  className="roun"/>
            <h3 className="text-center">Vegetable</h3>
            <p className="text-center font-italic">Vegetables are parts of plants that are consumed food. and long hours in order to be success hard and long hours in order to be success</p>
            <button class="btn btn-secondary mrr" type="submit">Learn More</button>
        </div>
        <div className="col-lg-4 bg-white">
            <img src={leaves} className=" roun"/>
            <h3 className="text-center">Salad leaves</h3>
            <p className="text-center font-italic">Types of production. Production for the fresh market.Production factors and techniques.parts of plants that are consumed food.</p>
            <button class="btn btn-secondary mrr" type="submit">Learn More</button>
        </div>
    </div>
</div>
        </>
    );
}