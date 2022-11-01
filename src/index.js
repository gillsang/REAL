import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Homepage from './routes/Homepage';
import Examination from './routes/Examination';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="homepage" element={<Homepage />} />
      <Route path="examination" element={<Examination />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
// 