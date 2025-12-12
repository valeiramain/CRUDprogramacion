import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ItemTabla = ({ servicio, fila, borrarServicio }) => {
    const eliminarServicio = () => {
        Swal.fire({
            title: "Está seguro que desea eliminar el Servicio?",
            text: "No se puede revertir este proceso !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Borrar",
            cancelButtonText: "Cancelar"
        }).then((result) => {
            if (result.isConfirmed) {
                borrarServicio(servicio.id)
                Swal.fire({
                    title: "Servicio Borrado!",
                    text: `El servicio ${servicio.servicio} fue eliminado correctamente`,
                    icon: "success"
                });
            }
        });
    }

    const formatoPrecio = (precio) => {
        return `U$S ${precio.toLocaleString('en-ES', { minimumFractionDigits: 2 })}`;
    };
 



    return (
        <tr>
            <td className="text-center">{fila}</td>
            <td>{servicio.servicio}</td>
            <td className="text-center">{formatoPrecio(servicio.precio)}</td>
            <td className="text-center">
                <Link className='btn btn-warning btn-sm me-md-2' to={`/administrador/editar/${servicio.id}`}><i className="bi bi-pencil-fill"></i></Link>
                <Button variant='danger' size="sm" onClick={eliminarServicio}><i className="bi bi-trash3-fill"></i></Button>
            </td>
        </tr>
    );
};

export default ItemTabla;