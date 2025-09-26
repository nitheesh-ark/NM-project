import React, { useState } from "react";

const AdminPage = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [category, setCategory] = useState("");

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addOption = () => setOptions([...options, ""]);
  const removeOption = (index) => setOptions(options.filter((_, i) => i !== index));

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newQuiz = { question, options, correctAnswerIndex, category };

    await fetch("http://localhost:5000/api/admin/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newQuiz),
    });

    alert("✅ Quiz added successfully!");
    setQuestion("");
    setOptions(["", ""]);
    setCorrectAnswerIndex(0);
    setCategory("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100">
      <div className="card w-full max-w-2xl shadow-2xl bg-white/60 backdrop-blur-lg border border-violet-300 rounded-2xl">
        <div className="card-body p-10 space-y-8">
          <h2 className="text-3xl font-bold text-center text-violet-700">
            Admin Panel
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question */}
            <div>
              <label className="label">
                <span className="label-text text-violet-600 font-medium">
                  Question
                </span>
              </label>
              <input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                className="input input-bordered w-full bg-white/70 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter your question"
                required
              />
            </div>

            {/* Options */}
            <div>
              <label className="label">
                <span className="label-text text-violet-600 font-medium">
                  Options
                </span>
              </label>
              <div className="space-y-3">
                {options.map((opt, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={opt}
                      onChange={(e) => handleOptionChange(index, e.target.value)}
                      className="input input-bordered w-full bg-white/70 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                      placeholder={`Option ${index + 1}`}
                      required
                    />
                    
                    {options.length > 2 && (
                      <button
                        type="button"
                        className="btn btn-error btn-sm rounded-lg"
                        onClick={() => removeOption(index)}
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>
              <button
                type="button"
                className="btn btn-outline bg-violet-300 btn-sm mt-3 rounded-lg"
                onClick={addOption}
              >
                + Add Option
              </button>
            </div>

            {/* Correct Answer */}
            <div>
              <label className="label">
                <span className="label-text text-violet-600 font-medium">
                  Correct Answer
                </span>
              </label>
              <select
                value={correctAnswerIndex}
                onChange={(e) => setCorrectAnswerIndex(Number(e.target.value))}
                className="select select-bordered w-full bg-white/70 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
              >
                {options.map((opt, i) => (
                  <option key={i} value={i}>
                    {opt || `Option ${i + 1}`}
                  </option>
                ))}
              </select>
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <span className="label-text text-violet-600 font-medium">
                  Category
                </span>
              </label>
              <input
                type="text"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="input input-bordered w-full bg-white/70 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-violet-400"
                placeholder="Enter category"
              />
            </div>

            {/* Submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="btn w-full rounded-xl text-white bg-violet-600 hover:bg-violet-700"
              >
                Save Quiz
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;