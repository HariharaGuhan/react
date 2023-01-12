import React from "react";
import '../component/button.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
export default function Socialbut() {
    return (

        <>
        <div className="but p-5 col-lg-12 ">
            <div className="mt-5 ">
            <h1 className="head  text-light fs-2">Social ButtoN</h1>

            <div className="but1 p-4 mt-4">
        <button type="button" className="btn btn-warning ml-3 ">Like</button>
        <button type="button" className="btn btn-light ml-3">comment</button>
        <button type="button" className="btn btn-primary ml-3">Share</button>
        </div>
        </div>
        </div>
        </>
    );
}
