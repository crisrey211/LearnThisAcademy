import React, { useState } from 'react'
import UserRow from './UserRow'
import style from './UsersList.module.css'

const UsersList = ({ children, users }) => {
    const [search, setSearch] = useState('')

    const usersFiltered = users.filter(item => item.name.toLowerCase().startsWith(search.toLowerCase()))

    const usersRendered = usersFiltered.length > 0
        ? usersFiltered.map(item => <UserRow key={item.id} {...item} />)
        : <p>No hay usuarios</p>

    return (
        <div className={style.wrapper}>
            {children}
            <form onSubmit={ev => {
                ev.preventDefault();
                setSearch(ev.target.search.value)
            }}>
                <input type="search" name='search'></input>
                <button type='submit'>Buscar</button>
            </form>
            {usersRendered}
        </div>
    )
}
export default UsersList