import styled from "styled-components";
import { nat4, nat5, nat6 } from "../static";

const CardStyle = styled.div`
  width: 25%;
  max-width: 25%;
  perspective: 150rem;
  -moz-perspective: 150rem;
  position: relative;
  height: 52rem;

  .side {
    height: 52rem;
    transition: all 0.8s ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);

    &--front {
      background-color: white;
    }

    &--back {
      transform: rotateY(180deg);

      &-1 {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.orangelight},
          ${(props) => props.theme.orangedark}
        );
      }

      &-2 {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.greenlight},
          ${(props) => props.theme.greendark}
        );
      }

      &-3 {
        background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.bluelight},
          ${(props) => props.theme.bluedark}
        );
      }
    }
  }

  &:hover .side--front {
    transform: rotateY(-180deg);
  }

  &:hover .side--back {
    transform: rotateY(0);
  }

  //FRONT SIDE STYLING
  .picture {
    background-size: cover;
    height: 23rem;
    background-blend-mode: screen;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);

    &--1 {
      background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.orangelight},
          ${(props) => props.theme.orangedark}
        ),
        url(${nat4});
    }

    &--2 {
      background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.greenlight},
          ${(props) => props.theme.greendark}
        ),
        url(${nat5});
    }

    &--3 {
      background-image: linear-gradient(
          to right bottom,
          ${(props) => props.theme.bluelight},
          ${(props) => props.theme.bluedark}
        ),
        url(${nat6});
    }
  }

  .heading {
    font-size: 2.8rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: right;
    color: white;
    position: absolute;
    top: 12rem;
    right: 2rem;
    width: 75%;
    z-index: 40;
  }

  .heading-span {
    padding: 1rem 1.5rem;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;

    &--1 {
      background-image: linear-gradient(to right bottom, #ffb900, #ff7730);
    }

    &--2 {
      background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
    }

    &--3 {
      background-image: linear-gradient(to right bottom, #2998ff, #5643fa);
    }
  }

  .details {
    padding: 3rem;

    ul {
      list-style: none;
      width: 80%;
      margin: 0 auto;

      li {
        text-align: center;
        font-size: 1.5rem;
        padding: 1rem;

        &:not(:last-child) {
          border-bottom: 1px solid ${(props) => props.theme.lightgrey};
        }
      }
    }
  }

  //BACK SIDE STYLING
  .cta {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    text-align: center;
  }

  .price-box {
    text-align: center;
    color: white;
  }

  .price-only {
    font-size: 1.4rem;
    text-transform: uppercase;
  }

  .price-value {
    font-size: 6rem;
    font-weight: 100;
    margin-bottom: 8rem;
  }
`;

export default CardStyle;
