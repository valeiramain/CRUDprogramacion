import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";
import { buscarServicioApi, crearServicioApi, editarServicioApi } from "../../helpers/queries";



const FormularioServicio = ({ titulo }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        setValue
    } = useForm();

    // id pasado en el path. id es un objeto que devuelve useParams
    const { id } = useParams();
    const navegacion = useNavigate()

    useEffect(() => {
        // solo en montaje
        // si estoy editando, busco el objeto para mostrar en el formulario
        cargarDatos()
    }, [])

    const cargarDatos = async () => {
        if (titulo === 'Editar Servicio') {
            const respuestaServicio = await buscarServicioApi(id);
            if (respuestaServicio && respuestaServicio.status === 200) {
                const servicioBuscado = await respuestaServicio.json()

                //react-hook-form agrega el value a un input con set value
                setValue('servicio', servicioBuscado.servicio)
                setValue('precio', servicioBuscado.precio)
                setValue('imagen', servicioBuscado.imagen)
                setValue('categoria', servicioBuscado.categoria)
                setValue('descripcion_breve', servicioBuscado.descripcion_breve)
                setValue('descripcion_amplia', servicioBuscado.descripcion_amplia)
            }
        }
    }

    const onSubmit = async (data) => {
        if (titulo === 'Crear Servicio') {
            //agreego la logica de creae
            // crearServicio(data)
            const respuestaServicioCreado = await crearServicioApi(data)
            if (respuestaServicioCreado && respuestaServicioCreado.status === 201) {
                Swal.fire({
                    title: "Servicio Creado!",
                    text: `El Servicio ${data.servicio} fue creado correctamente.`,
                    icon: "success"
                });
                reset();
            } else {
                Swal.fire({
                    title: "Ocurrio un error al Crear el servicio!",
                    text: `El Servicio ${data.servicio} no fue creado.`,
                    icon: "error"
                });
            }
        } else {
            //editar
            const respuestaEditarServicio = await editarServicioApi(data, id)
            if (respuestaEditarServicio && respuestaEditarServicio.status === 200) {
                Swal.fire({
                    title: "Servicio Editado!",
                    text: `El Servicio ${data.servicio} fue editado correctamente.`,
                    icon: "success"
                });
                //volver a pagina del administrador
                navegacion('/administrador')
            } else {
                Swal.fire({
                    title: "Ocurrió un Error!",
                    text: `El Servicio ${data.servicio} no puso ser editado. Inténtelo en unos minutos.`,
                    icon: "error"
                });
            }
        }
    };

    return (
        <main className="container my-4">
            <h1>{titulo}</h1>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Servicio</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Diseño de sitio web institucional"
                        {...register("servicio", {
                            required: "El servicio es un dato obligatorio",
                            minLength: {
                                value: 5,
                                message:
                                    "El servicio debe contener como minimo 5 caracteres",
                            },
                            maxLength: {
                                value: 100,
                                message:
                                    "El servicio debe contener como maximo 100 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">{errors.servicio?.message}</Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Precio*</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Ej: 50"
                        // step={0.1}
                        {...register("precio", {
                            required: "El precio es un valor obligatorio",
                            min: {
                                value: 50,
                                message:
                                    "El precio minimo del producto debe ser de almenos $50",
                            },
                            max: {
                                value: 1000000,
                                message:
                                    "El precio maximo de un producto debe ser de hasta $1000000",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.precio?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Imagen URL*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: https://www.pexels.com/es-es/image/"
                        {...register("imagen", {
                            required: "La url de la imagen es un dato obligatorio",
                            pattern: {
                                value:
                                    /^https:\/\/.+\.(jpg|jpeg|png|gif|webp|bmp|svg)$/,
                                message:
                                    "La imagen debe ser una url de imagen valida terminada en (jpg|jpeg|png|gif|webp|bmp|svg)",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.imagen?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formPrecio">
                    <Form.Label>Categoría*</Form.Label>
                    <Form.Select
                        {...register("categoria", {
                            required: "Debe seleccionar una categoria",
                        })}
                    >
                    
                        <option value="">Seleccione una opcion</option>
                        <option value="Desarrollo Web">Desarrollo Web</option>
                        <option value="Desarrollo Mobile">Desarrollo Mobile</option>
                        <option value="Backend y API">Backend y API</option>
                        <option value="Otros">Otros</option>
                    </Form.Select>
                    <Form.Text className="text-danger">
                        {errors.categoria?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Descripción breve*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Web profesional *responsive* con secciones clave: Inicio, Servicios, Quiénes Somos, Contacto y Blog (sin funcionalidad de publicación)"
                        as="textarea"
                        {...register("descripcion_breve", {
                            required: "La descripción breve es un dato obligatorio",
                            minLength: {
                                value: 5,
                                message: "La descripción breve debe tener almenos 5 caracteres",
                            },
                            maxLength: {
                                value: 250,
                                message:
                                    "La descripción breve debe tener como máximo 250 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.descripcion_breve?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formImagen">
                    <Form.Label>Descripción Amplia*</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ej: Desarrollo de un sitio web corporativo **moderno y optimizado para SEO**. Incluye diseño personalizado basado en plantillas, integración de formulario de contacto, galería de imágenes, y hasta 7 páginas principales. Ideal para empresas que necesitan una fuerte presencia digital."
                        as="textarea"
                        rows={4}
                        {...register("descripcion_amplia", {
                            required: "La descripción amplia es un dato obligatorio",
                            minLength: {
                                value: 10,
                                message:
                                    "La descripción amplia debe tener almenos 10 caracteres",
                            },
                            maxLength: {
                                value: 500,
                                message:
                                    "La descripción amplia debe tener como máximo 500 caracteres",
                            },
                        })}
                    />
                    <Form.Text className="text-danger">
                        {errors.descripcion_amplia?.message}
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Enviar
                </Button>
            </Form>
        </main>
    );
};

export default FormularioServicio;
