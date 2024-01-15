import React from "react";
import styled from "styled-components";
import bossIcon from "../../static/bossIcon.png";
import { NavStyle2, DropDown1 } from "./NavStyles/NavStyle2";
import BTN7 from "../buttonStyles/button7";
import Form1 from "../Forms/FormStyles/Form1";

const PageStyle = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme.lightgrey};
`;

function NavPage() {
  const [loading, setLoading] = React.useState(false);
  const [islogin] = React.useState(false);
  const [signInHandler, setSiginHandler] = React.useState(false);

  return (
    <PageStyle>
      <NavStyle2 className={loading ? "loading" : ""}>
        <img
          onClick={() => setLoading(!loading)}
          width="100"
          src={bossIcon}
          alt="pic"
        />
        {islogin ? (
          <DropDown1 className={loading ? "loading" : ""}>
            <h2>John Doe</h2>
            <p>johndoe@gmail.com</p>
            <BTN7>Log Out</BTN7>
          </DropDown1>
        ) : (
          <DropDown1 className={loading ? "loading" : ""}>
            <BTN7 hidden onClick={() => setSiginHandler(!signInHandler)}>
              Log In
            </BTN7>
            {signInHandler ? <Form1 /> : ""}
            <BTN7>Register</BTN7>
          </DropDown1>
        )}
      </NavStyle2>
    </PageStyle>
  );
}

export default NavPage;
