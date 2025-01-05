import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "./UserContext";

export default function LoginForm({ onSwitchToRegister }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUsername: setLoggedInUsername, setId } = useContext(UserContext);

  async function handleSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", { username, password });
      setLoggedInUsername(username);
      setId(data.id);
    } catch (error) {
      console.error("Login failed:", error);
    }
  }

  return (
    <div className="bg-blue-50 h-screen flex items-center">
      <form className="w-64 mx-auto mb-12" onSubmit={handleSubmit}>
        <input
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
          type="text"
          placeholder="username"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <input
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          type="password"
          placeholder="password"
          className="block w-full rounded-sm p-2 mb-2 border"
        />
        <button className="bg-blue-500 text-white block w-full rounded-sm p-2">
          Login
        </button>
        <div className="text-center mt-2">
          Don’t have an account?
          <button className="ml-1" onClick={onSwitchToRegister}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
