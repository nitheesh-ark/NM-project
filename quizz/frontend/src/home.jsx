import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import{ createscore } from "./App";

import code from "./assets/code.jpeg";
import lock from "./assets/lock.png";
import science from "./assets/science.jpeg";
import math from "./assets/math.jpeg";
import sports from "./assets/sports.jpeg";
import tech from "./assets/tech.jpeg";

// Modal Component Ai geberated by ChatGPT
function Modal({ isOpen, title, message, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-10 flex justify-center items-center z-50">
      <div className="bg-white/90 rounded-xl shadow-lg p-6 w-80 max-w-full">
        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{message}</p>
        <div className="flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
            onClick={onConfirm}
          >
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
// end of modal component by ChatGPT    

function Home() {
  const { score, setScore } = useContext(createscore);
  const navigate = useNavigate();
  const { id } = useParams();
  const decodedId = decodeURIComponent(id || "");
  console.log(decodedId);

  const imgarr = [code, science, math, sports, tech];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState("");

  // Handle click on quiz card
  const handleQuizClick = (quizName) => {
    setSelectedQuiz(quizName);
    setModalOpen(true);
  };

  const handleConfirm = () => {
    setModalOpen(false);
    navigate(`/quiz/${selectedQuiz}`);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

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
          {score}
        </div>
      </nav>

      {/* Daily Task */}
      <div className="grid gap-6 h-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mb-10">
        <div
          className="flex backdrop-blur-xl bg-white/20 border border-gray-200 shadow-lg rounded-2xl text-gray-700 font-medium cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
          onClick={() => handleQuizClick("Daily Task")}
        >
          <div className="w-36 h-28 bg-white/30 rounded-l-2xl flex items-center justify-center">
            <span className="text-cyan-700 font-bold text-lg">Images</span>
          </div>
          <div className="w-full flex justify-center items-center text-gray-600 font-medium">
            Daily Task Quiz
          </div>
        </div>
      </div>

      {/* Quiz Section */}
      <div>
        <div className="flex justify-between items-center my-3">
          <p className="text-sm font-semibold text-gray-700">Quiz</p>
          <p className="text-sm font-semibold text-gray-700 cursor-pointer hover:underline">
            View all
          </p>
        </div>

        <div className="flex gap-5 overflow-x-auto pb-3">
          {imgarr.map((img, i) => (
            <div
              key={i}
              className="flex-shrink-0 flex flex-col items-center min-w-[60px] cursor-pointer"
              onClick={() =>
                handleQuizClick(["Code", "Science", "Math", "Sports", "Tech"][i])
              }
            >
              {/* Image card */}
              <div className="w-16 h-16 rounded-xl shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`Quiz ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Title under image */}
              <p className="text-xs text-gray-600 mt-1">
                {["Code", "Science", "Math", "Sport", "Tech"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Show More */}
      <div className="mt-8">
        <div className="flex justify-between mb-3">
          <p className="text-sm font-semibold text-gray-700">Show more</p>
          <p className="text-sm font-semibold text-gray-700 cursor-pointer hover:underline">
            View all
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {imgarr.map((imgs, i) => (
            <div
              key={i}
              className="p-3 w-auto backdrop-blur-lg bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-xl transition cursor-pointer"
              onClick={() =>
                handleQuizClick(["Code", "Science", "Math", "Sports", "Tech"][i])
              }
            >
              <div className="w-full h-28 bg-cyan-100 rounded-lg shadow-sm">
                <img
                  className="w-full h-full object-cover"
                  src={imgs}
                  alt="images"
                />
              </div>
              <p className="mt-2 font-medium text-gray-700">Coding Quiz</p>
              <p className="text-xs text-gray-500">15 questions</p>
              <p className="text-sm text-yellow-500 font-semibold mt-2">24.5k plays</p>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Modal */}
      <Modal
        isOpen={modalOpen}
        title="Start Quiz"
        message={`Are you sure you want to start the ${selectedQuiz} quiz?`}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </div>
  );
}

export default Home;
