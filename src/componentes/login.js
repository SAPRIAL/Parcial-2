import React, { useState } from 'react'
import { Col, Container, Row, Image, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FormattedMessage, useIntl } from "react-intl";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] =useState("");
    const navigate = useNavigate();
    const intl = useIntl()

  const handleInputChange = (e) => {
        const {id, value} = e.target;
        if(id === "email"){
            setEmail(value);
        }
        else if(id === "password"){
            setPassword(value);
        }
    }

    const handleSubmit  = () => {
        if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email) || password.length < 6){
            if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email) && password.length < 6){
                alert(intl.formatMessage({id:"Pc"}))
            }
            else if (!/[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email)){
                alert(intl.formatMessage({id:"C"}))
            }
            else if (password.length < 6){
                alert(intl.formatMessage({id:"P"}))
            }
        }else{   
            let obj = {
                "email": email,
                "password": password 
            }
            const URL = 'http://localhost:3000/login';
            fetch(URL, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json',
                },
                body: JSON.stringify(obj)
            })
                .then((response) => response.json())
                .then((data) => {
                alert(intl.formatMessage({id:"Correcto"}));
                navigate("/home",{ state: data, replace: true });
                })
                .catch((error) => {
                console.error(error);
                alert(error);
                });   
        }
    }

  return ( 
    <Container fluid className="position-absolute top-50 start-50 translate-middle">
        <Row className="justify-content-md-center">
            <Col xs={2} style={{backgroundColor:"#b5ffea", color:"#ffffff"}}>
                <Image className='mt-5 mb-4' src={require('./pila-de-libros.png')} width="128px" height="200px"/>
            <Container fluid className='mb-5'>
                <h2><FormattedMessage id="Titulo1Login"/></h2>
            </Container>
            </Col>
            <Col xs={2} style={{backgroundColor:"#ffffff", textAlign:"left"}}>
            <Container fluid className='mt-5 mb-5' style={{textAlign:"center"}}>
                <h2><FormattedMessage id="Titulo2Login"/></h2>
            </Container>
            <Form>
                <Form.Group className="mb-3" >
                    <Form.Label><FormattedMessage id="Email"/></Form.Label>
                    <Form.Control id="email" type="email"
                        value={email}
                        onChange = {(e) => handleInputChange(e)}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label><FormattedMessage id="Contrasenha"/></Form.Label>
                    <Form.Control id="password" type="password"
                        value={password}
                        onChange = {(e) => handleInputChange(e)}/>
                </Form.Group>
                <Button variant="primary" type="button" onClick={()=>{handleSubmit()}}>
                    <FormattedMessage id="IniciarSesion"/>
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  );
}

export default Login;