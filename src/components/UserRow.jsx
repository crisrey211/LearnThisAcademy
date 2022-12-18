import style from "./UserRow.module.css"
const UserRow = (props) => {
    const { name, active, role, ...restProps } = props
    const activeClassName = active ? style.active : style.inactive
    const ROLE_STYLES = {
        teacher: ['Profesor', style.teacher],
        student: ['Estudiante', style.student],
        other: ['Otros', style.other]
    }

    return < div className={style.wrapper} {...restProps}>
        <div className={style.name}>
            <span>{name}</span>
        </div>
        <div className={style.status}>
            <span className={activeClassName}>{active ? 'Activo' : 'Inactivo'}</span>
        </div >
        <div className={style.role}>
            <span>{role}</span>
        </div>
    </div >
}

export default UserRow