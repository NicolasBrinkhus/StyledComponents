import styled from "styled-components";

const BTN7 = styled.button`
  width: 18rem;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 1rem;
  color: #ffffff;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  background: #3498db;
  text-decoration: none;
  font-size: inherit;
  font-weight: bold;
  text-transform: uppercase;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.4);
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background: #3cb0fd;
    transform: translateY(-3px);
    box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.2);
    text-decoration: none;
  }
`;

export default BTN7;
