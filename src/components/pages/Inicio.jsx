import { Row } from "react-bootstrap";
import CardServicio from "../services/CardServicio";
import { useEffect, useState } from "react";
import { listarServiciosApi } from '../../helpers/queries';

const Inicio = () => {
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        // solo en montaje (usa []). Se sacan los [] cuando se necesitan en actualizacion
        cargarServicios()
    }, [])

    const cargarServicios = async () => {
        const respuestaServicios = await listarServiciosApi();
        // console.log(respuestaServicios);
        if (respuestaServicios && respuestaServicios.status === 200) {
            // extrae los datos del body de la respuesta
            const datos = await respuestaServicios.json()
            setServicios(datos)
        } else {
            alert('ocurrio un error, no se pueden mostrar los productos en este momento')
        }
    }

    return (
        <main className="container my-4">
            <h1 className="mb-3">Catálogo de Servicios</h1>

            {/* sistema de grillas con las cards */}
            <Row xs={1} md={3} lg={4} className="g-4">
                {
                    servicios.map((servicio) => <CardServicio key={servicio._id} servicio={servicio}></CardServicio>)
                }
            </Row>
        </main>
    );
};

export default Inicio;