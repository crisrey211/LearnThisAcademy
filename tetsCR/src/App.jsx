import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import UsersList from './components/UsersList'

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
}]


function App() {
  return (
    <div className="App">
      <UsersList users={USERS}>
        Listado de usuarios
      </UsersList>
    </div>
  )
}

export default App
