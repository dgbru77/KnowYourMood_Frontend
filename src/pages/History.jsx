import React, { useEffect, useState } from "react";
import api from "../api/api";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// register chart module components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function History() {
  const [entries, setEntries] = useState([]);
  const [moodCount, setMoodCount] = useState({});
  const [aiInsight, setAiInsight] = useState("");
  const [aiLoading, setAiLoading] = useState(false);
const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await api.get("/mood/history");
      const data = res.data || [];
      setEntries(data);

      // ✅ Count mood frequency
      const counts = {};
      data.forEach((entry) => {
        counts[entry.moodType] = (counts[entry.moodType] || 0) + 1;
      });
      setMoodCount(counts);

    } catch (err) {
      console.error("Failed to load mood history:", err);
    }
  };
const getAIInsight = () => {
  setShowPopup(true);
};




  return (
    <div className="max-w-4xl mx-auto page-fade space-y-8">
      <h2 className="text-3xl font-bold glow-text text-center mb-6">
        Your Mood History
      </h2>

      {/* ✅ Mood table */}
      <div className="overflow-x-auto glow-card">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-gray-700 text-gray-300">
              <th className="p-3">#</th>
              <th className="p-3">Mood</th>
              <th className="p-3">Feeling</th>
              <th className="p-3">Note</th>
              <th className="p-3">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {entries.map((e, i) => (
              <tr key={e.id || i} className="border-b border-gray-800">
                <td className="p-3">{i + 1}</td>
                <td className="p-3 font-semibold">{e.moodType}</td>
                <td className="p-3">{e.feeling}</td>
                <td className="p-3">{e.note}</td>
                <td className="p-3">
                  {new Date(e.dateTime).toLocaleString("en-IN")}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ✅ Mood Bar Chart */}
      <div className="glow-card">
        <h3 className="text-xl glow-text font-semibold mb-4 text-center">
          Mood Analytics (Bar Chart)
        </h3>
    <Bar
  data={{
    labels: Object.keys(moodCount),
    datasets: [
      {
        label: "Number of times mood was selected",
        data: Object.values(moodCount),
        backgroundColor: [
          "#FFD700", // HAPPY
          "#7CB9E8", // SAD
          "#FF4500", // ANGRY
          "#98FB98", // CALM
          "#FF69B4", // EXCITED
          "#6A5ACD", // STRESSED
          "#C0C0C0", // NEUTRAL
        ],
        borderRadius: 8,
      },
    ],
  }}
  options={{
    responsive: true,
    plugins: {
      legend: { display: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true, ticks: { stepSize: 1 } },
    },
  }}
/>

      </div>

    <button onClick={getAIInsight} className="glow-btn w-full mt-4">
  Generate AI Insight
</button>

{/* ✅ Popup Modal */}
{showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-[#18122B] p-6 rounded-2xl glow-card max-w-md text-center">
      <h3 className="text-xl glow-text font-bold mb-3">🚀 Coming Soon</h3>
      <p className="text-gray-300 mb-4">
        AI Insights feature will be available soon. Stay tuned!
      </p>

      <button
        onClick={() => setShowPopup(false)}
        className="glow-btn w-full"
      >
        Close
      </button>
    </div>
  </div>
)}


      {/* ✅ Back to Dashboard */}
      <div className="text-center">
        <a href="/dashboard" className="glow-btn inline-block">
          Back to Dashboard
        </a>
      </div>
    </div>
  );
}
