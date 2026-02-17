import { useNavigate, useParams } from "react-router";
import { Card, Badge, Row, Col, Button, Breadcrumb } from "react-bootstrap";
import { useEffect, useState } from "react";
import { buscarServicioApi } from "../../helpers/queries";
import { Link } from "react-router";
import Swal from "sweetalert2";

const DetalleServicio = () => {
  // id pasado en el path. id es un objeto que devuelve useParams
  const { id } = useParams();
  const navegacion = useNavigate();

  // guardo el detalle del servicio que me devuelve buscarServicioApi
  const [servicio, setServicio] = useState({});

  useEffect(() => {
    obtenerServicio();
  }, []);

  const obtenerServicio = async () => {
    const respuesta = await buscarServicioApi(id);
    if (respuesta && respuesta.status === 200) {
      const servicioBuscado = await respuesta.json();
      setServicio(servicioBuscado);
    } else {
      Swal.fire({
        title: `Ocurrió un error al obtener un servicio!`,
        text: "Intentalo en unos minutos",
        icon: "error",
      });
    }
  };

  return (
    <main className="container my-4">
      {/* Estructura del Breadcrumb */}
      <Breadcrumb>
        <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
          Inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item active>
          Detalle de {servicio.servicio || "Servicio"}
        </Breadcrumb.Item>
      </Breadcrumb>
      
      <h1 className="mb-3">Detalle Servicio</h1>

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

              <Card.Title className="fs-3 mt-2">{servicio.servicio}</Card.Title>

              <Card.Subtitle className="text-success fs-4 fw-bold my-3">
                $ {servicio.precio}
              </Card.Subtitle>

              <Card.Text className="fw-semibold">
                {servicio.descripcion_breve}
              </Card.Text>

              <Card.Text className="text-muted">
                {servicio.descripcion_amplia}
              </Card.Text>
              <Button onClick={() => navegacion("/")} variant="primary">
                Volver al Inicio
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </main>
  );
};

export default DetalleServicio;
