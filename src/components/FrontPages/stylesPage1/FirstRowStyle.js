import styled from "styled-components";

const FirstRowStyle = styled.div`
  max-width: 114rem;
  margin: 0 auto;
  display: flex;

  p {
    font-size: 1.8rem;
    color: ${props => props.theme.lightblack};
  }

  .btn-text {
    margin-bottom: 2rem;

    &:link,
    &:visited {
      font-size: 1.6rem;
      color: ${props => props.theme.green};
      display: inline-block;
      text-decoration: none;
      border-bottom: 1px solid ${props => props.theme.green};
      padding: 3px;
      transition: all 0.2s;
    }
    &:hover {
      background-color: ${props => props.theme.green};
      color: white;
      box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.15);
      transform: translateY(-2px);
    }
    &:active {
      box-shadow: 0 0.5rem 0.5rem rgba(0, 0, 0, 0.15);
      transform: translateY(0);
    }
  }
`;

export default FirstRowStyle;
