"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Use `next/navigation` for App Router navigation
import Link from "next/link";

export default function Home() {
  const [symptoms, setSymptoms] = useState(""); // State to store user input
  const [textareaValue, setTextareaValue] = useState(""); // Temporary state for textarea value
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setSymptoms(textareaValue); // Update the `symptoms` state
    router.push(`/results?symptoms=${encodeURIComponent(textareaValue)}`); // Redirect to results page with query parameters
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
     
      {/* Main Content */}
      <div className="flex-grow flex items-center justify-center px-4">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
            Welcome to the Clinical Decision Support System
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Input patient symptoms or queries below to receive diagnostic suggestions and treatment.
          </p>
          <form onSubmit={handleSubmit}>
            <textarea
              className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              placeholder="Enter patient symptoms..."
              rows={4}
              aria-label="Enter patient symptoms"
              value={textareaValue}
              onChange={(e) => setTextareaValue(e.target.value)}
              style={{color:"black"}}
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
