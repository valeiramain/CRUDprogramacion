
import { Col, Button, Card } from "react-bootstrap";

const CardServicio = ({servicio}) => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={servicio.imagen}/>
                <Card.Body>
                    <Card.Title>{servicio.servicio}</Card.Title>
                    <Card.Text>
                        {servicio.descripcion_breve}
                    </Card.Text>
                    <Card.Text>Precio:$ {servicio.precio}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardServicio;