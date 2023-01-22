import UserRole from "./UserRole"
import style from "./UserRow.module.css"
import UserStatus from "./UserStatus"
import React, { useContext } from "react"
import { UsersContext } from "./lib/contexts/UsersContext"


const UserRow = ({ username, active: active, role, ...restProps }) => {


    return < div className={style.wrapper} {...restProps}>
        <div className={style.name}>
            <span>{name}</span>
        </div>
        <div className={style.status}>
            <UserStatus active={active} />
        </div >
        <div className={style.role}>
            <UserRole role={role} />
        </div>
        <div className={style.action}></div>
    </div >
}

export default UserRow