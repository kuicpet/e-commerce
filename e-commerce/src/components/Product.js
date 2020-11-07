import React, { Component } from 'react'
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";
import PropTypes from "prop-types";

export default class Product extends Component {
    render() {
        const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                    <ProductConsumer>
                        {value => (
                            <div className="img-container p-5" 
                                onClick={() => {value.handleDetail(id)}}>
                            <Link to="/details">
                                <img  src={img} alt={title} className="card-img-top" />
                            </Link>
                            <button className="cart-btn mt-5" disabled={inCart ? true : false} 
                                onClick={()=> {
                                    value.addToCart(id);
                                    value.openModal(id);
                                }}>
                                {inCart ? (<p className="text-capitalize mb-0" disabled>{" "} added to cart</p>):(<span className="text-capitalize mb-0 mx-2">add to cart</span>)}
                            </button>
                        </div>
                        )}
                    </ProductConsumer>
                    <div className="card-footer d-flex justify-content-between">
                        <p className="align-self-center mb-0">{title}</p>
                        <h5 className="text-blue">
                            <span className="mr-1">$</span>
                            {price}
                        </h5>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

Product.propTypes = {
    product:PropTypes.shape({
        id:PropTypes.number,
        img:PropTypes.string,
        title:PropTypes.string,
        price:PropTypes.number,
        inCart:PropTypes.bool,
    }).isRequired
}


const ProductWrapper = styled.div`
    .card {
        border-color: transparent;
        transition: all 1s linear;
    }
    ,card-footer {
        background-color: var(--mainWhite) !important;
        border-top: none;
        transition: all 1s linear;
    }
    &:hover {
        .card {
            border: 0.04rem solid rgba(0,0,0,0.2);
            bos-shadow: 2px 2px 5px 0 rgba(0,0,0,0.2);
        }
        .card-footer {
            background: rgba(247,247,247);
        }
    }
    .img-container {
        postion: relative;
        overflow: hidden;
    }
    .card-img-top {
        transition: all 1s linear;
    }
    .img-container:hover .card-img-top {
        transform: scale(1.2);
    }
    .cart-btn {
        padding: 0.2rem 0.4rem;
        background-color: var(--mainOrange);
        color: var(--mainWhite);
        border: none;
        outline: none;
        border-radius: 5px;
    }
    .cart-btn:hover {
        background-color: var(--mainDark);
        cursor: pointer;
        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.5);
        transition: all 1s linear;
    }
    
`