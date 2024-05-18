import React from 'react';
import MainPage from './pages/MainPage';
import Header from './components/Header';
import CoinsPage from './pages/CoinsPage';
import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import LoginForm from './pages/LoginForm';

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <header>
        <Header />
      </header>

      <div className="flex-grow-1">
        <Routes>
          <Route path="/" element={(<MainPage/>)}/>
          <Route path="/topcoins" element={(<CoinsPage/>)} />
          {/* <Route path="/pricing" element={(<Pricing/>)} /> */}
          <Route path="/login" element={(<LoginForm/>)} />
        </Routes>
      </div>

        <Footer />
      
    </div>
  );
};

export default App;
