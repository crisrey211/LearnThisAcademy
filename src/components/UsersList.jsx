import UserRow from "./UserRow";
import style from "./UsersList.module.css"

const UsersList = ({ children, user }) => {
    const usersRendered = user.map(usuario => <UserRow key={usuario.name} {...usuario} />);
    return (< div className={style.wrapper} >
        {children}
        {usersRendered}
    </div >)
}

export default UsersList