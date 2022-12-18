import UserRole from "./UserRole"
import style from "./UserRow.module.css"
import UserStatus from "./UserStatus"
const UserRow = (props) => {
    const { name, active, role, ...restProps } = props


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
    </div >
}

export default UserRow