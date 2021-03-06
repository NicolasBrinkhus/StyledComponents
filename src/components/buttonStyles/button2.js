import styled, { keyframes } from "styled-components";

const comeFromBottom = keyframes`
  0%{
    opacity:0;
    transform:translateY(40px);
  } 
  100%{
    opacity:1;
    transform:translateY(0);
  }
`;

const BTN2 = styled.button`
  &,
  &:link,
  &:visited {
    width: 13rem;
    text-transform: uppercase;
    text-decoration: none;
    padding: 1.5rem 4rem;
    display: inline-block;
    border-radius: 10rem;
    transition: all 0.2s;
    position: relative;
    background-color: green;
    color: ${props => props.theme.lightgrey};
    border: none;
    cursor: pointer;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);

    &::after {
      transform: scaleX(1.4) scaleY(1.6);
      opacity: 0;
      background-color: green;
    }
  }

  &:active,
  &:focus {
    outline: none;
    transform: translateY(-1px);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);
  }

  &::after {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    border-radius: 10rem;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    transition: all 0.4s;
  }
`;

export default BTN2;
