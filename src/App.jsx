import UsersList from "./components/UsersList"

const USERS = [{
    name: 'Christian',
    active: true,
    role: 'teacher'
}, {
    name: 'Pablo Castellanos',
    active: false,
    role: 'student'
}, {
    name: 'Jose Miguel Fernández',
    active: false,
    role: 'Profesor'
},{
    name: 'Antonio Manuel Gonzalez',
    active: true,
    role: 'student'
}]

const App = () => (
    <UsersList user={USERS}/>
)

export default App