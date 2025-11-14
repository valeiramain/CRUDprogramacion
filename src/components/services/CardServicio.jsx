
import { Col, Button, Card } from "react-bootstrap";

const CardServicio = () => {
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg" />
                <Card.Body>
                    <Card.Title>Sitio web institucional (3–5 secciones)</Card.Title>
                    <Card.Text>
                        Desarrollo de un sitio web institucional de 3 a 5 secciones, moderno, responsive y optimizado, ideal para presentar información de una empresa o emprendimiento de forma profesional.
                    </Card.Text>
                    <Card.Text>Precio: $ 300.000.-</Card.Text>
                </Card.Body>
                <Card.Footer className="text-center">
                    <Button variant="primary">Ver Detalle</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default CardServicio;