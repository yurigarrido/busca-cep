import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MyContext from './context/MyContext';
import ByCEP from './pages/ByCEP';
import FromAdress from './pages/FromAdress';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import GlobalStyle from './GlobalStyle';

ReactDOM.render(
  <BrowserRouter>
    <Header />
    <MyContext>
      <Routes>
        <Route path="/" element={<App />}/>
        <Route path="buscarCep" element={<FromAdress />}/>
        <Route path="buscarEndereco" element={<ByCEP />}/>
      </Routes>
    </MyContext>
    <Footer />
    <GlobalStyle />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
