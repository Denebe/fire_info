import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, Detail } from "./pages"


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  </BrowserRouter>
);

export default App;