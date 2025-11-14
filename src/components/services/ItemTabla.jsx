import { Button } from "react-bootstrap";


const ItemTabla = () => {
    return (
        <tr>
            <td>1</td>
            <td>e-commerce</td>
            <td>$ 300.000</td>
            <td className="text-center"><Button variant='warning' className="me-2"><i className="bi bi-pencil-fill"></i></Button>  <Button variant='danger'><i className="bi bi-trash3-fill"></i></Button></td>
        </tr>
    );
};

export default ItemTabla;