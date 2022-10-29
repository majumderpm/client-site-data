import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

const [users, setUsers] = useState([]);

useEffect( () => {
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUsers(data));
}, [])

const handleAddUser = event =>{
  event.preventDefault ();
}

  return (
    <div className="App">

      <form onSubmit={handleAddUser}>
        <input type="text" name="name" />
        <br />

        <input type="email" name="email" id="" />
        <br />
        <button type="submit">add user</button>
      </form>

      <h2>
        user: {users.length}
      </h2>
      <div>
        {
          users.map(user => <p key={user.id} >
            {user.name} <br /> {user.email}
          </p>)
        }
      </div>
    </div>
  );
}

export default App;
