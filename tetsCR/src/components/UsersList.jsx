import React from 'react'
import UserRow from './UserRow'
import style from './UsersList.module.css'

const UsersList = ({ children, users }) => {
    const usersRendered = users.map(item => <UserRow {...item} />)


    return (

        <div className={style.wrapper}>
            {children}
            {usersRendered}
        </div>
    )
}
export default UsersList