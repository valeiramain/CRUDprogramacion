import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router";



function Footer() {
    return (
        <footer className="footer">
            <Container>
                <Row className="gy-4">

                    {/* Logo + descripción */}
                    <Col xs={12} md={4}>
                        <Link className="footer-logo text-warning">
                            <i className="bi bi-code-slash"></i> CODE
                        </Link>
                        <p className="footer-text">
                            Soluciones de programación hechas a medida. Desarrollo web, móvil,
                            automatizaciones y más.
                        </p>
                    </Col>

                    {/* Enlaces rápidos */}
                    <Col xs={6} md={2}>
                        <h5 className="footer-title">Enlaces</h5>
                        <ul className="footer-links">
                            <li><Link to="/">Inicio</Link></li>
                            <li><Link to="/servicios">Servicios</Link></li>
                            <li><Link to="/nosotros">Nosotros</Link></li>
                            <li><Link to="/contacto">Contacto</Link></li>
                        </ul>
                    </Col>

                    {/* Categorías */}
                    <Col xs={6} md={3}>
                        <h5 className="footer-title">Categorías</h5>
                        <ul className="footer-links">
                            <li><Link to="/web">Desarrollo Web</Link></li>
                            <li><Link to="/mobile">Apps Móviles</Link></li>
                            <li><Link to="/backend">Backend & APIs</Link></li>
                            <li><Link to="/automatizacion">Automatización</Link></li>
                        </ul>
                    </Col>

                    {/* Redes sociales */}
                    <Col xs={12} md={3}>
                        <h5 className="footer-title">Síguenos</h5>
                        <div className="footer-socials">
                            <Link to="/"><i className="bi bi-facebook"></i></Link>
                            <Link to="/"><i className="bi bi-instagram"></i></Link>
                            <Link to="/"><i className="bi bi-github"></i></Link>
                            <Link to="/"><i className="bi bi-linkedin"></i></Link>
                        </div>
                    </Col>

                </Row>

                {/* Línea inferior */}
                <div className="footer-bottom">
                    © {new Date().getFullYear()}<i className="bi bi-code-slash ms-3"></i> CODE — Todos los derechos reservados.
                </div>
            </Container>
        </footer>
    );
}

export default Footer;
