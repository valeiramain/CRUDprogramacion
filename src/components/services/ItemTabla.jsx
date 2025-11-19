import { Button } from "react-bootstrap";


const ItemTabla = ({servicio}) => {
    return (
        <tr>
            <td>1</td>
            <td>{servicio.servicio}</td>
            <td>{servicio.precio}</td>
            <td className="text-center"><Button variant='warning' className="me-2"><i className="bi bi-pencil-fill"></i></Button>  <Button variant='danger'><i className="bi bi-trash3-fill"></i></Button></td>
        </tr>
    );
};

export default ItemTabla;