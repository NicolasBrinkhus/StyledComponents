import styled from "styled-components";
import { nat4 } from "../static";

const SectionFeatureStyle = styled.section`
  padding: 20rem 0;
  background-image: linear-gradient(to right bottom, rgba(126, 213, 111, 0.8), rgba(40, 180, 133, 0.8)), url(${nat4});
  background-size: cover;
  margin-top: -10rem;

  transform: skewY(-7deg);

  & > * {
    transform: skewY(7deg);
  }
`;

export default SectionFeatureStyle;
