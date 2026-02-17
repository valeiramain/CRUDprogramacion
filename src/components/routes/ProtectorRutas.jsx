import { Navigate, Outlet } from "react-router";


const ProtectorRutas = ({usuarioLogueado}) => {
    // pregunto si NO estoy logueado
    // if(!usuarioLogueado.token){
    if(!usuarioLogueado.nombre){
        return <Navigate to={'/login'}></Navigate>
    }
    // deberia preguntar por el rol de usuario para redireccionar la ruta segun corresponda
    // si soy efectivamente el admin
    return <Outlet></Outlet>
};

export default ProtectorRutas;