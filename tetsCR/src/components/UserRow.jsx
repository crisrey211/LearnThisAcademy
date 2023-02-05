import React from 'react'
import style from './UserRow.module.css'

const UserRow = (props) => {
    const { name, active, role, ...restProps } = props
    const activeClassName = active ? style.active : style.inactive
    const ROLE_STYLES = {
        teacher: ['Profesor', style.teacher],
        student: ['Estudiante', style.student],
        other: ['Otros', style.other]
    }

    const [roleLabel, roleStyle] = ROLE_STYLES[role] || ROLE_STYLES.other

    const isActive = active ? "Activo" : "Inactivo"
    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                <span>{name}</span>
            </div>
            <div className={style.status}>
                <span className={activeClassName}>{isActive}</span>
            </div>
            <div className={style.role}>
                <span>{role}</span>
            </div>
        </div>
    )
}
export default UserRow