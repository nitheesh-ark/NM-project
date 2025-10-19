import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { createscore } from "./App";

import code from "./assets/code.jpeg";
import lock from "./assets/lock.png";
import science from "./assets/science.jpeg";
import math from "./assets/math.jpeg";
import sports from "./assets/sports.jpeg";
import tech from "./assets/tech.jpeg";
import ninja from "./assets/ninja.jpeg";

// 🔹 Modal Component for Confirming Quiz Start
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

// 🔹 Name Modal (asks for username)
function NameModal({ isOpen, onSubmit }) {
  const [name, setName] = useState("");

  if (!isOpen) return null;

  const handleSubmit = () => {
    if (name.trim() === "") return;
    onSubmit(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex justify-center items-center z-50">
      <div className="bg-white/90 rounded-xl shadow-lg p-6 w-80 max-w-full">
        <h2 className="text-lg font-bold mb-3 text-gray-800">Welcome!</h2>
        <p className="text-sm text-gray-600 mb-4">Please enter your name to continue:</p>
        <input
          type="text"
          placeholder="Your name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

// 🔹 Main Home Component
function Home() {
  const { score, setScore, username, setUsername } = useContext(createscore);
  const navigate = useNavigate();
  const { id } = useParams();
  const decodedId = decodeURIComponent(id || "");

  const imgarr = [code, science, math, sports, tech];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState("");
  const [showNameModal, setShowNameModal] = useState(false);

  // Ask for name on first visit
  useEffect(() => {
    const storedName = localStorage.getItem("username");
    if (!storedName) {
      setShowNameModal(true);
    } else {
      setUsername && setUsername(storedName);
    }
  }, [setUsername]);

  const handleNameSubmit = (name) => {
    localStorage.setItem("username", name);
    setUsername && setUsername(name);
    setShowNameModal(false);
  };

  // Quiz Modal handlers
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
      {/* 🔹 Name Input Popup */}
      <NameModal isOpen={showNameModal} onSubmit={handleNameSubmit} />

      {/* Navbar */}
      <nav className="flex justify-between items-center mb-6">
        <div className="flex gap-3 items-center">
          <div className="w-10 h-10 rounded-full shadow-md bg-cover">
            <img src={ninja} alt="you" className="rounded-full w-full h-full" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">
              {localStorage.getItem("username") || "Guest"}
            </span>
            <span className="text-xs bg-white/60 rounded-full px-2 py-0.5 text-gray-600 shadow-sm w-fit">
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
            <span className="text-cyan-700 font-bold text-lg">Task - 0</span>
          </div>
          <div className="w-full flex justify-center items-center text-gray-600 font-medium">
            Daily Task completed
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
              <div className="w-16 h-16 rounded-xl shadow-md overflow-hidden">
                <img
                  src={img}
                  alt={`Quiz ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs text-gray-600 mt-1">
                {["Code", "Science", "Math", "Sport", "Tech"][i]}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Show More Section */}
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
                <img className="w-full h-full object-cover" src={imgs} alt="images" />
              </div>
              <p className="mt-2 font-medium text-gray-700">Coding Quiz</p>
              <p className="text-xs text-gray-500">15 questions</p>
              <p className="text-sm text-yellow-500 font-semibold mt-2">24.5k plays</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quiz Confirmation Modal */}
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
