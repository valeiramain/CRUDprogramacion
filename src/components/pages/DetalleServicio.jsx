import { useNavigate, useParams } from "react-router";
import { Card, Badge, Button, Row, Col } from "react-bootstrap";

const DetalleServicio = () => {
    // id pasado en el path. id es un objeto que devuelve useParams
    const { id } = useParams();
    console.log(id)
    const navegacion = useNavigate()

    // Obtener servicios del localStorage
    const servicios = JSON.parse(localStorage.getItem("serviciosKey")) || [];

    // Buscar servicio por ID
    const servicio = servicios.find(s => s.id === id);

    return (
        <main>

            <Card className="shadow-lg border-0">
                <Row className="g-0">
                    {/* Imagen */}
                    <Col md={5}>
                        <Card.Img
                            src={servicio.imagen}
                            alt={servicio.servicio}
                            className="h-100 object-fit-cover"
                        />
                    </Col>

                    {/* Contenido */}
                    <Col md={7}>
                        <Card.Body className="p-4">
                            <Badge bg="primary" className="mb-2">
                                {servicio.categoria}
                            </Badge>

                            <Card.Title className="fs-3 mt-2">
                                {servicio.servicio}
                            </Card.Title>

                            <Card.Subtitle className="text-success fs-4 fw-bold my-3">
                                USD {servicio.precio}
                            </Card.Subtitle>

                            <Card.Text className="fw-semibold">
                                {servicio.descripcion_breve}
                            </Card.Text>

                            <Card.Text className="text-muted">
                                {servicio.descripcion_amplia}
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </main>
    );
};

export default DetalleServicio;