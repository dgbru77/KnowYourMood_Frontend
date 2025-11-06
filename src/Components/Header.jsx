import React from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../api/api";

export default function Header() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  // ✅ Logout Handler
  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  // ✅ Delete account handler
  const handleDeleteAccount = async () => {
    const confirmDelete = window.confirm(
      "⚠ Are you sure you want to permanently delete your account and mood history?"
    );
    if (!confirmDelete) return;

    try {
      await api.delete("/auth/delete");
      localStorage.clear();
      navigate("/signup");
    } catch (err) {
      console.error(err);
      alert("❌ Could not delete account. Try again.");
    }
  };

  return (
    <header className="navbar">
  <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        
    {/* Left side branding */}
    <div className="flex items-center space-x-3">
      <Link to="/dashboard" className="text-2xl font-bold glow-text">KnowYourMood</Link>
      <div className="text-sm text-gray-300">— track your mood</div>
    </div>

    {/* Navigation side */}
    <nav className="flex items-center space-x-4">
      

      {token ? (
        <>
          <span className="text-sm text-gray-300">Welcome, {username || "User"}</span>

          <button
            onClick={handleLogout}
            className="px-3 py-1 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-sm glow-btn"
          >
            Logout
          </button>

          <button
            onClick={handleDeleteAccount}
            className="px-3 py-1 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm glow-btn"
          >
            Delete Account
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="text-sm text-gray-300 hover:text-white">Login</Link>
          <Link to="/signup" className="text-sm text-gray-300 hover:text-white">Sign up</Link>
        </>
      )}
    </nav>
  </div>
</header>

  );
}
