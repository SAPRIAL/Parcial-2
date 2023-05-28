import React from 'react';
import './App.css';
import Login from './componentes/login';
import Home from './componentes/home';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Container id="main" fluid className="App positon-relative">
          <Routes>
            <Route path="/" element={<Login/>}/> 
            <Route path="/home" element={<Home/>}/>
          </Routes>
      </Container>
    </Router>
  );
}

export default App;
