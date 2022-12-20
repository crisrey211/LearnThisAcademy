import UserRow from "./UserRow";
import style from "./UsersList.module.css"

const UsersList = ({ children, user }) => {
    const usersRendered = user.length > 0 ? (
        user.map(usuario => <UserRow key={usuario.name} {...usuario} />)
    ) : <p>No hay usuario</p>


    return (< div className={style.wrapper} >
        {children}
        {usersRendered}
    </div >)
}

export default UsersList