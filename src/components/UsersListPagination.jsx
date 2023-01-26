import React from 'react'
import Select from './forms/Select'
import style from './UsersListPagination.module.css'

const UsersListPagination = ({ page, itemsPerPage, setPage, setItemsPerPage }) =>
    <div className={style.wrapper}>
        <div className={style.itemsPerPage}>
            <Select
                value={itemsPerPage}
                onChange={(ev) => setItemsPerPage(Number(ev.target.value))}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
            </Select>
            <p>Elementos por página</p>
        </div>
    </div>



export default UsersListPagination