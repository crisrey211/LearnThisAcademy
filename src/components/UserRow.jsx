import UserRole from "./UserRole"
import style from "./UserRow.module.css"
import UserStatus from "./UserStatus"
import React from "react"


const UserRow = ({ id, name, active: active, role, toogleUserActive, ...restProps }) =>



    < div className={style.wrapper} {...restProps}>
        <div className={style.name}>
            <span>{name}</span>
        </div>
        <div className={style.status}>
            <UserStatus active={active} />
        </div >
        <div className={style.role}>
            <UserRole role={role} />
        </div>
        <div className={style.action}>
            <button onClick={() => {
                toogleUserActive(id)
            }}
            >{active ? 'Desactivar' : 'Activar'}</button>
        </div>
    </div >


export default UserRow