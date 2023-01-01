import { useState } from "react";
import style from "./UsersList.module.css"
import UsersListFilters from "./UsersListFilters";
import UsersListRows from "./UsersListRows";

const UsersList = ({ user }) => {
    const [filters, setFilters] = useState({
        search: '',
        onlyActive: false,
        sortBy: 0
    })

    
    let usersFiltered = filterUsersByName(user, filters.search);
    usersFiltered = filterActiveUser(usersFiltered, filters.onlyActive);
    usersFiltered = sortUsers(usersFiltered, filters.sortBy);


    return (< div className={style.wrapper} >
        <h1>Listado de usuarios</h1>
        <UsersListFilters
            search={filters.search}
            setSearch={(search) => setFilters({
                ...filters,
                search
            })}
            onlyActive={filters.onlyActive}
            setOnlyActive={(onlyActive) => setFilters({
                ...filters,
                onlyActive
            })}
            sortBy={filters.sortBy}
            setSortBy={(sortBy) => setFilters({
                ...filters,
                sortBy
            })}
        />
        <UsersListRows user={ usersFiltered} />
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



export default UsersList