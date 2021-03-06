import styled from "styled-components";

const BTN4 = styled.button`
  position: relative;
  width: 14rem;
  display: inline-block;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  background: transparent;
  padding: 2px;
  font-size: 1.3rem;
  font-family: inherit;
  cursor: pointer;

  .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: black;
    border-radius: 1.625rem;
    .icon {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      background: white;
    }
    .arrow {
      transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
      left: 0.625rem;
      width: 1.125rem;
      height: 0.14rem;
      background: none;

      &::before {
        content: "";
        position: absolute;
        top: -0.25rem;
        right: 0.0625rem;
        width: 0.625rem;
        height: 0.625rem;
        border-top: 0.225rem solid #fff;
        border-right: 0.225rem solid #fff;
        transform: rotate(45deg);
      }
    }
  }
  .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: black;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }
  &:hover {
    .circle {
      width: 100%;
      .arrow {
        background: white;
        transform: translate(1rem, 0);
      }
    }
    .button-text {
      color: white;
    }
  }
`;

export default BTN4;
