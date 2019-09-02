import styled, { keyframes } from "styled-components";

const fadeInForm = keyframes`
  0% {
    visibility: hidden;
    opacity: 0;
  }
  100% {
    visibility: show;
    opacity: 1;
  }
`;

const Form1 = styled.form`
  background: transparent;
  font-size: 1.5rem;
  line-height: 1.5;
  font-weight: 600;
  animation: ${fadeInForm} 0.3s ease-in-out;

  label {
    display: block;
    margin-bottom: 1rem;
    color: #888;
    font-weight: bold;
  }
  input,
  textarea,
  select {
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    border: none;
    &:focus {
      outline: 0;
      border-color: ${props => props.theme.red};
    }
  }
  fieldset {
    border: 0;
    padding: 0;

    &[disabled] {
      opacity: 0.5;
    }
    &[aria-busy="true"]::before {
      background-size: 50% auto;
    }
  }
`;

export default Form1;
