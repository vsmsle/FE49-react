import React from 'react';
// import './App.css';
import styled from "styled-components";
import { Title } from './title/title';
import { Menu } from './menu/menu';

function App() {
  return (
    <AppStyle className="App">
      <Title>Sign in</Title>
      <Menu />
    </AppStyle>
  );
}

const AppStyle = styled.div`
  width: auto;
  margin: auto;
`;

export default App;
