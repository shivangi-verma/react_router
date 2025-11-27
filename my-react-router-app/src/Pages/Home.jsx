// src/Pages/Home.jsx
import { useUserContext } from "../Context/UserProvider";

function Home() {
  const { user, theme } = useUserContext();

  return (
    <div>
      <h1>Home</h1>
      <p>Welcome back, {user.name} 👋</p>
      <p>Current theme: {theme}</p>
    </div>
  );
}

export default Home;
