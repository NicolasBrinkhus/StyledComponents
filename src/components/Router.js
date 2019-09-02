import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import App from "./App";
import FormPage from "./Forms/FormPage";
import TablesPage from "./TablesPage";
import NavPage from "./NavPage";
import NotFound from "./NotFound";

const theme = {
  red: "#FF0000",
  green: "#0cbf00",
  black: "#393939",
  coral: "#ff7f50",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }
  body {
    /* font-family: 'Rednika_next'; */
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Router extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={App} />
              <Route exact path="/forms" component={FormPage} />
              <Route exact path="/tables" component={TablesPage} />
              <Route exact path="/navegation" component={NavPage} />
              <Route component={NotFound} />
            </Switch>
          </BrowserRouter>
        </>
      </ThemeProvider>
    );
  }
}

export default Router;
