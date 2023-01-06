import UserList from "./components/UserList"

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
    role: 'teacher'
}, {
    id: 3,
    name: 'Antonio Manuel Gonzalez',
    active: true,
    role: 'student'
}]


const App = () => (

    <UserList users={USERS}>
    </UserList>
)
export default App