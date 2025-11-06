import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      console.log("Sending login request...");
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      console.log("Login success:", res.data);
      localStorage.setItem("token", res.data); // ✅ store JWT

      navigate("/dashboard"); // ✅ go to dashboard after login
    } catch (err) {
      console.error("Login failed:", err);
      setError(err?.response?.data || "Invalid email or password");
    }
  };

  return (
    <div className="max-w-md mx-auto glow-card page-fade">
      <h2 className="glow-input">Welcome back</h2>
      <p className="glow-input">Login to continue 😊</p>

      {error && <div className="bg-red-50 text-red-700 p-2 mb-3 rounded">{error}</div>}

      <form onSubmit={submit} className="space-y-3">
      <input
  name="email"
  value={form.email}
  onChange={onChange}
  placeholder="Email"
  className="glow-input"
/>

<input
  name="password"
  value={form.password}
  onChange={onChange}
  placeholder="Password"
  type="password"
  className="glow-input"
/>


        <button type="submit" className="w-full glow-btn">
          Login
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-3">
        New here? <Link to="/signup" className="text-indigo-600">Create an account</Link>
      </p>
    </div>
  );
}
