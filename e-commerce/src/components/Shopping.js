import React from 'react';
import { Link } from "react-router-dom";

export default function Shopping() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto">
                  <Link to="/">
                      <button className="text-center text-capitalize mx-auto px-4 py-1 shop">continue shopping</button>
                  </Link>
                </div>
            </div>
        </div>
    )
}
