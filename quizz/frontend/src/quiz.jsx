function Quiz() {
  return (
    <div className="min-h-screen  bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100 flex items-center justify-center px-4 py-6">
      <div className="max-w-full backdrop-blur-md bg-white shadow-lg rounded-2xl p-6 border border-white/40">
        
        {/* Question */}
        <div className="bg-gradient-to-br from-violet-300 to-violet-500 text-white rounded-xl p-6 text-center">
          <p className="text-base sm:text-lg font-medium">
            This part contains the question for the given category and related options
          </p>
        </div>

        {/* Timer */}
        <p className="text-center mt-4 text-gray-700 font-medium">⏳ Optional time</p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
          {[...Array(4)].map((_, index) => (
            <button
              key={index}
              className="flex justify-between items-center h-12 px-4 rounded-lg 
              bg-white/40 backdrop-blur-sm shadow-lg border border-white/50 
              text-gray-700 font-medium hover:bg-white/60 active:scale-95 transition md: w-full"
            >
              <span>A</span>
              <span>Option {index + 1}</span>
              <span>◎</span>
            </button>
          ))}
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-600 font-medium">1 / 10</p>
          <button className="px-5 py-2 rounded-lg bg-violet-500 text-white font-semibold shadow-md hover:bg-violet-600 active:scale-95 transition">
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
