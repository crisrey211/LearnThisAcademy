import { useState } from "react";
import UserRow from "./UserRow";
import style from "./UsersList.module.css"

const UsersList = ({ user }) => {
    const [search, setSearch] = useState('');
    const usersFiltered = filterUsersByName(user, search);
    const usersRendered = renderUsers(usersFiltered);

    return (< div className={style.wrapper} >
        <h1>Listado de usuarios</h1>
        <input
            type='text'
            name='search'
            value={search}
            onChange={ev => {
                setSearch(ev.target.value);
            }}></input>
        {usersRendered}
    </div >)
}

const filterUsersByName = (user, search) => {
    if (!search) return user;

    const lowerCaseSearch = search.toLowerCase()
    return user.filter(item => item.name.toLowerCase().startsWith(lowerCaseSearch))
}

const renderUsers = (user) => {
    if (user.length <= 0) return <p>No hay usuario</p>;
    
    return user.map(usuario => <UserRow key={usuario.name} {...usuario} />);
}

export default UsersList