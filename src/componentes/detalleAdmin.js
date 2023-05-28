import { Col, Form } from "react-bootstrap";
import { useIntl } from "react-intl";

function DetalleAdmin(props) {
    const intl = useIntl()
    return (
    <Col xs={4}>
        <Form.Control type="text" value={props.book.name}/>
        <Form.Control type="text" value={intl.formatMessage({id:"ISBN"})+ " " + props.book.isbn }/>
        <Form.Control type="text" value={intl.formatMessage({id:"Autor"})+ " " + props.book.author}/>
        <Form.Control type="text" value={intl.formatMessage({id:"Editorial"})+ " " + props.book.publisher}/>
        <Form.Control type="text" value={intl.formatMessage({id:"Genero"})+ " " + props.book.gender}/>
        <Form.Control type="text" value={intl.formatMessage({id:"Anho"})+ " " + props.book.year}/>
        <Form.Control type="text" value={intl.formatMessage({id:"EnLinea"})+ " " + props.book.available_online}/>
        <Form.Control type="text" value={intl.formatMessage({id:"Precio"})+ " " + props.book.price}/>
        <Form.Control type="text" value={intl.formatMessage({id:"Resumen"})+ " " + props.book.summary}/>
    </Col>
    );
   }
   
export default DetalleAdmin;
    
