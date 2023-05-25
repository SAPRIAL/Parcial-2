import React from 'react';
import './App.css';
import "react-bootstrap"
import Login from './componentes/login';
import Home from './componentes/home';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <Login></Login>
      <Home></Home>
    </Container>
    
  );
}

export default App;
