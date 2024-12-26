"use client";

import { useRouter } from "next/navigation";

export default function Results() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <h1 className="text-lg font-bold text-gray-800">Diagnosis Results</h1>
        </div>
      </header>

      {/* Main Section */}
      <main className="flex-grow flex items-center justify-center">
        <div className="bg-gray-100 shadow-lg rounded-lg p-8 max-w-2xl w-full">
          {/* Diagnosis Section */}
          <h2 className="text-2xl font-bold text-gray-800">Possible Diabetes</h2>
          <div className="mt-4">
            <p className="font-medium text-gray-800">Confidence Score: 
              <span className="inline-block bg-green-500 text-white px-2 py-1 rounded ml-2">
                85%
              </span>
            </p>
            <p className="mt-2 text-gray-700">
              Based on the symptoms provided, there is a possibility of diabetes. 
              We recommend consulting a healthcare provider for further evaluation and management.
            </p>
          </div>

          {/* Additional Suggestions */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Additional Suggestions:</h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Consider monitoring for signs of dehydration</li>
              <li>Watch for symptoms of fatigue and frequent urination</li>
            </ul>
          </div>

          {/* Treatment Recommendations */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Treatment Recommendations:</h3>
            <ul className="mt-2 text-gray-700 list-disc list-inside">
              <li>Increase hydration levels</li>
              <li>Monitor blood sugar regularly</li>
            </ul>
          </div>

          {/* Supporting Guidelines */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold text-gray-800">Supporting Guidelines</h3>
            <div className="bg-white shadow-md rounded-lg p-4 mt-2">
              <h4 className="text-gray-800 font-bold">
                Diabetes Management Guidelines
              </h4>
              <p className="text-gray-700 mt-2">
                A comprehensive guide to managing diabetes effectively:
              </p>
              <ul className="mt-2 text-gray-700 list-disc list-inside">
                <li>Follow a balanced diet and regular exercise.</li>
                <li>Monitor blood glucose levels regularly.</li>
                <li>Consult a healthcare provider for personalized advice.</li>
              </ul>
              <a
                href="#"
                className="text-blue-500 mt-2 inline-block hover:underline"
              >
                View full guideline
              </a>
            </div>
          </div>

          {/* Back to Home Button */}
          <div className="mt-8">
            <button
              onClick={() => router.push("/")}
              className="bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800 transition"
            >
              Back to Home
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
