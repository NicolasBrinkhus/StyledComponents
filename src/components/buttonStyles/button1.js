import styled from "styled-components";

const BTN1 = styled.button`
  width: 13rem;
  padding: 10px 20px 10px 20px;
  border: none;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  background-image: linear-gradient(to bottom, #3498db, #2980b9);
  background: #3498db;
  font-size: 20px;
  text-decoration: none;

  &:hover {
    background: #3cb0fd;
    background-image: -webkit-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -moz-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -ms-linear-gradient(top, #3cb0fd, #3498db);
    background-image: -o-linear-gradient(top, #3cb0fd, #3498db);
    background-image: linear-gradient(to bottom, #3cb0fd, #3498db);
    text-decoration: none;
  }
`;

export default BTN1;
