import styled from "styled-components";

const BTN6 = styled.button`
  position: relative;
  width: 16rem;
  display: inline-block;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 0;
  font-size: 1.8rem;
  font-weight: bold;
  font-family: inherit;
  transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  cursor: pointer;
  z-index: 2;

  &::before {
    content: "";
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: -5px;
    left: 0;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: black;
    border-radius: 1.625rem;
    z-index: -1;
  }
  &::after {
    content: "";
    position: absolute;
    top: 4px;
    left: 8px;
    width: 1.2rem;
    height: 1.2rem;
    border-top: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(42deg);
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
  }
  &:hover {
    color: white;
    &::before {
      width: 100%;
    }
    &::after {
      left: 140px;
    }
  }
`;

export default BTN6;
