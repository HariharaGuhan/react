import React from "react";
import '../../component/reactant/work.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.css';
import goat from '../../images/goat.jpeg';
import lf from '../../images/lf.png';
import stra from '../../images/straw.jpeg';
import cow from '../../images/cow.png';
import fru from '../../images/allfru.jpeg';

export default function Work(){
    return (
        <div className="bg-success container-fluid p-5">
            <div className="container col-lg-12">
                <h2 className="text-center">How It Works??</h2>
                <p className="font-italic">Organic produce may have more of certain antioxidants and types of flavonoids, which have antioxidant properties. Omega-3 fatty acids. The feeding requirements for organic farm animals (livestock) usually cause higher levels of omega-3 fatty acids.</p>
            </div>
            <div className="row">

                <div className="col-lg-3">
                    <img src={goat} />
                </div>
                <div className="col-lg-1">

                </div>

                <div className="col-lg-3 bg-light">
                    <img src={lf} className="mr-5" width="100rem" />
                    <h4 className="text-center">Organic</h4>
                    <p className="font-italic text-center">Eat Healthy, stay healthy as the best organic fruits and vegetables now available online in bigbasket at the best price. Shop from a wide variety of .</p>
                </div>
                <div className="col-lg-1">

                </div>
                <div className="col-lg-4">
                    <img src={stra} width="100%" />
                </div>

            </div>
            <div className="col-lg-12">

            </div>
            <div className="row">
                <div className="col-lg-4 bg-light">
                    <img src={cow} className="mr-5" width="50rem" />
                    <h4 className="text-center">Animal Husbandary</h4>
                    <p className="text-center font-italic">Animal husbandry is the branch of agriculture concerned with animals that are raised for meat, fibre, milk, or other products. It includes day-to-day care, selective breeding, and the raising of livestock.</p>
                </div>

                <div className="col-lg-4">
                    <img src={fru} className="mr-3" width="100%" />
                </div>
                <div className="col-lg-4 bg-light">
                    <h4 className="text-center">Arable Farming</h4>
                    <p className=" font-italic text-center">Arable land is any land capable of being ploughed and used to grow crops. Alternatively, for the purposes of agricultural statistics, the term often has a more precise definition: Arable land is the</p>
                </div>

            </div>

        </div>
    );
}
