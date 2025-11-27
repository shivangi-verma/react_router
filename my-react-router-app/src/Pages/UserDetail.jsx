// src/pages/UserDetail.jsx
import { useParams, Link } from "react-router-dom";

const fakeUsers = [
  { id: "1", name: "Alice 🐱", bio: "Frontend dev, coffee-powered." },
  { id: "2", name: "Bob 🐶", bio: "Backend enjoyer, API hoarder." },
  { id: "3", name: "Charlie 🐹", bio: "Fullstack chaos engineer." },
];

function UserDetail() {
  const { userId } = useParams();

  const user = fakeUsers.find((u) => u.id === userId);

  if (!user) {
    return (
      <div>
        <h1>User not found</h1>
        <Link to="/users">Back to users</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
      <Link to="/users">⬅ Back to users</Link>
    </div>
  );
}

export default UserDetail;
