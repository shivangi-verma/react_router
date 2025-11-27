// src/pages/NotFound.jsx
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404</h1>
      <p>Bro you’re lost. This page doesn’t exist 💀</p>
      <Link to="/">Go Home</Link>
    </div>
  );
}

export default NotFound;
