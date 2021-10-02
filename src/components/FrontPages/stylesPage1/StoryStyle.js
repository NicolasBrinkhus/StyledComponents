import styled from "styled-components";

const StoryStyle = styled.div`
  width: 70%;
  margin: 0 auto;
  box-shadow: 0 3rem 6rem rgba(0, 0, 0, 0.1);
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  padding: 6rem;
  padding-left: 9rem;
  font-size: 1.6rem;
  transform: skewX(-12deg);

  .shape {
    width: 15rem;
    height: 15rem;
    float: left;

    transform: translateX(-3rem) skewX(12deg);
    position: relative;
    overflow: hidden;
    border-radius: 50%;

    @supports (clip-path: polygon(0 0)) or (-webkit-clip-path: polygon(0 0)) {
      -webkit-clip-path: circle(50% at 50% 50%);
      clip-path: circle(50% at 50% 50%);

      -webkit-shape-outside: circle(50% at 50% 50%);
      shape-outside: circle(50% at 50% 50%);
      border-radius: none;
      overflow: visible;
    }
  }

  .img {
    height: 100%;
    transform: translateX(-4rem) scale(1.3);
    //transition: all 0.5s;
  }

  .text {
    transform: skewX(12deg);
  }

  .caption {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 20%);
    color: white;
    text-transform: uppercase;
    font-size: 1.7rem;
    text-align: center;
    opacity: 0;
    transition: all 0.3s;
    backface-visibility: hidden;
  }
  &:hover .caption {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
  &:hover .img {
    filter: blur(5px) brightness(80%);
    transform: translateX(-4rem) scale(1);
  }
`;

export default StoryStyle;
