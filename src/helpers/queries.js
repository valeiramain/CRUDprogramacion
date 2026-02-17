const urlServicios = import.meta.env.VITE_SERVICIO;
const urlUsuarios = import.meta.env.VITE_USUARIO;

export const listarServiciosApi = async () => {
  try {
    const respuesta = await fetch(urlServicios);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//POST (Crear)
export const crearServicioApi = async (servicio) => {
  try {
    const respuesta = await fetch(urlServicios, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("usuarioKey")).token}`
      },
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

// DELETE - borrar
export const borrarServicioApi = async (id) => {
  try {
    const respuesta = await fetch(urlServicios + `/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("usuarioKey")).token}`
      }
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

// BUSCAR por ID
export const buscarServicioApi = async (id) => {
  try {
    const respuesta = await fetch(urlServicios+ `/${id}`);
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//EDITAR por ID
export const editarServicioApi = async (servicio, id) => {
  try {
    const respuesta = await fetch(urlServicios + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(sessionStorage.getItem("usuarioKey")).token}`
      },
      body: JSON.stringify(servicio),
    });
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};

//LOGIN USUARIO: use usa POST xq se envian datos
export const login = async (usuario) => {
  try {
    const respuesta = await fetch(urlUsuarios + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      //mando email y password en el body
      body: JSON.stringify(usuario),
    });
    //la respuesta tiene nombre usuario y token
    return respuesta;
  } catch (error) {
    console.error(error);
  }
};
