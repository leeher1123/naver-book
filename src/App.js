import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';
import Want from './pages/Want';

const App = () => (
  <Container>
    <GlobalStyle />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/want" element={<Want />} />
    </Routes>
  </Container>
);

const Container = styled.div`

`;

export default App;
