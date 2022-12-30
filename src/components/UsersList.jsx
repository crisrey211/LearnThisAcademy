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
        <input
            type='text'
            name='search'
            value={ search }
            onChange={ev => { 
                setSearch(ev.target.value);
        }}></input>
        {usersRendered}
    </div >)
}

export default UsersList