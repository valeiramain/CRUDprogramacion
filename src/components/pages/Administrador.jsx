
import { Table } from 'react-bootstrap';
import ItemTabla from '../services/ItemTabla';
import { Link } from 'react-router'
import { useEffect, useState } from 'react';
import { listarServiciosApi } from '../../helpers/queries';

const Administrador = () => {
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        // solo en montaje (usa []). Se sacan los [] cuando se necesitan en actualizacion
        cargarServicios()
    }, [])

    const cargarServicios = async () =>{
        const respuestaServicios = await listarServiciosApi();
        console.log(respuestaServicios);
        if (respuestaServicios && respuestaServicios.status===200){
            // extrae los datos del body de la respuesta
            const datos = await respuestaServicios.json()
            setServicios(datos)
        }else{
            alert('ocurrio un error, no se pueden mostrar los productos en este momento')
        }
    }

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
                        servicios.map((servicio,indice) => <ItemTabla key={servicio._id} servicio={servicio} fila={indice + 1}></ItemTabla>)
                    }
                </tbody>
            </Table>

        </main>
    );
};

export default Administrador;