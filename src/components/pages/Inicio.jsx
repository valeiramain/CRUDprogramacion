import {Row} from "react-bootstrap";

import CardServicio from "../services/CardServicio";

const Inicio = () => {
    return (
        <main className="container my-4">
            <h1>Catálogo de Servicios</h1>

            {/* sistema de grillas con las cards */}
            <Row xs={1} md={3} lg={4} className="g-4">
                <CardServicio></CardServicio>
                
            </Row>
        </main>
    );
};

export default Inicio;