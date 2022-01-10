import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </Container>
);

const Container = styled.div`

`;

export default App;
