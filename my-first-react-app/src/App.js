import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container } from 'reactstrap';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Registration from './components/Registration';

function App() {
  return (
    <Container>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/homepage" element={<Home />} />
        </Routes>
        <ToastContainer />
      </Router>
    </Container>
  );
}

export default App;
