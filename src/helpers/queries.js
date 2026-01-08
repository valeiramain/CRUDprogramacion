const urlServicios = import.meta.env.VITE_SERVICIO;

export const listarServiciosApi = async () =>{
    try{
        const respuesta = await fetch(urlServicios)
        return respuesta
    }catch(error){
        console.error(error)
    }
}

//POST (Crear)
export const crearServicioApi = async (servicio) =>{
    try{
        const respuesta = await fetch(urlServicios,{
            method:'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(servicio)
        })
        return respuesta
    }catch(error){
        console.error(error)
    }
}

// DELETE - borrar
export const borrarServicioApi = async (id) =>{
    try{
        const respuesta = await fetch(urlServicios+`/${id}`,{
            method:'DELETE'
        })
        return respuesta
    }catch(error){
        console.error(error)
    }
}



// BUSCAR por ID
export const buscarServicioApi = async (id) =>{
    try{
        const respuesta = await fetch(urlServicios+`/${id}`)
        return respuesta
    }catch(error){
        console.error(error)
    }


}



//EDITAR por ID
export const editarServicioApi = async (servicio,id) =>{
    try{
        const respuesta = await fetch(urlServicios+`/${id}`,{
            method:'PUT',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(servicio)
        })
        return respuesta
    }catch(error){
        console.error(error)
    }
}