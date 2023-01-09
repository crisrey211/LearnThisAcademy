import UserRow from "./UserRow";

const UsersListRows = ({ user }) => {
    if (user.length === 0) return <p>No hay usuario</p>;

    return user.map(usuario => <UserRow key={usuario.id} {...usuario} />);
}

export default UsersListRows