import styled from "styled-components";

const FeatureBoxStyle = styled.div`
  width: 20%;
  background-color: rgba(255, 255, 255, 0.7);
  padding: 2.5rem;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
  transition: all 0.2s;

  p {
    font-size: 1.5rem;
    color: ${props => props.theme.lightblack};
  }

  .icon {
    font-size: 6rem;
    margin-bottom: 0.5rem;
    display: inline-block;
    background-image: linear-gradient(
      to right,
      ${props => props.theme.greenlight},
      ${props => props.theme.greendark}
    );
    color: transparent;
  }

  &:hover {
    transform: translateY(-1.5rem) scale(1.03);
  }
`;

export default FeatureBoxStyle;
