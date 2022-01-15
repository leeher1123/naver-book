import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';
import Want from './pages/Want';
import Search from './pages/Search';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/want" element={<Want />} />
      <Route path="/search/:query" element={<Search />} />
    </Routes>
  </Container>
);

const Container = styled.div`

`;

export default App;
