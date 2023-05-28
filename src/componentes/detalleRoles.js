import { Col } from "react-bootstrap";
import { FormattedMessage } from "react-intl";

function DetalleRoles(props) {
    return (
    <Col xs={4}>
        <h2>{props.book.name}</h2>
        <h2><FormattedMessage id="ISBN"/> {props.book.isbn}</h2>
        <h2><FormattedMessage id="Autor"/> {props.book.author}</h2>
        <h2><FormattedMessage id="Editorial"/> {props.book.publisher}</h2>
        <h2><FormattedMessage id="Genero"/> {props.book.gender}</h2>
        <h2><FormattedMessage id="Anho"/> {props.book.year}</h2>
        <h2><FormattedMessage id="EnLinea"/> {String(props.book.available_online)}</h2>
        <h2><FormattedMessage id="Precio"/> {props.book.price}</h2>
        <h2><FormattedMessage id="Resumen"/> {props.book.summary}</h2>
    </Col>
    );
   }
   
export default DetalleRoles;