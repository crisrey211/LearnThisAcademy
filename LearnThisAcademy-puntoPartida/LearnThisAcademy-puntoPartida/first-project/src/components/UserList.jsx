import UserRow from "./UserRow"
import style from "./UserList.module.css"

const UserList = ({ children, users }) => {
    const userRendered = users.map(item => <UserRow key={item.id} {...item} />)
    return <div className={style.list}>
        <h1>Listado de usuarios</h1>
        {children}
        {userRendered}
    </div>

}

export default UserList