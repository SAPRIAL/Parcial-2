import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';

function Home(props) {
  return (
    <Container fluid>
        <Row>
           <Col xs={6}>
           <Card></Card>
           </Col>
           <Col xs={6}>
            <h2>ISBN</h2>
            <h2>Author</h2>
            <h2>Publisher</h2>
            <h2>Genre</h2>
            <h2>Year</h2>
            <h2>Available online</h2>
            <h2>Price</h2>
            <h2>Summary</h2>
           </Col>
        </Row>
    </Container>
  );
}

export default Home;