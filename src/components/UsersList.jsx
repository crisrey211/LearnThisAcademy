import { useState } from "react";
import style from "./UsersList.module.css"
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";

const UsersList = ({ user }) => {
    /*     const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } = useFilters()*/
    const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters()

    let usersFiltered = filterUsersByName(user, search);
    usersFiltered = filterActiveUser(usersFiltered, onlyActive);
    usersFiltered = sortUsers(usersFiltered, sortBy);


    return (< div className={style.wrapper} >
        <h1>Listado de usuarios</h1>
        <UsersListFilters
            /* se usa restOperator, se eliman los Setters por el rest (linea 24)*/ 
            search={search}
            onlyActive={onlyActive}
            sortBy={sortBy}
            {...setFiltersFunctions}
        />
        <UsersListRows user={ usersFiltered} />
    </div >)
}

const useFilters = () => { 
    /* const { search, onlyActive, sortBy } = filters */
    const [filters, setFilters] = useState({
        search: '',
        onlyActive: false,
        sortBy: 0
    })

    const setSearch = (search) => setFilters({
        ...filters,
        search
    })
    const setOnlyActive = (onlyActive) => setFilters({
        ...filters,
        onlyActive
    })
    const setSortBy = (sortBy) => setFilters({
        ...filters,
        sortBy
    })

    return {...filters, setSearch, setOnlyActive, setSortBy}
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



export default UsersList