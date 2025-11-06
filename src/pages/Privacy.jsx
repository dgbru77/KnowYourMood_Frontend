import React from "react";
import { Link } from "react-router-dom";

export default function Privacy() {
  return (
    <div className="max-w-4xl mx-auto glow-card page-fade p-8 mt-8 text-gray-200 leading-7">
      <h1 className="text-3xl font-bold glow-text mb-6 text-center">Privacy Policy</h1>

      <p>Last Updated: <span className="text-pink-400 font-semibold">March 2025</span></p>

      <h2 className="text-xl font-semibold glow-text mt-6">1. Overview</h2>
      <p>
        At <span className="font-semibold">KnowYourMood</span>, your privacy matters. This platform is committed
        in protecting your personal information and being transparent about how ut uses it.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">2. What Information it Collect</h2>
      <ul className="list-disc pl-6 mt-2">
        <li>Account Details (username, email, password)</li>
        <li>Mood entries you log (mood type, feeling notes, date & time)</li>
        <li>Technical data (browser type, device information)</li>
      </ul>

      <h2 className="text-xl font-semibold glow-text mt-6">3. How it Use Your Data</h2>
      <p>It uses your data to:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Display your mood analytics and emotional trends</li>
        <li>Improve the app experience</li>
      </ul>

      <h2 className="text-xl font-semibold glow-text mt-6">4. Data Protection & Security</h2>
      <p>
        Your data is encrypted and securely stored. Passwords are hashed and not visible to anyone —
        including the owner.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">5. Your Rights</h2>
      <p>You can:</p>
      <ul className="list-disc pl-6 mt-2">
        <li>Request account deletion</li>
        <li>Erase all mood logs</li>
        <li>Logout anytime (JWT removed from your device)</li>
      </ul>

      <h2 className="text-xl font-semibold glow-text mt-6">6. AI Insights Feature (Optional)</h2>
      <p>
        If you choose to use the optional <span className="text-pink-400">AI Insights</span> feature,
        it will explicitly ask for your consent before sharing mood logs with AI for analysis.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">7. Account Deletion Policy</h2>
      <p>Deleting your account permanently removes all stored mood data and personal details.</p>

      <h2 className="text-xl font-semibold glow-text mt-6">8. Data Ownership</h2>
      <p>
        You own your data. KnowYourMood does not sell, trade, or rent your information to third parties.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">9. User Responsibility for Content</h2>
      <p>
        You are responsible for the content you enter in the application. Do not enter:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Sensitive personal identifying data (e.g., address, phone number)</li>
        <li>Data about someone else without their permission</li>
        <li>Confidential or illegal information</li>
      </ul>
      <p className="mt-2">
        KnowYourMood is not responsible for any consequences resulting from user-inputted content.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">10. Contact Us</h2>
<p>
  For questions regarding this policy:   
  <a
    href="mailto:knowyourmood.support@gmail.com?subject=KnowYourMood%20Privacy%20Policy%20Enquiry"
    className="text-pink-400 underline"
  >
    knowyourmood.support@gmail.com
  </a>
</p>

      <div className="text-center mt-8">
        <Link to="/dashboard" className="glow-btn inline-block">
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}