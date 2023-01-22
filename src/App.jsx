import UsersList from "./components/UsersList"

const USERS = [{
    id: 0,
    username: 'Christian',
    active: true,
    role: 'teacher'
}, {
    id: 1,
    username: 'Pablo Castellanos',
    active: false,
    role: 'student'
}, {
    id: 2,
    username: 'Jose Miguel Fernández',
    active: false,
    role: 'Profesor'
}, {
    id: 3,
    username: 'Antonio Manuel Gonzalez',
    active: true,
    role: 'student'
}]

const App = () => (
    <UsersList initialUsers={USERS} />
)

export default App