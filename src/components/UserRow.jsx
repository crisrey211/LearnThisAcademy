import UserRole from "./UserRole"
import style from "./UserRow.module.css"
import UserStatus from "./UserStatus"
import React from "react"


const UserRow = ({ name, active: active, role, ...restProps }) => {

    const [activeState, setActiveState] = React.useState(active)


    return < div className={style.wrapper} {...restProps}>
        <div className={style.name}>
            <span>{name}</span>
        </div>
        <div className={style.status}>
            <UserStatus active={activeState} />
        </div >
        <div className={style.role}>
            <UserRole role={role} />
        </div>
        <div className={style.action}>
            <button onClick={() => {
                setActiveState(!activeState)
            }}
            >{activeState ? 'Desactivar' : 'Activar'}</button>
        </div>
    </div >
}

export default UserRow