import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.tsx';
import Calculator from './pages/Calculator.tsx';
import Json from './pages/Json.tsx';
import Hobbies from './pages/Hobbies.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/Json" element={<Json />}></Route>
        <Route path="/Hobbies" element={<Hobbies />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
