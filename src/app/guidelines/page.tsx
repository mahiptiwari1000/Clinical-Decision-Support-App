export default function Guidelines() {
    const guidelines = [
      {
        title: "Diabetes Management Guidelines",
        description: "A comprehensive guide for managing diabetes effectively.",
        details: [
          "Monitor blood sugar levels regularly.",
          "Adopt a balanced diet and regular exercise.",
          "Follow prescribed medication regimen.",
        ],
      },
      {
        title: "Hypertension and Diabetes",
        description: "Guidelines on managing hypertension in diabetic patients.",
        details: [
          "Regular monitoring of blood pressure.",
          "Implement lifestyle modifications.",
          "Medication adherence.",
        ],
      },
      {
        title: "Lifestyle Interventions for Diabetes",
        description: "Effective lifestyle changes for diabetes management.",
        details: [
          "Increase physical activity.",
          "Adopt a healthy diet.",
          "Maintain a healthy weight.",
        ],
      },
    ];
  
    return (
      <div className="max-w-4xl mx-auto py-8 px-4">
        <h2 className="text-2xl font-bold text-gray-800">Clinical Guidelines</h2>
        <div className="mt-6 space-y-4">
          {guidelines.map((guideline, index) => (
            <div
              key={index}
              className="bg-blue-50 shadow-md rounded-lg p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="text-lg font-bold text-gray-800">
                  {guideline.title}
                </h3>
                <p className="text-gray-600 mt-2">{guideline.description}</p>
                <ul className="mt-2 text-gray-700 list-disc list-inside">
                  {guideline.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className="ml-4 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                View Full Guideline
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
  