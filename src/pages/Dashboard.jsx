import React, { useState } from "react";
import api from "../api/api";
import { useNavigate } from "react-router-dom";   // ✅ NEW

export default function Dashboard() {
  const navigate = useNavigate(); // ✅ NEW

  const [moodType, setMoodType] = useState(null);
  const [feeling, setFeeling] = useState("");
  const [note, setNote] = useState("");
  const [message, setMessage] = useState("");

  const moods = [
    { label: "😀 Happy", value: "HAPPY" },
    { label: "😢 Sad", value: "SAD" },
    { label: "😡 Angry", value: "ANGRY" },
    { label: "😌 Calm", value: "CALM" },
    { label: "🤩 Excited", value: "EXCITED" },
    { label: "😥 Stressed", value: "STRESSED" },
    { label: "😐 Neutral", value: "NEUTRAL" }
  ];

  
  const submitMood = async (e) => {
    e.preventDefault();
    if (!moodType) {
      setMessage("❗ Please select a mood before submitting");
      return;
    }

    try {
      await api.post("/mood/add", {
        moodType,
        feeling,
        note
      });

      setMessage("✅ Mood logged successfully");
      setFeeling("");
      setNote("");
      setMoodType(null);

    } catch (err) {
      console.error(err);
      setMessage("❌ Failed to save mood entry");
    }
  };

  return (
    <div className="max-w-3xl mx-auto page-fade space-y-6">

      <h2 className="text-3xl font-bold glow-text mb-4">How are you feeling today?</h2>


      <input
        type="text"
        placeholder="Short Feeling (e.g., relaxed, anxious, motivated)"
        value={feeling}
        onChange={(e) => setFeeling(e.target.value)}
        className="glow-input"
      />

      <textarea
        placeholder="Describe what made you feel this way..."
        value={note}
        onChange={(e) => setNote(e.target.value)}
        rows="4"
        className="glow-input"
      />

      <div className="grid grid-cols-3 gap-3">
        {moods.map((m) => (
          <button
            key={m.value}
            onClick={() => setMoodType(m.value)}
            className={`p-3 rounded-xl glow-card text-center cursor-pointer transition-all ${
              moodType === m.value ? "ring-2 ring-pink-500 scale-105" : ""
            }`}
          >
            {m.label}
          </button>
        ))}
      </div>
      <button onClick={submitMood} className="glow-btn w-full">
        Save Mood Entry
      </button>

      {message && <p className="text-center text-pink-400 mt-2">{message}</p>}

      <div className="glow-card text-center mt-6">
        <h3 className="text-xl glow-text font-semibold mb-2">View Your Mood History</h3>
        <p className="text-gray-400 mb-4">Track patterns, trends, and emotional progress ❤️</p>
        <a href="/history" className="glow-btn">Go to History</a>
      </div>

    </div>
  );
}
