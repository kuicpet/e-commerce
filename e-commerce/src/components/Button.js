import styled from "styled-components";

export const Button = styled.button`
  text-transform: capitalize;
  font-size: 1.2rem;
  background: transparent;
  border: 0.05rem solid var(--mainOrange);
  border-color: ${props => props.cart ? "var(--mainDark)" : "var(--mainOrange)"};
  color:${prop => prop.cart ? "var(--mainDark)" : "var(--mainOrange)"};
  color: var(--mainOrange);
  padding: 0.2rem 0.5rem;
  cursor: pointer;
  margin: 0,2rem 0.5rem 0.2rem 0;
  transition: all 0.5s ease-in-out;
  &:hover {
      background: ${prop => prop.cart ? "var(--mainDark)" : "var(--mainOrange)"};
      color:var(--mainWhite);
      border: 0.05rem solid var(--mainOrange);
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
  }
  &:focus {
      outline: none;
  }
`