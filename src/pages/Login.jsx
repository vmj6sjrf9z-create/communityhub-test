import { useState, useEffect } from "react";
import { supabase } from "../lib/supabaseClient.js";
import { useNavigate } from "react-router-dom";
import PasswordToggle from "../components/PasswordToggle.jsx";
import ExternalAuth from "../components/ExternalAuth.jsx";
import { useUser } from "../context/UserContext.jsx";
import "../styles/index.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate("/home");
  }, [user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) return alert(error.message);

    // UserContext listener will auto-redirect
  };

  return (
    <div className="container">
      <h1>Community Hub Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="loginEmail">
            Email <sup style={{ color: "red" }}>*</sup>
          </label>
          <input
            type="email"
            id="loginEmail"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="loginPassword">
            Password <sup style={{ color: "red" }}>*</sup>
          </label>
          <PasswordToggle
            id="loginPassword"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Login</button>
      </form>

      <div className="login-link" onClick={() => navigate("/signup")}>
        Don't have an account? Sign up
      </div>

      <ExternalAuth />
    </div>
  );
}
