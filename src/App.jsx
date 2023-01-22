import UsersList from "./components/UsersList"

const USERS = [{
    username: 'crisrey211',
    name: 'Christian',
    active: true,
    role: 'teacher'
}, {
    username: 'Pablin',
    name: 'Pablo Castellanos',
    active: false,
    role: 'student'
}, {
    username: 'Miguelañez',
    name: 'Jose Miguel Fernández',
    active: false,
    role: 'Profesor'
}, {
    username: 'El Crack',
    name: 'Antonio Manuel Gonzalez',
    active: true,
    role: 'student'
}]

const App = () => (
    <UsersList initialUsers={USERS} />
)

export default App