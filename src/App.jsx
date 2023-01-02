import UsersList from "./components/UsersList"

const USERS = [{
    id: 0,
    name: 'Christian',
    active: true,
    role: 'teacher'
}, {
    id: 1,
    name: 'Pablo Castellanos',
    active: false,
    role: 'student'
}, {
    id: 2,
    name: 'Jose Miguel Fernández',
    active: false,
    role: 'Profesor'
}, {
    id: 3,
    name: 'Antonio Manuel Gonzalez',
    active: true,
    role: 'student'
}]

const App = () => (
    <UsersList initialUsers={USERS} />
)

export default App