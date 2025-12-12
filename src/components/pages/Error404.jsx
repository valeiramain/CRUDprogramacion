import { Link } from 'react-router';
import img404 from '../../assets/kostiantyn-li-Fi_nhg5itCw-unsplash.jpg'
import { Image } from 'react-bootstrap';

const Error404 = () => {
    return (
        <div className="text-center">
            <Link to='/'>
                <Image src={img404} fluid alt="Error 404" className='w-50' />
                <h3 className='text-danger fw-bold'>Oops! Página no encontrada!</h3>
            </Link>
        </div>
    );
};

export default Error404;