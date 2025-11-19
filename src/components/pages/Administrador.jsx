
import { Table } from 'react-bootstrap';
import ItemTabla from '../services/ItemTabla';
import {Link} from 'react-router'

const Administrador = ({servicios}) => {
    return (
        <main className='container my-4'>
            <div className='d-flex justify-content-between align-items-center'>
                <h1 className='mb-3'>Administrar Servicios</h1>
                <Link className='btn btn-primary' to={'/administrador/crear'}>Crear</Link>
            </div>
            <Table striped bordered hover>
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
                        servicios.map((servicio)=><ItemTabla key={servicio.id} servicio={servicio}></ItemTabla>)
                    }
                </tbody>
            </Table>
        </main>
    );
};

export default Administrador;