import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100 px-6 py-4">
      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 to-purple-400 shadow-md"></div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">yourname</span>
            <span className="text-xs bg-white/60 rounded-full px-2 py-0.5 text-gray-600 shadow-sm">
              expert
            </span>
          </div>
        </div>
        <div className="px-5 py-2 rounded-full bg-white/90 text-slate-500 font-semibold shadow-md">
          Score
        </div>
      </nav>

      {/* Daily Task */}
      <div className="grid gap-6 h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10">
        <Link to="/quiz">
        <div className="flex backdrop-blur-xl bg-white/20 border border-gray-200 shadow-lg 
                        rounded-2xl text-gray-700 font-medium cursor-pointer 
                        hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden">
          <div className="w-36 h-28 bg-white/30  rounded-l-2xl flex items-center justify-center">
            <span className="text-cyan-700 font-bold text-lg ">Images</span>
          </div>
          <div className="w-full flex justify-center items-center text-gray-600 font-medium">
            Daily Task Quiz
          </div>
        </div>
        </Link>
      </div>

      {/* Quiz Section */}
      <div>
        <div className="flex justify-between items-center my-3">
          <p className="text-sm font-semibold text-gray-700">Quiz</p>
          <p className="text-sm font-semibold text-gray-700 cursor-pointer hover:underline">View all</p>
        </div>
        <div className="flex gap-5 overflow-x-auto pb-3">
          {[...Array(6)].map((_, i) => (
            <Link to="/quiz" key={i} className="flex-shrink-0">
              <div key={i} className="flex flex-col items-center min-w-[60px]">
              <div className="w-14 h-14 bg-white/40 rounded-xl shadow-md"></div>
              <p className="text-xs text-gray-600 mt-1">Title</p>
              </div>
            </Link>
 
          ))}
        </div>
      </div>

      {/* Show More */}
      <div className="mt-8">
        <div className="flex justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">Show more</p>
          <p className="text-sm font-semibold text-gray-700 cursor-pointer hover:underline">View all</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {[...Array(4)].map((_, i) => (
            <Link to="/quiz">
            <div
              key={i}
              className="p-3 w-auto backdrop-blur-lg bg-white border border-gray-200 shadow -lg rounded-xl hover:shadow-xl transition"
            >
              <div className="w-full h-28 bg-cyan-100 rounded-lg shadow-sm"></div>
              <p className="mt-2 font-medium text-gray-700">Coding Quiz</p>
              <p className="text-xs text-gray-500">15 questions</p>
              <p className="text-sm text-yellow-500 font-semibold mt-2">24.5k plays</p>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
