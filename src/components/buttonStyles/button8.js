import styled from "styled-components";

const BTN8 = styled.button`
  width: 5rem;
  height: 3rem;
  border: none;
  color: #ffffff;
  background: #3498db;
  text-decoration: none;
  font-size: 1.4rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  position: relative;
  z-index: 1;

  &::after,
  &::before {
    content: "";
    width: 5rem;
    height: 3rem;
    background-color: #3498db;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  &::before {
    transform: rotate(60deg);
  }
  &::after {
    transform: rotate(-60deg);
  }
`;

export default BTN8;
