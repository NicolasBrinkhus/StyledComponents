import React from "react";
import styled from "styled-components";
import BTN1 from "../buttonStyles/button1";
import FormInputs1 from "./FormStyles/Form1";
import FormInputs2 from "./FormStyles/Form2";

const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

const FormContainer = styled.div`
  width: 100%;
  height: 90%;
  border: 1px solid black;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 10%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  align-items: center;
  justify-items: center;
`;

function FormPage() {
  const [formSwitcher, setFormSwitcher] = React.useState(false);
  return (
    <Container>
      <BtnContainer>
        <BTN1 onClick={() => setFormSwitcher(!formSwitcher)}>Form 1</BTN1>
        <BTN1>Form 2</BTN1>
        <BTN1>Form 3</BTN1>
        <BTN1>Form 4</BTN1>
      </BtnContainer>
      <FormContainer>
        {formSwitcher ? <FormInputs2 /> : <FormInputs1 />}
      </FormContainer>
    </Container>
  );
}

export default FormPage;