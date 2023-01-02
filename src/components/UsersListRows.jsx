import UserRow from "./UserRow";

const UsersListRows = ({ user, toogleUserActive }) => {
    if (user.length === 0) return <p>No hay usuario</p>;

    return user.map(usuario => <UserRow key={usuario.id} toogleUserActive={toogleUserActive} {...usuario} />);
}

export default UsersListRows