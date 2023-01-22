import UserRole from "./UserRole"
import style from "./UserRow.module.css"
import UserStatus from "./UserStatus"
import React, { useContext } from "react"
import { UsersContext } from "./lib/contexts/UsersContext"
import UserDisplay from "./UserDisplay"


const UserRow = ({ username, name, active: active, role, ...restProps }) => {


    return < div className={style.wrapper} {...restProps}>
        <div className={style.name}>
            <UserDisplay name={name} username={username} />
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