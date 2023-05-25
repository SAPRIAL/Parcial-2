import React, { useState } from 'react'
import { Col, Container, Row, Image, Form, Button} from 'react-bootstrap';

function Login() {
const [username, setUsername] = useState([]);
const [password, setPassword] =useState([]);


  return (
    <Container fluid>
        <Row>
            <Col xs={6} style={{backgroundColor:"#b5ffea"}}>
            <Image src="https://e7.pngegg.com/pngimages/393/701/png-clipart-book-computer-icons-library-stack-book-rectangle-reading.png" width="128px" height="128px"/>
            </Col>
            <Col xs={6}>
                <Form typeof='Search' fluid>
                    <h1>Tu Libreria Aliada</h1>
                    <Form.Label>
                        User name o email
                    </Form.Label>
                    <input>
                    </input><br/>
                    <Form.Label>
                        Password
                    </Form.Label>
                    <input>
                    </input><br/>
                    <Button type='submit'>Ingresar</Button>
                </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Login;