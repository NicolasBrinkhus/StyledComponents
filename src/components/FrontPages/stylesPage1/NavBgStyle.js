import styled from "styled-components";

const NavBgStyle = styled.div`
  height: 6rem;
  width: 6rem;
  border-radius: 50%;
  position: fixed;
  top: 6.5rem;
  right: 6.5rem;
  background-image: radial-gradient(#7ed56f, #28b485);
  z-index: 99;
  transition: transform 0.8s cubic-bezier(0.86, 0, 0.07, 1);

  /* @include respond(tab-port) {
    top: 4.5rem;
    right: 4.5rem;
  }
  @include respond(phone) {
    top: 3.5rem;
    right: 3.5rem;
  } */
`;

export default NavBgStyle;
