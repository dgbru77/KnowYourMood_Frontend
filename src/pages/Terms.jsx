import React from "react";
import { Link } from "react-router-dom";

export default function Terms() {
  return (
    <div className="max-w-4xl mx-auto glow-card page-fade p-8 mt-8 text-gray-200 leading-7">
      <h1 className="text-3xl font-bold glow-text mb-6 text-center">Terms & Conditions</h1>

      <p>Last Updated: <span className="text-pink-400 font-semibold">March 2025</span></p>

      <h2 className="text-xl font-semibold glow-text mt-6">1. Acceptance of Terms</h2>
      <p>
        By creating an account on <span className="font-semibold">KnowYourMood</span>, you agree to these Terms
        & Conditions. If you disagree with any part, please discontinue using the service.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">2. Use of Service</h2>
      <p>
        KnowYourMood helps you track daily emotional well-being. You agree to use the platform only for
        legitimate and personal use, and not for:
      </p>
      <ul className="list-disc pl-6 mt-2">
        <li>Any illegal activity</li>
        <li>Misuse, disruption, or harm of the service</li>
        <li>Automated bot usage without permission</li>
      </ul>

      <h2 className="text-xl font-semibold glow-text mt-6">3. User Data</h2>
      <p>
        You are responsible for the content you enter. You may delete your account whenever you want, and
        all your mood logs will be permanently erased from our system.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">4. Security & Privacy</h2>
      <p>
        Your data is stored securely and is NOT shared with third parties.  
        For more details, refer to our{" "}
        <Link to="/privacy" className="glow-text underline">
          Privacy Policy
        </Link>.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">5. Changes to Terms</h2>
      <p>
        We may update these terms from time to time. Any significant change will be notified on the platform.
      </p>

      <h2 className="text-xl font-semibold glow-text mt-6">6. Contact</h2>
      <p>
        If you have questions about these terms, contact us at:  
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
