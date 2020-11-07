import React from 'react';
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-10 mx-auto text-center text-title">
                    <h3>your cart is currently empty</h3>
                    <div className="cart-icon2">
                        <FiShoppingCart/>
                    </div>
                    <Link to="/">
                        <button className="text-center text-capitalize mx-auto px-4 py-1 shop">start shopping</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
