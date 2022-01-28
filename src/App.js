import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';
import Want from './pages/Want';
import Search from './pages/Search';
import Toggle from './views/want/components/Custom/Toggle';
import Tag from './views/want/components/Custom/Tag';
import Tab from './views/want/components/Custom/Tab';
import Modal from './views/want/components/Custom/Modal';
import ClickToEdit from './views/want/components/Custom/ClickToEdit';
import AutoComplete from './views/want/components/Custom/autoComplete/AutoComplete';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/want" element={<Want />} />
      <Route path="/search/:query" element={<Search />} />
      <Route path="/toggle" element={<Toggle />} />
      <Route path="/tag" element={<Tag />} />
      <Route path="/tab" element={<Tab />} />
      <Route path="/modal" element={<Modal />} />
      <Route path="/clickToEdit" element={<ClickToEdit />} />
      <Route path="/autoComplete" element={<AutoComplete />} />
    </Routes>
  </Container>
);

const Container = styled.div`

`;

export default App;
