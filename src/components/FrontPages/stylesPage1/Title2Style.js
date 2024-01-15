import styled from "styled-components";

const Title2Style = styled.h2`
  font-size: 3.5rem;
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.greenlight},
    ${(props) => props.theme.greendark}
  );
  -webkit-background-clip: text;
  color: transparent;
  letter-spacing: 2px;
  transition: all 0.2s;
  text-align: center;

  &:hover {
    transform: skewY(2deg) skewX(15deg) scale(1.1);
    text-shadow: 0.5rem 1rem 2rem rgba(0, 0, 0, 0.2);
  }
`;

export default Title2Style;
