import { Container, Row, Col } from "react-bootstrap";


function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="gy-4">

                    {/* Logo + descripción */}
                    <Col xs={12} md={4}>
                        <h4 className="footer-logo text-warning">
                            <i className="bi bi-code-slash"></i> CODE
                        </h4>
                        <p className="footer-text">
                            Soluciones de programación hechas a medida. Desarrollo web, móvil,
                            automatizaciones y más.
                        </p>
                    </Col>

                    {/* Enlaces rápidos */}
                    <Col xs={6} md={2}>
                        <h5 className="footer-title">Enlaces</h5>
                        <ul className="footer-links">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/servicios">Servicios</a></li>
                            <li><a href="/nosotros">Nosotros</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                        </ul>
                    </Col>

                    {/* Categorías */}
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">Categorías</h5>
                        <ul className="footer-links">
                            <li><a href="/web">Desarrollo Web</a></li>
                            <li><a href="/mobile">Apps Móviles</a></li>
                            <li><a href="/backend">Backend & APIs</a></li>
                            <li><a href="/automatizacion">Automatización</a></li>
                        </ul>
                    </Col>

                    {/* Redes sociales */}
                    <Col xs={12} md={3}>
                        <h5 className="footer-title">Síguenos</h5>
                        <div className="footer-socials">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-github"></i></a>
                            <a href="#"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </Col>

                </Row>

                {/* Línea inferior */}
                <div className="footer-bottom">
                    © {new Date().getFullYear()} DevServices — Todos los derechos reservados.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
