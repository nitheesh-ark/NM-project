import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
const questions = [
  { id: 1, q: "Capital of France?", a: "Paris" },
  { id: 2, q: "5 + 7 =", a: "12" },
  { id: 3, q: "Fastest land animal on  this planet ?", a: "Cheetah" },
  { id: 4, q: "React is a ___?", a: "Library" },
];

export default function AdminQuestions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100 p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Questions</h1>
        <Link to = '/admin'>
        <button className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
          <FaPlus /> Add Question
        </button>
        </Link>
      </div>

      {/* Questions Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {questions.map((item) => (
          <div 
            key={item.id} 
            className="backdrop-blur-md bg-white/80 shadow-md p-6 rounded-xl border border-gray-200 relative hover:shadow-lg transition"
          >
            {/* Edit/Delete */}
            <div className="absolute top-3 right-3 flex gap-2 text-gray-500">
              <Link to = "/admin">
              <button className="hover:text-violet-600 transition">
                <FaEdit size={16} />
              </button>
              </Link>
              <button className="hover:text-red-500 transition">
                <FaTrash size={16} />
              </button>
            </div>

            {/* Question & Answer */}
            <p className="text-base font-semibold text-gray-800 mb-2">Q: {item.q}</p>
            <p className="text-sm text-gray-600">A: <span className="font-medium text-violet-700">{item.a}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
