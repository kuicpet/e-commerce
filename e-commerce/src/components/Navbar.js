import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";
import { Button } from "./Button";

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/" className="navbar-brand">
                    Logo
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <Button>
                        <FiShoppingCart/>
                        <span className="mx-2">my cart</span>
                    </Button>
                </Link>
            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
  background: var(--mainWhite);
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
  .nav-link {
      color: var(--mainDark) !important;
      font-size: 1.3rem;
      text-transform: capitalize;
  }
  .navbar-brand {
      color: var(--mainDark) !important;
  }
`