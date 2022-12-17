import { Children } from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
const Titulo = () => <h1>Listado de usuarios</h1>

const User = (props) => {
    const { name, active, role, ...restProps } = props
    //otra forma de poner campos comune desde las prps
    /* const { name, active = 'Activo', role = 'Profesor' } = props */
    return <div className='user' {...restProps}>
        <span className='name'>{name}</span>
        <span className='active'>{active}</span>
        <span className='role'>{role}</span>
    </div>
}

const app = (

    <div className='list'>
        <Titulo />
        <User name="Christian" active="Activo" role="Estudiante" />
        <User name="Pablo Gonzalez" active="No activo" role="Profesor" />
        <User name="Juan" active="Activo" role="Profesor" />
    </div>
)

const container = document.getElementById('root');

root = createRoot(container)
root.render(app);
