import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import App from './App'
import FormPage from './Forms/FormPage'
import TablesPage from './TablesPage'
import NavPage from './Navegation/NavPage'
import NotFound from './NotFound'
import FrontPage1 from './FrontPages/FrontPage1'

const theme = {
  red: '#FF0000',
  green: '#55c57a',
  greenlight: '#7ed56f',
  greendark: ' #28b485',
  black: '#393939',
  lightblack: '#777777',
  coral: '#ff7f50',
  grey: '#3A3A3A',
  lightgrey: '#E1E1E1',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  orangelight: '#ffb900',
  orangedark: '#ff7730',
  bluelight: '#2998ff',
  bluedark: '#5643fa',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)',
}

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
`

const RouterApp = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/front1" element={<FrontPage1 />} />
          <Route path="/forms" element={<FormPage />} />
          <Route path="/tables" element={<TablesPage />} />
          <Route path="/navegation" element={<NavPage />} />
          <Route element={NotFound} />
        </Routes>
      </>
    </ThemeProvider>
  )
}

export default RouterApp
