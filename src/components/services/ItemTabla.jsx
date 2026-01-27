import { Button } from "react-bootstrap";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { borrarServicioApi } from "../../helpers/queries";

const ItemTabla = ({ servicio, fila, servicios, setServicios }) => {
  const eliminarServicio = () => {
    Swal.fire({
      title: "Está seguro que desea eliminar el Servicio?",
      text: "No se puede revertir este proceso !",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuestaBorrarServicio = await borrarServicioApi(servicio._id);
        if (respuestaBorrarServicio && respuestaBorrarServicio.status === 200) {
          Swal.fire({
            title: "Servicio Borrado!",
            text: `El servicio ${servicio.servicio} fue eliminado correctamente`,
            icon: "success",
          });
          //actualizar contenido tabla
          const serviciosActualizados = servicios.filter(
            (item) => item._id !== servicio._id,
          );
          setServicios(serviciosActualizados);
        } else {
          Swal.fire({
            title: "ocurrió un error al intentar borrar un servicio!",
            text: `El servicio ${servicio.servicio} no se pudo borrar. Inténtelo més tarde.`,
            icon: "error",
          });
        }
      }
    });
  };

  const formatoPrecio = (precio) => {
    return `U$S ${precio.toLocaleString("en-ES", { minimumFractionDigits: 2 })}`;
  };

  return (
    <tr>
      <td className="text-center">{fila}</td>
      <td>{servicio.servicio}</td>
      <td className="text-center">{formatoPrecio(servicio.precio)}</td>
      <td className="text-center">
        <Link
          className="btn btn-warning btn-sm me-md-2"
          to={`/administrador/editar/${servicio._id}`}
        >
          <i className="bi bi-pencil-fill"></i>
        </Link>
        <Button variant="danger" size="sm" onClick={eliminarServicio}>
          <i className="bi bi-trash3-fill"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemTabla;
