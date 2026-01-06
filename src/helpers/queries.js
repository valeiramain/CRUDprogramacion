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