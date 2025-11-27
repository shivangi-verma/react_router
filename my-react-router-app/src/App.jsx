import "./App.css";
import { BrowserRouter, Link, Outlet, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import NotFound from "./Pages/NotFound";
import UserDetail from "./Pages/UserDetail";
import Users from "./Pages/Users";
import { UserProvider, useUserContext } from "./Context/UserProvider";

function Layout() {
  const { user, theme, toggleTheme } = useUserContext();
  const isDark = theme === "dark";

  return (
    <div
      style={{
        minHeight: "100vh",
        background: isDark ? "#111" : "#f5f5f5",
        color: isDark ? "#f5f5f5" : "#111",
      }}
    >
      <header
        style={{
          display: "flex",
          gap: "1rem",
          padding: "1rem",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/users">Users</Link>
      </header>
      <main style={{ padding: "1rem" }}>
        <button onClick={toggleTheme}>
          Switch to {isDark ? "light" : "dark"} mode
        </button>
        <Outlet />
      </main>
    </div>
  );
}

function App() {
  return (
    <>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/users" element={<Users />} />
              <Route path="/users/:userId" element={<UserDetail />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </>
  );
}

export default App;
