import React from 'react'
import UserRole from './UserRole'
import style from './UserRow.module.css'
import UserStatus from './UserStatus'

const UserRow = (props) => {
    const { name, active, role, ...restProps } = props

    const [activeState, setActiveState] = React.useState(active)
    console.log(activeState)

    return (
        <div className={style.wrapper}>
            <div className={style.name}>
                <span>{name}</span>
            </div>
            <div className={style.status}>
                <UserStatus active={activeState} />
            </div>
            <div className={style.role}>
                <UserRole role={role} />
            </div>
            <div className={style.action}>
                <button onClick={() => { setActiveState(!activeState) }}>
                    {activeState ? 'Desactivar' : 'Activar'}
                </button>
            </div>
        </div>
    )
}
export default UserRow