import styled, { keyframes } from "styled-components";

const anim_col = keyframes`
  0% {
    border-color: white;
  }
  50% {
    border-color: #FBC638;
  }
  100% {
    border-color: white;
  }
`;

const BTN3 = styled.button`
  background: blue;
  width: 15rem;
  color: white;
  font-weight: bold;
  border: 0;
  border-radius: 0;
  text-transform: uppercase;
  font-size: 2rem;
  padding: 0.8rem 1.5rem;
  transform: skew(-15deg);
  display: inline-block;
  transition: all 0.5s;
  box-shadow: 2px 2px 4px 1px black;

  &::after {
    content: "";
    position: absolute;
    right: 1.3rem;
    top: 1.7rem;
    width: 1rem;
    height: 1rem;
    border-top: 2.5px solid white;
    border-right: 2.5px solid white;
    transform: rotate(42deg);
    transition: all 0.5s;
  }
  &::before {
    content: "";
    position: absolute;
    font-size: 1.6rem;
    right: 1.3rem;
    top: 1.7rem;
    width: 1rem;
    height: 1rem;
    border-top: 2.5px solid white;
    border-right: 2.5px solid white;
    transform: rotate(42deg);
  }
  &:hover {
    box-shadow: 3px 3px 3px 1px #fbc638;
    transform: translateY(-3px) skew(-15deg);
    &::after {
      right: 0.5rem;
      animation: ${anim_col} 1s infinite 0.6s;
    }
    &::before {
      animation: ${anim_col} 1s infinite 0.4s;
    }
  }
`;

export default BTN3;
