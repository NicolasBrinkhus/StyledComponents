import styled from "styled-components";
import { herosmall } from "../static";

const HeaderStyle = styled.header`
  height: 90vh;
  background-image: linear-gradient(
      to right bottom,
      rgba(126, 213, 111, 0.8),
      rgba(40, 180, 133, 0.8)
    ),
    url(${herosmall});
  background-size: cover;
  background-position: top;

  position: relative;

  -webkit-clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 75vh, 0 100%);

  .logo-box {
    position: absolute;
    top: 4rem;
    left: 4rem;
  }

  img {
    height: 3.5rem;
  }

  .text-box {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
`;

export default HeaderStyle;
