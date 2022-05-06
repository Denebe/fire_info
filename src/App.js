import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Detail } from "./pages"
import GlobalStyle from './globalStyles'
import Nav from './components/Nav'

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Nav style={{ zindex: 5 }} />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default App;