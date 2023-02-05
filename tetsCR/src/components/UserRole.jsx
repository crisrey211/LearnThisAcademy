import React from 'react'
import style from './UserRole.module.css'

const ROLE_STYLES = {
    teacher: ['Profesor', style.teacher],
    student: ['Estudiante', style.student],
    other: ['Otros', style.other]
}

const UserRole = ({ role }) => {
    const [roleName, roleClassName] = ROLE_STYLES[role] || ROLE_STYLES.other
    return <span className={`${roleClassName} ${style.role}`}>{roleName}</span>

}

export default UserRole