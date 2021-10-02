import styled from "styled-components";

const NavButtonStyle = styled.label`
  background-color: white;
  height: 7rem;
  width: 7rem;
  position: fixed;
  top: 6rem;
  right: 6rem;
  border-radius: 50%;
  z-index: 2000;
  box-shadow: 0 1rem 3rem rgba(black, 0.1);
  text-align: center;
  cursor: pointer;

  span {
    position: relative;
    margin-top: 3.5rem;

    &,
    &::before,
    &::after {
      width: 3rem;
      height: 2px;
      background-color: grey;
      display: inline-block;
    }

    &::before,
    &::after {
      content: "";
      position: absolute;
      left: 0;
      transition: all 0.5s;
    }

    &::before {
      top: -0.8rem;
      transform-origin: left;
    }
    &::after {
      top: 0.8rem;
      transform-origin: left;
    }
  }
`;

export default NavButtonStyle;
