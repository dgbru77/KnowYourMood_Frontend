import React from "react";

const MOODS = ["Happy","Sad","Anxious","Calm","Excited","Neutral"];

export default function MoodButtons({ selectedMood, setSelectedMood }){
  return (
    <div className="flex flex-wrap gap-2">
      {MOODS.map(m => (
        <button
          key={m}
          onClick={() => setSelectedMood(m)}
          className={`px-4 py-2 rounded-full border ${selectedMood===m ? 'bg-indigo-600 text-white' : 'bg-white text-gray-800'}`}
        >
          {m}
        </button>
      ))}
    </div>
  );
}
