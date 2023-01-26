import { useState } from "react";
import { useFilters } from "./lib/hooks/useFilters";
import { filterActiveUser, filterUsersByName, paginateUsers, sortUsers } from "./lib/users/filterUsers";
import style from "./UsersList.module.css";
import UsersListFilters from "./UsersListFilters";
import UsersListPagination from "./UsersListPagination";
import UsersListRows from "./UsersListRows";


const UsersList = ({ initialUsers }) => {
    /*     const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } = useFilters()*/
    const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters()
    const [page, setPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(2)

    const { users } = getUsers(initialUsers, { search, onlyActive, sortBy, page, itemsPerPage })

    return (
        < div className={style.wrapper} >
            <h1 className={style.title}>Listado de usuarios</h1>
            <UsersListFilters
                /* se usa restOperator, se eliman los Setters por el rest (linea 24)*/
                search={search}
                onlyActive={onlyActive}
                sortBy={sortBy}
                {...setFiltersFunctions}
            />
            <UsersListRows user={users} />
            <UsersListPagination page={page} itemsPerPage={itemsPerPage} setPage={setPage} setItemsPerPage={setItemsPerPage} />
        </div >)
}



const getUsers = (initialUsers, { search, onlyActive, sortBy, page, itemsPerPage }) => {
    let usersFiltered = filterUsersByName(initialUsers, search);
    usersFiltered = filterActiveUser(usersFiltered, onlyActive);
    usersFiltered = sortUsers(usersFiltered, sortBy);
    usersFiltered = paginateUsers(usersFiltered, page, itemsPerPage)


    return { users: usersFiltered };
}

export default UsersList