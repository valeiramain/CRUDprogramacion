
import { Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router";


const CardServicio = ({servicio}) => {
    return (
        <Col>
            <Card className="h-100">
                <div className="card-img-container">
                <Card.Img variant="top" src={servicio.imagen} alt={servicio.servicio} className="card-img-uniform"/>
                </div>
                <Card.Body>
                    <Card.Title>{servicio.servicio}</Card.Title>
                    <Card.Text>
                        {servicio.descripcion_breve}
                    </Card.Text>
                    <Card.Text>Precio:$ {servicio.precio}</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Link className='btn btn-primary' to={`/detalle/${servicio.id}`}>Ver Detalle</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardServicio;