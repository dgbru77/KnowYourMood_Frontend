import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../api/api";

export default function Signup(){
  const [form, setForm] = useState({ username:"", email:"", password:"", terms:false });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onChange = e => {
    const { name, value, type, checked } = e.target;
    setForm(prev => ({ ...prev, [name]: type==="checkbox" ? checked : value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if(!form.terms){ setError("Please accept terms"); return; }
     try {
    console.log("Sending signup request..."); // 👈 Debug log 3
    const res = await api.post("/auth/signup", {
      username: form.username,
      email: form.email,
      password: form.password
    });
    console.log("Signup response:", res.data); // 👈 Debug log 4
    console.log("Navigating to login...");
    window.location.href = "/login";

  } catch (err) {
    console.error("Signup failed:", err); // 👈 Debug log 5
    setError(err?.response?.data || "Signup failed");
  }
  };

  return (
    <div className="max-w-md mx-auto glow-card page-fade">
      <h2 className="text-2xl font-bold mb-2">Create an account</h2>
      <p className="text-sm text-gray-500 mb-4">Join KnowYourMood — track your daily feelings 😊</p>
      {error && <div className="bg-red-50 text-red-700 p-2 mb-3 rounded">{error}</div>}
      <form onSubmit={submit} className="space-y-3">
        <input name="username" value={form.username} onChange={onChange} placeholder="Username" className="glow-input" />
        <input name="email" value={form.email} onChange={onChange} placeholder="Email" className="glow-input" />
        <input name="password" value={form.password} onChange={onChange} placeholder="Password" type="password" className="glow-input" />
        <label className="text-sm flex items-center gap-2">
          <input name="terms" type="checkbox" checked={form.terms} onChange={onChange} />
          I accept the Terms and Conditions
        </label>
        <button type="submit" className="w-full glow-btn">Sign up</button>
      </form>
    <p className="text-sm text-gray-500 mt-3">
  Already registered? <Link to="/login" className="text-indigo-600">Login</Link>
</p>

    </div>
  );
}
