import { useEffect } from "react";
import { useState } from "react";
import { useFilters } from "./lib/hooks/useFilters";
import { filterActiveUser, filterUsersByName, paginateUsers, sortUsers } from "./lib/users/filterUsers";
import style from "./UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListPagination from "./UsersListPagination";
import UsersListRows from "./UsersListRows";


const UsersList = ({ initialUsers }) => {
    /*     const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } = useFilters()*/
    const {
        filters,
        setSearch,
        setOnlyActive,
        setSortBy,
        setPage,
        setItemsPerPage
    } = useFilters()


    const { users, totalPages } = getUsers(initialUsers, filters)

    return (
        < div className={style.wrapper} >
            <h1 className={style.title}>Listado de usuarios</h1>
            <UsersListFilters
                /* se usa restOperator, se eliman los Setters por el rest (linea 24)*/
                search={filters.search}
                onlyActive={filters.onlyActive}
                sortBy={filters.sortBy}
                setSearch={setSearch}
                setOnlyActive={setOnlyActive}
                setSortBy={setSortBy}
            />
            <UsersListRows user={users} />
            <UsersListPagination
                page={filters.page}
                itemsPerPage={filters.itemsPerPage}
                setPage={setPage}
                setItemsPerPage={setItemsPerPage}
                totalPages={totalPages}
            />
        </div >)
}



const getUsers = (initialUsers, { search, onlyActive, sortBy, page, itemsPerPage }) => {
    let usersFiltered = filterUsersByName(initialUsers, search);
    usersFiltered = filterActiveUser(usersFiltered, onlyActive);
    usersFiltered = sortUsers(usersFiltered, sortBy);

    const totalPages = Math.ceil(usersFiltered.length / itemsPerPage)

    usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage)

    return { users: usersFiltered, totalPages };
}

export default UsersList