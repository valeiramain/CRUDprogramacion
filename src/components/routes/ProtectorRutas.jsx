import { Navigate, Outlet } from "react-router";


const ProtectorRutas = (usuarioLogueado) => {
    // pregunto si NO estoy logueado
    // if(!usuarioLogueado.token){
    if(!usuarioLogueado.nombre){
        return <Navigate to={'/login'}></Navigate>
    }
    // si soy efectivamente el admin
    return <Outlet></Outlet>
};

export default ProtectorRutas;