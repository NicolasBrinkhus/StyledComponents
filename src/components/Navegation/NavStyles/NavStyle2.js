import styled, { keyframes } from "styled-components";
import cog from "../../../static/cog.svg";

const picmov = keyframes`
  0% {
    width: 12rem;
    height: 12rem;
    top: 1rem;
    right: 1rem;
    font-size: 0rem;
    border-radius: 6rem;
  }
  80% {
    font-size: 0rem;
    height: 22rem;
  }
  100% {
    width: 22rem;
    height: auto;
    font-size: 1.5rem;
    border-radius: 2rem;
  }
`;
const picmovbck = keyframes`
  0% {
    width: 22rem;
    height: 30rem;
    font-size: 1.5rem;
    background-color: #eee;
  }
  80% {
    font-size: 0rem;
  }
  100% {
    width: 12rem;
    height: 10rem;
    top: 1rem;
    right: 1rem;
  }
`;

const animbtn = keyframes`
  0% {
    width: 0rem;
  }
  100% {
    width: 18rem;
  }
`;
const animbtnbck = keyframes`
  0% {
    width: 18rem;
  }
  100% {
    width: 0rem;
  }
`;

const NavStyle2 = styled.nav`
  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1rem;
  height: auto;
  border-radius: 2rem;
  text-align: center;
  /* animation: ${picmovbck} 0.5s ease-in-out; */

  & img {
    cursor: pointer;
  }
  & button {
    animation: ${animbtnbck} 0.5s ease-in-out;
    visibility: hidden;
    width: 0rem;
  }

  &.loading {
    width: 22rem;
    animation: ${picmov} 0.5s ease-in-out;
    background-color: #eee;
    &::before {
      content: "";
      position: absolute;
      top: 2rem;
      left: 1.5rem;
      width: 1.2rem;
      height: 1.2rem;
      border-top: 2px solid #999;
      border-left: 2px solid #999;
      transform: rotate(-40deg);
      cursor: pointer;
    }
    &::after {
      content: "";
      position: absolute;
      top: 1rem;
      right: 1rem;
      width: 3rem;
      height: 3rem;
      background-color: #999;
      mask: url(${cog});
      transform: scale(0.6);
      cursor: pointer;
    }
    & button {
      animation: ${animbtn} 0.5s ease-in-out;
      visibility: visible;
    }
  }
`;

const DropDown1 = styled.div`
  width: 0rem;
  height: 0rem;
  opacity: 0;
  background-color: transparent;
  visibility: hidden;
  transition: all 0.3s;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;

  &.loading {
    visibility: visible;
    opacity: 1;
    width: 100%;
    height: 60%;
  }
`;

export { NavStyle2, DropDown1 };
