import styled from "styled-components";

const CompositionStyle = styled.div`
  position: relative;

  .photo {
    width: 55%;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
    border-radius: 2px;
    position: absolute;
    z-index: 10;
    transition: all 0.2s;
    outline-offset: 1.5rem;

    &--p1 {
      left: 0;
      top: -2rem;
    }
    &--p2 {
      right: 0;
      top: 2rem;
    }
    &--p3 {
      left: 20%;
      top: 10rem;
    }

    &:hover {
      outline: 1.5rem solid ${(props) => props.theme.green};
      transform: scale(1.05) translateY(-0.5rem);
      box-shadow: 0 2.5rem 4rem rgba(0, 0, 0, 0.5);
      z-index: 20;
    }
  }

  &:hover .photo:not(:hover) {
    transform: scale(0.9);
  }
`;

export default CompositionStyle;