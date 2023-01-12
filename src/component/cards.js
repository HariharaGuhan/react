import React from "react";
import '../component/cards.css';
import watch from '../component/watch-img.png';
import cards from '../component/congrats.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Cards()
{
return(
<>
<div className="cont  text-align-center">
    <h1>Congradulation</h1>
    <div className=" bg-primary rounded m-5">
        <img className="mt-2"src={cards} />
        <h3 className="text-success">Kiran V</h3>
        <p>He is a value studio editor and has 4+ of years exprience</p>
        <img className="mt-2" src={watch} />
        <div className="watch-img"></div>
    </div>
</div>
</>
);
}
