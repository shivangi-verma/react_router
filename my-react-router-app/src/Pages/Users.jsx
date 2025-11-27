// src/pages/Users.jsx
import { Link } from "react-router-dom";

const fakeUsers = [
  { id: 1, name: "Alice 🐱" },
  { id: 2, name: "Bob 🐶" },
  { id: 3, name: "Charlie 🐹" },
];

function Users() {
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {fakeUsers.map((user) => (
          <li key={user.id} style={{ listStyle: "none" }}>
            <Link to={`/users/${user.id}`}>{user.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
