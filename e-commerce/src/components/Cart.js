import React, { Component } from 'react'
import Title from "./Title";
import CartColumns from "./CartColumns";
import EmptyCart from "./EmptyCart";
import { ProductConsumer } from "../Context";
import CartList from "./CartList";
import CartTotall from "./CartTotals";


export default class Cart extends Component {
    render() {
        return (
            <section>
                <ProductConsumer>
                    {(value) => {
                        const {cart} = value;
                        if(cart.length > 0){
                            return (
                                <>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotall value={value}/>
                                </> 
                            )
                        } else {
                            return <EmptyCart/>;
                        }
                    }}
                </ProductConsumer>
            </section>
        )
    }
}
