import { Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardServicio from "../services/CardServicio";

const Inicio = () => {
    return (
        <main className="container my-4">
            <p>catalogo de servicios</p>
            <Row>
               <CardServicio></CardServicio>
               <CardServicio></CardServicio>
               <CardServicio></CardServicio>
               <CardServicio></CardServicio>
            </Row>
        </main>
    );
};

export default Inicio;