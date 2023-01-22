import { useState } from "react";
import { UsersContext } from "./lib/contexts/UsersContext";
import style from "./UsersList.module.css"
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";


const UsersList = ({ initialUsers }) => {
    /*     const { search, onlyActive, sortBy, setSearch, setOnlyActive, setSortBy } = useFilters()*/
    const { search, onlyActive, sortBy, ...setFiltersFunctions } = useFilters()

    const { users } = useUsers(initialUsers)

    let usersFiltered = filterUsersByName(users, search);
    usersFiltered = filterActiveUser(usersFiltered, onlyActive);
    usersFiltered = sortUsers(usersFiltered, sortBy);


    return (
        < div className={style.wrapper} >
            <h1>Listado de usuarios</h1>
            <UsersListFilters
                /* se usa restOperator, se eliman los Setters por el rest (linea 24)*/
                search={search}
                onlyActive={onlyActive}
                sortBy={sortBy}
                {...setFiltersFunctions}
            />
            <UsersListRows user={usersFiltered} />
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
    const setOnlyActive = (onlyActive) => {
        if (onlyActive && filters.sortBy === 3)
            setFilters({
                ...filters,
                onlyActive,
                sortBy: 0
            })
        else
            setFilters({
                ...filters,
                onlyActive,
            })

    }
    const setSortBy = (sortBy) => setFilters({
        ...filters,
        sortBy
    })

    return { ...filters, setSearch, setOnlyActive, setSortBy }
}

const useUsers = (initialUsers) => {
    const [users, setUsers] = useState(initialUsers)

    return { users };
}

const filterActiveUser = (user, active) => {
    if (!active) return [...user];

    return user.filter(item => item.active)
}

const sortUsers = (user, sortBy) => {
    const sortedUsers = [...user]
    switch (sortBy) {
        case 1: /* POR DEFECTO*/
            return sortedUsers.sort((a, b) => {
                if (a.name > b.name) return 1;
                if (a.name < b.name) return -1;
                return 0;
            });
        case 2: /*POR NOMBRE */
            return sortedUsers.sort((a, b) => {
                if (a.role === b.role) return 0;
                if (a.role === 'teacher') return -1;
                if (a.role === 'student' && b.role === 'other') return -1;
                return 1;
            })
        case 3: /*POR ROL */
            return sortedUsers.sort((a, b) => {
                if (a.active === b.active) return 0;
                if (a.active && !b.active) return -1;
                return 1
            });
        default:
            return sortedUsers;
    }
}

const filterUsersByName = (user, search) => {
    if (!search) return [...user];

    const lowerCaseSearch = search.toLowerCase()
    return user.filter(item => item.name.toLowerCase().includes(lowerCaseSearch))
}



export default UsersList