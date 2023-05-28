import React, { useState } from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import DetalleAdmin from './detalleAdmin'
import DetalleRoles from './detalleRoles';

const { useEffect } = require("react");

function Home() {
  const props = useLocation();
  const [libros, setLibros] = useState([]);
  const [book, setBook] = useState({});
  const [display, setDisplay] = useState(false)

  const onSearch = (id) => {
    const URL = `http://localhost:3000/books/${id}`;
    fetch(URL).then(data => data.json()).then(data => {
        setBook(data);
    })
  }

  useEffect(() => {
    const URL = "http://localhost:3000/books";
    fetch(URL).then(data => data.json()).then(data => {
        setLibros(data);
    })
  }, [])
  
  const renderRol = () => {
    if (props.state.rol==="Administrador"){
      return (
      <>
        {display ? <DetalleAdmin book={book} key={book.id}/>: null}
      </>
      )
    } 
    else{
      return (
        <>
          {display ? <DetalleRoles book={book} key={book.id}/>: null}
        </>
      )
    }
  }

  return (
    <Container fluid>
        <Row>
           <Col xs={8}>
              <Row>
                {libros.map(libro =>
                  <Card onClick={()=>{onSearch(libro.id);setDisplay(true)}} className="mt-3 mb-3 ms-3 me-3" key={libro.id} style={{ width: "250px", height: "350px" }}>
                    <Card.Img variant="top" src={libro.image} />
                    <Card.Body>
                      <Card.Title>{libro.name} </Card.Title>
                      <Card.Text>
                        ISBN: {libro.isbn} 
                      </Card.Text>
                    </Card.Body>
                  </Card>
                )}
              </Row>
           </Col>
           {renderRol()}
        </Row> 
    </Container>
  );
}

export default Home;