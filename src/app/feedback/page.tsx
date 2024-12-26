"use client";

export default function Feedback() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-2xl w-full space-y-10 px-4">
        {/* Diagnosis Results Section */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Diagnosis Results</h2>
          <p className="mt-2 text-gray-700 font-medium">Possible Diabetes</p>
          <p className="mt-1 text-gray-600">
            Recommendation: Schedule a follow-up test.
          </p>
          <div className="mt-6 bg-white p-4 shadow-md rounded-lg">
            <h3 className="font-bold text-gray-800">
              Supporting Clinical Guidelines
            </h3>
            <p className="text-gray-600 mt-2">Guideline details...</p>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="bg-blue-50 shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-bold text-gray-800">Provide Feedback</h2>
          <p className="mt-2 text-gray-700">How accurate is this diagnosis?</p>

          {/* Star Rating */}
          <div className="flex items-center mt-4 space-x-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                fill={index < 3 ? "currentColor" : "none"} // Highlight 3 stars
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`h-6 w-6 ${
                  index < 3 ? "text-yellow-500" : "text-gray-400"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.004 6.162a1 1 0 00.95.69h6.462c.969 0 1.371 1.24.588 1.81l-5.23 3.796a1 1 0 00-.364 1.118l2.004 6.162c.3.921-.755 1.688-1.54 1.118l-5.23-3.796a1 1 0 00-1.176 0l-5.23 3.796c-.784.57-1.84-.197-1.54-1.118l2.004-6.162a1 1 0 00-.364-1.118L2.49 11.59c-.784-.57-.38-1.81.588-1.81h6.462a1 1 0 00.95-.69l2.004-6.162z"
                />
              </svg>
            ))}
          </div>

          {/* Feedback Input */}
          <textarea
            className="mt-6 w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Please share your feedback..."
            rows={4}
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-blue-600 text-white font-medium py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
