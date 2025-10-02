import React, { useState } from "react";
import {toast} from 'react-toastify';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const localhost = import.meta.env.VITE_Local_network

const Edict = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", ""]);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState(0);
  const [category, setCategory] = useState("");

  const {id} = useParams();
  console.log(id);

useEffect(()=>{
  axios.get(`${localhost}/api/admin/quess/${id}`)
    .then((res)=>{
      console.log("from edict", res.data);
      if(res.data){
        setQuestion(res.data.question || "");
        setOptions(res.data.options || ["", ""]);
        setCorrectAnswerIndex(res.data.correctAnswerIndex || 0);
        setCategory(res.data.category || "");
      }
    })
    .catch((err)=>{
      console.log("Error fetching quiz:", err);
    });
},[id]);

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
    axios.put(`${localhost}/api/admin/quess/${id}`, newQuiz)
    .catch((err) => {
      console.error("Error on adding quiz in put request :", err);
    });

    toast.success("Quiz updated successfully!");
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
            Edict panel
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Question */}
            <div>
              <label className="label">
                <span className="label-text text-violet-600 font-medium">
                  question
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
                        key={index}
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

export default Edict;