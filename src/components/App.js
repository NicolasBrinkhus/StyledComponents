import React from "react";
import styled from "styled-components";
import BTN1 from "./buttonStyles/button1";
import BTN2 from "./buttonStyles/button2";
import BTN3 from "./buttonStyles/button3";
import BTN4 from "./buttonStyles/button4";
import BTN5 from "./buttonStyles/button5";
import BTN6 from "./buttonStyles/button6";
import BTN7 from "./buttonStyles/button7";
import BTN8 from "./buttonStyles/button8";

const BOX = styled.div`
  display: grid;
  grid-template-rows: 10rem 10rem;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
`;

function App(props) {
  return (
    <div>
      <h1>CSS Styled-Components Design Compilation</h1>
      <BOX>
        <BTN1 onClick={() => props.history.push("/front1")}>Front1</BTN1>
        <BTN2 onClick={() => props.history.push("/forms")}>Forms</BTN2>
        <BTN3 onClick={() => props.history.push("/tables")}>Tables</BTN3>
        <BTN4 className="learn-more">
          <div className="circle">
            <span className="icon arrow"></span>
          </div>
          <p className="button-text">Learn More</p>
        </BTN4>
        <BTN5 onClick={() => props.history.push("/")}>Buttons</BTN5>
        <BTN6 onClick={() => props.history.push("/navegation")}>
          Navegation
        </BTN6>
        <p>hello</p>
        <BTN7>Buttons</BTN7>
        <BTN8>Send</BTN8>
      </BOX>
    </div>
  );
}

export default App;
