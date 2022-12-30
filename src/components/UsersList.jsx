import { useState } from "react";
import UserRow from "./UserRow";
import style from "./UsersList.module.css"

const UsersList = ({ children, user }) => {

    const [search, setSearch] = useState('')

    const usersFiltered = search
        ? user.filter(item => item.name.toLowerCase().startsWith(search.toLocaleLowerCase()))
        : user

    const usersRendered = usersFiltered.length > 0 ? (
        usersFiltered.map(usuario => <UserRow key={usuario.name} {...usuario} />)
    ) : <p>No hay usuario</p>


    return (< div className={style.wrapper} >
        {children}
        <form onSubmit={ev => {
            ev.preventDefault();
            setSearch(ev.target.search.value)
        }}>
            <input type='search' name="search"></input>
            <button type="submit">Buscar</button>
        </form>
        {usersRendered}
    </div >)
}

export default UsersList