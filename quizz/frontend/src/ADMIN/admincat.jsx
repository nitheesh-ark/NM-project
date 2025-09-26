import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

function Category() {
  const categories = [
    'Science',
    'Geography',
    'Literature',
    'Sports',
    'Entertainment',
    'Technology',
  ];

  return (
    <div className="min-h-screen flex items-center justify-center  bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100">
      <div className="w-full max-w-5xl p-8">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-gray-800 text-3xl font-semibold">
            Choose a Category
          </h1>
          <button className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-violet-700 hover:shadow-lg transition">
            <FaPlus size={14} /> Add Category
          </button>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categories.map((cat, index) => (
            <Link to = "/questions">
            <div
              key={index}
              className="flex items-center gap-4 backdrop-blur-md bg-white/70 border border-gray-200 shadow-md 
                         rounded-xl p-4 text-gray-700 font-medium cursor-pointer 
                         hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Placeholder icon / image box */}
              <div className="w-20 h-16 bg-white/30 rounded-lg flex items-center justify-center text-violet-700 font-bold">
                {cat.charAt(0)}
              </div>

              {/* Category name */}
              <div className="flex-1 text-lg">{cat}</div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Category;
