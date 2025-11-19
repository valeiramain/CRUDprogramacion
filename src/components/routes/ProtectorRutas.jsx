import { Navigate, Outlet } from "react-router";


const ProtectorRutas = (usuarioLogueado) => {
    // pregunto si NO estoy logueado
    if(!usuarioLogueado){
        return <Navigate to={'/login'}></Navigate>
    }
    // si soy enfectivamente el admin
    return <Outlet></Outlet>
};

export default ProtectorRutas;