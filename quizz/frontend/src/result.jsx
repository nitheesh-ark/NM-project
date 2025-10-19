import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState, useEffect} from "react";
import { useLocation } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";
 
function Resultpage() {
  const navigate = useNavigate()
  const Location = useLocation()
  const {Tscore, total, score} = Location.state || {Tscore:5, total:10}

  console.log(`Tscore: ${Tscore}  total: ${total}`)

  const points = score ;
  const totalPoints = total;

   const [percentage, setPercentage] = useState(0); // start at 0

  useEffect(() => {
    const target = ((Tscore/total)) * 100; // final value
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setPercentage(current);
      if (current >= target) clearInterval(interval);
    }, 15); // adjust speed (lower = faster)
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center  bg-gradient-to-br from-gray-100 via-violet-400 to-fuchsia-100 p-5">
  
      <h1 className="text-center text-purple-900 text-4xl font-extrabold drop-shadow mb-6">
        Quiz Result
      </h1>


      <div className="w-full md:w-96 bg-white/20 backdrop-blur-lg rounded-2xl shadow-xl p-8 flex flex-col items-center border border-white/30">
        

        <div style={{ width: 180, margin: "50px auto" }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          textColor: "#4f46e5",
          pathColor: "#6366f1",
          trailColor: "#e0e7ff",
          pathTransitionDuration: 0.2
        })}
      />
    </div>
        <p className="text-lg text-purple-900 font-medium mb-1">
          Points: <span className="font-bold">{Tscore}</span> / {totalPoints}
        </p>

        <p className="text-lg text-purple-900 font-medium mb-1">
          You scored: <span className="font-bold">{percentage}%</span>
        </p>

        <button 
        className="mt-6 w-40 py-2 rounded-xl bg-purple-700 text-white font-medium shadow-md hover:bg-purple-900 transition"
        onClick={() => {
          navigate('/home/redirected')
        }}
        >
          Return Home
        </button>
      </div>
    </div>
  );
}

export default Resultpage;
