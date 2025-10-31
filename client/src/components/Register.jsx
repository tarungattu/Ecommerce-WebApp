import React, { useState, useEffect } from "react";
import axios from "../axios";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  // Theme management - just initialize theme from localStorage
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light-theme";
    document.body.className = storedTheme;
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      const response = await axios.post("http://localhost:8080/auth/register", {
        username,
        password,
      });

      const { id, username: registeredUsername } = response.data;
      
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 1500);

    } catch (err) {
      if (err.response) {
        if (err.response.status === 400 || err.response.status === 409) {
          setError("Username already exists. Please choose a different username.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Network error. Please check your connection and try again.");
      }
    }
  };

  return (
    <div className="login-page-container">
      <div className="login-form-container">
        <h2 className="login-title">Sign Up</h2>

        {success && (
          <p style={{ color: "green", marginBottom: "1rem" }}>
            Registration successful! Redirecting to login...
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">User Name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button type="submit" className="login-button">
            Register
          </button>

          <div className="login-footer-links">
            <Link to="/login">Already have an account? Sign in</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
