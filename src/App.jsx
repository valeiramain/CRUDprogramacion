
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router'
import Inicio from './components/pages/Inicio'
import Login from './components/pages/Login'
import Administrador from './components/pages/Administrador'
import DetalleServicio from './components/pages/DetalleServicio'
import FormularioServicio from './components/pages/FormularioServicio'
import Error404 from './components/pages/Error404'
import Menu from './components/shared/Menu'
import Footer from './components/shared/Footer'
import { useEffect, useState } from 'react'

function App() {
  const usuarioSessionStorage = JSON.parse(sessionStorage.getItem('usuarioKey')) || false
  const [usuarioLogueado,setUsuarioLogueado] = useState(usuarioSessionStorage)

  useEffect(()=>{
    // cuando cambia el login guardar el dato 
    sessionStorage.setItem('usuarioKey',JSON.stringify(usuarioLogueado))
  },[usuarioLogueado])

  return (
    <main>
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
        {/* element renderiza el componente */}
        <Route path='/' element={<Inicio></Inicio>}/>
        <Route path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}/>
        <Route path='/detalle' element={<DetalleServicio></DetalleServicio>}/>
        <Route path='/administrador' element={<Administrador></Administrador>}/>
        <Route path='/administrador/crear' element={<FormularioServicio></FormularioServicio>}/>
        <Route path='/administrador/editar' element={<FormularioServicio></FormularioServicio>}/>
        <Route path='*' element={<Error404></Error404>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
    </main>
  )
}

export default App
