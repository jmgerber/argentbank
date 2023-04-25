import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import Router from './router/router'
import Nav from './components/Nav'
import Footer from './components/Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    color: inherit;
  }

  html {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
  }

  body {
    margin: 0;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .sr-only {
    border: 0 !important;
    clip: rect(1px, 1px, 1px, 1px) !important;
    -webkit-clip-path: inset(50%) !important;
    clip-path: inset(50%) !important;
    height: 1px !important;
    margin: -1px !important;
    overflow: hidden !important;
    padding: 0 !important;
    position: absolute !important;
    width: 1px !important;
    white-space: nowrap !important;
  }
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Router />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
