import {Link} from "react-router-dom";

function Select() {
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100">
        <div className="w-full max-w-4xl p-8">
          <h1 className="text-gray-800 text-3xl font-semibold text-center mb-10">
            Welcome to the Quiz App
          </h1>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link to ="/admincat">
            <div className="flex backdrop-blur-md bg-white/70 border border-gray-200 shadow-md 
                         rounded-xl p-6 text-center text-gray-700 font-medium cursor-pointer 
                         hover:shadow-xl hover:scale-105 transition-all duration-300 justify-between ">
              <div className="w-28 h-20  bg-pink-100 rounded-xl flex items-center justify-center">
                <span className="text-pink-500 font-bold text-lg">Admin</span>
              </div>
              <div className="w-full flex justify-center items-center">
                Admin Panel
              </div>
            </div>
            </Link>

            <Link to="/home">
            <div className="flex backdrop-blur-md bg-white/70 border border-gray-200 shadow-md 
                         rounded-xl p-6 text-center text-gray-700 font-medium cursor-pointer 
                         hover:shadow-xl hover:scale-105 transition-all duration-300 justify-between ">
              <div className="w-28 h-20  bg-blue-100 rounded-xl flex items-center justify-center">
                <span className="text-blue-500 font-bold text-lg">User</span>
              </div>
              <div className="w-full flex justify-center items-center">
                User Panel
              </div>
            </div>
            </Link>

          </div>        
        </div>
    </div>
        </>   
)


}
export default Select;