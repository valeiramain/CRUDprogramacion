
import { Table } from 'react-bootstrap';
import ItemTabla from '../services/ItemTabla';
import { Link } from 'react-router'
import { useEffect } from 'react';

const Administrador = ({ servicios, borrarServicio }) => {

    useEffect(() => {

    }, [])

    return (
        <main className='container my-4'>
            <div className='d-flex justify-content-between align-items-center mb-4'>
                <h1>Administrar Servicios</h1>
                <Link className='btn btn-primary px-3' to={'/administrador/crear'}> Crear </Link>
            </div>

            <Table striped bordered hover responsive>
                <thead>
                    <tr className='text-center'>
                        <th>#</th>
                        <th>Servicio</th>
                        <th>Precio</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        servicios.map((servicio, indice) => <ItemTabla key={servicio.id} servicio={servicio} fila={indice + 1} borrarServicio={borrarServicio}></ItemTabla>)
                    }
                </tbody>
            </Table>

        </main>
    );
};

export default Administrador;