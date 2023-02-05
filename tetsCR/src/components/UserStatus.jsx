import React from 'react'
import style from './UserStatus.module.css'

const UserStatus = ({ active }) => {
    const activeClassName = active ? style.active : style.inactive
    const isActive = active ? "Activo" : "Inactivo"
    return <span className={activeClassName}>{isActive}</span>
}

export default UserStatus