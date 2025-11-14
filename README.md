# 💻 Servicios de Programación Web

## Descripción del Proyecto

Este proyecto es una aplicación web de **servicios de programación** construida con **React**. Ofrece una interfaz de usuario para mostrar los servicios disponibles a los usuarios y un área de administración privada para la gestión de dichos servicios.

La aplicación utiliza **React Router** para la navegación, **Bootstrap** y **React-Bootstrap** para el diseño y la interfaz de usuario, y maneja la autenticación básica de usuarios y administradores utilizando **Session Storage** para la persistencia del estado de la sesión.

---

## 🚀 Características Principales

* **Página de Inicio:** Muestra una **grilla de tarjetas** (`Cards`) con los diferentes servicios de programación ofrecidos.
* **Navegación:**
    * **Barra de Navegación (`Navbar`) y Pie de Página (`Footer`):** Elementos fijos en todas las vistas.
    * **Menú Dinámico:** Los enlaces visibles dependen del estado de la sesión (`Login`, `Logout`, `Administrador`).
* **Autenticación y Roles (Session Storage):** Manejo de la sesión a través de `sessionStorage`.
    * **No Autenticado:** Muestra **Inicio** y **Login**.
    * **Usuario Común:** Muestra **Inicio** y **Logout**.
    * **Administrador:** Muestra **Inicio**, **Administrador** (CRUD) y **Logout**.
* **Administración (CRUD de Servicios):** Permite al administrador **Crear, Leer, Actualizar y Eliminar** los servicios ofrecidos.
* **Formularios:** Uso de **React Hook Form** para la gestión eficiente de la validación y el estado de los formularios en `Login` y `Administrador`.
* **Gestión de Estado y Efectos:** Uso de `useState` para el estado local y `useEffect` para sincronizar el estado del componente con `sessionStorage`.

---

## 🛠️ Tecnologías Utilizadas

* **Frontend:**
    * [React](https://reactjs.org/) (con **Hooks**: `useState`, `useEffect`)
    * [React-Router](https://reactrouter.com/) (manejo de sistema de rutas)
    * [React-Bootstrap](https://react-bootstrap.github.io/) (Componentes de UI)
    * [Bootstrap 5](https://getbootstrap.com/) (Estilos base)
    * [React-Hook-Form](https://react-hook-form.com/) (validación de formularios)
    * **Session Storage** (Persistencia de sesión)
* **Lenguaje:** JavaScript

---

## 📥 Instalación y Ejecución Local

Sigue estos pasos para levantar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener **Node.js** (versión LTS recomendada) y **npm** o **Yarn** instalados.

### Pasos de Instalación

1.  **Clona el repositorio:**
    ```bash
    git clone [URL_DE_TU_REPOSITORIO]
    cd nombre-del-proyecto
    ```
2.  **Instala las dependencias:**
    ```bash
    npm install
    ```
3.  **Ejecuta la aplicación:**
    ```bash
    npm run dev
    ```

Abrir la aplicación en tu navegador en `http://localhost:3000` ó ela direccción dde localhost que te indique la terminal

---

### Lógica de Navegación Condicional

La visibilidad de los enlaces en el `Navbar` se controla mediante el estado de la sesión guardado en `sessionStorage`:

1.  **`Login`:** Visible si no existe una sesión activa.
2.  **`Administrador`:** Visible solo si `sessionStorage` es true.
3.  **`Logout`:** Visible si existe una sesión activa.



## 📝 Autor

Este proyecto fue realizado por Valentina Iramain