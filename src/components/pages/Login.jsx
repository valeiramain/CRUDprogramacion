import { Row, Col, Form, Button } from "react-bootstrap";

import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from 'react-router';
import Swal from 'sweetalert2'
import imgLogin from '../../assets/pexels-cottonbro-3584967.jpg'


const Login = ({ setUsuarioLogueado }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navegacion = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        if ((data.email === import.meta.env.VITE_EMAIL) && (data.password === import.meta.env.VITE_PASSWORD)) {
            // redireccionar a la pagina del administrador

            // actualizar el state de la sesion del usuario
            setUsuarioLogueado(true)
            // mostrar un cartel de bienvenido. se puede usar setTimeOut
            Swal.fire({
                title: "Bienvenido Administrador!",
                text: "Ingresando al Sistema!",
                icon: "success"
            });
            navegacion('/administrador')
        } else {
            // mostrar cartel con credenciales incorrectas
            Swal.fire({
                title: "Ocurrió un error!",
                text: "Credenciales incorrectas!",
                icon: "error"
            });
        }
    }
    return (
        <main className='container my-4'>
            <Row className="align-items-center">

                {/* Columna del Form */}
                <Col xs={12} md={6}>
                    <h1>Login</h1>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email:</Form.Label>
                            <Form.Control type="email" placeholder="ingrese email" {...register('email', {
                                required: 'El email es un dato obligatorio',
                                pattern: {
                                    value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                                    message: 'el email debe cumplir con el siguiente formato: email@dominio.extensión'
                                }
                            })} />
                            <Form.Text className="text-danger">{errors.email?.message}</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Contraseña:</Form.Label>
                            <Form.Control type="password" placeholder="Contraseña"  {...register('password', {
                                required: 'La contraseña es un dato obligatorio.',
                                pattern: {
                                    value: /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
                                    message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter especial.'
                                }
                            })} />
                            <Form.Text className="text-danger">{errors.password?.message}</Form.Text>
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>

                {/* Columna de Imagen */}
                <Col xs={12} md={6} className="d-none d-md-block">
                    <img
                        src={imgLogin}
                        alt="Formulario"
                        className="img-fluid img-login"
                    />
                </Col>
            </Row>
        </main >
    );
};

export default Login;