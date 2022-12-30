import { useState } from "react";
import UserRow from "./UserRow";
import style from "./UsersList.module.css"

const UsersList = ({ user }) => {
    const [search, setSearch] = useState('');
    const [onlyActive, setOnlyActive] = useState(false);
    const [sortBy, setSortBy] = useState(0);

    let usersFiltered = filterUsersByName(user, search);
    usersFiltered = filterActiveUser(usersFiltered, onlyActive);
    usersFiltered = sortUsers(usersFiltered, sortBy);
    const usersRendered = renderUsers(usersFiltered);

    console.log(usersFiltered === user);

    return (< div className={style.wrapper} >
        <h1>Listado de usuarios</h1>
        <form className={style.form}>
            <input
                type='text'
                value={search}
                onChange={ev => {
                    setSearch(ev.target.value);
                }}></input>
            <div className={style.active}>
                <input type="checkbox" checked={onlyActive} onChange={
                    ev => {
                        setOnlyActive(ev.target.checked)
                    }} />
                <span>Solo activos</span>
            </div>
            <select value={sortBy} onChange={ev => {
                setSortBy(Number(ev.target.value))
            }}>
                <option value={0}>Por defecto</option>
                <option value={1}>Por nombre</option>
            </select>
        </form>
        {usersRendered}
    </div >)
}

const filterActiveUser = (user, active) => {
    if (!active) return [...user];

    return user.filter(item => item.active)
}

const sortUsers = (user, sortBy) => {
    const sortedUsers = [...user]
    switch (sortBy) {
        case 1:
            return sortedUsers.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
        default:
            return sortedUsers;
    }
}

const filterUsersByName = (user, search) => {
    if (!search) return [...user];

    const lowerCaseSearch = search.toLowerCase()
    return user.filter(item => item.name.toLowerCase().startsWith(lowerCaseSearch))
}

const renderUsers = (user) => {
    if (user.length <= 0) return <p>No hay usuario</p>;

    return user.map(usuario => <UserRow key={usuario.name} {...usuario} />);
}

export default UsersList