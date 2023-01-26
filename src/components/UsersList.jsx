import { useState } from "react";
import { useFilters } from "./lib/hooks/useFilters";
import { filterActiveUser, filterUsersByName, sortUsers } from "./lib/users/filterUsers";
import style from "./UsersList.module.css";
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
            <h1 className={style.title}>Listado de usuarios</h1>
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



const useUsers = (initialUsers) => {
    const [users, setUsers] = useState(initialUsers)

    return { users };
}





export default UsersList