import {toast} from 'react-toastify';
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { createscore } from './App';
import { useNavigate } from 'react-router-dom';
import Resultpage from './result';

const localhost = import.meta.env.VITE_Local_network

function Quiz() {

  const {score, setScore} = useContext(createscore)
  const [curindex, setindex] = useState(0)  
  const [selected, setselected] = useState(null)
  const [quiss, setquiss] = useState([])
  const [Cscore, Csetscore] = useState(0)
  const {category} = useParams();
  const navigate = useNavigate()

  console.log(category)

  useEffect(()=>{
    
    axios.get(`${localhost}/api/admin/quess/category/${category}`)
    .then((res)=>{
      setquiss(res.data)
    })
  },[])

  const movenext = () => {
    if (selected == null) {
      return (toast.error("Please select an option before proceeding."));
    }
    if (curindex === quiss.length - 1) {
       console.log(Cscore," / ",quiss.length)
       navigate('/result', {state : {Tscore: Cscore, total:  quiss.length, score: score}})
      //  if (window.confirm(`Your score is ${score} out of ${quiss.length}. Do you want to restart the quiz?`)) {
      //   setindex(0);
      //   setscore(0);                     //gpt
      //   setselected(null);
      // }

    }else{
          console.log(Cscore)
          setindex((pre) => pre+1)
        
          console.log(curindex)
          setselected(null)
    }
   
  }
  if (quiss.length === 0) {
    return(<div className="min-h-screen  bg-gradient-to-br from-gray-100 via-violet-400 to-fuchsia-100 flex items-center justify-center px-4 py-6"> 
      <span class="w-16 loading loading-ring"></span>
      </div>)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-violet-400 to-fuchsia-100 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-2xl  backdrop-blur-md bg-white shadow-lg rounded-2xl p-6 border border-white/40">
        

        <div className="bg-gradient-to-br from-violet-300 to-violet-500 text-white rounded-xl p-5 text-center h-32">
          <p className="text-base sm:text-lg font-medium">
            {quiss[curindex].question}
          </p>
        </div>


        <p className="text-center mt-4 text-gray-700 font-medium">⏳time setting</p>

        {/* Options */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 mt-5">
         {quiss[curindex].options.map((elements, index) =>{
          let btncolor = "bg-white/40 hover:bg-gray-100"
          if(selected != null){      // -> hard part to check user click or not
            if (index === quiss[curindex].correctAnswerIndex){
              btncolor = "bg-cyan-200  hover:bg-cyan-100 border-2 border-cyan-400"
            }else if (index===selected){
              btncolor = "bg-red-200  hover:bg-red-100"

            }
          }
          return(
            <button
            key = {index}
            value={elements}
              className={`flex justify-between items-center h-12 px-4 rounded-lg  ${btncolor}
              backdrop-blur-sm shadow-lg border border-white/50 
              text-gray-700 font-medium active:scale-95 transition md: w-full`}
              
              onClick={(e) => {
                setselected(index)
                 if (index === quiss[curindex].correctAnswerIndex) {
                  Csetscore((prev) => prev + 1);
                  setScore((prev) => prev + 10);
                  console.log("Totalscore",score)
                }
              }}  

              disabled={selected !== null}
            >
              <span >{index+1}</span>
              <span>{elements}</span>
              <span>◎</span>
            </button>
          )
         })}
        </div>


        <div className="flex justify-between items-center mt-8">
          <p className="text-gray-600 font-medium">{curindex+1} / {quiss.length}</p>
          <button 
          className="px-5 py-2 rounded-lg bg-violet-500 text-white font-semibold shadow-md hover:bg-violet-600 active:scale-95 transition"
          onClick={() => movenext()}  
          >
            {quiss.length-1 == curindex ? "Result": "Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
