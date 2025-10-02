import { useEffect } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const localhost = import.meta.env.VITE_Local_network

export default function AdminQuestions() {
  
  const [apidata, setapidata] = useState([]) 
  const {category} = useParams()
  console.log("from question page",category);
  useEffect(()=>{
     axios.get(`${localhost}/api/admin/quess/category/${category}`).then((res)=>{
      console.log(res.data);
      setapidata(res.data)
    }).catch((err)=>{
      console.log(err);
    })
  
},[])
   
    const del = (id) => {
      axios.delete(`${localhost}/api/admin/quess/${id}`)
      .then((res)=>{
        console.log(res.data)
        setapidata(pre => pre.filter((items => items._id !== id)))
      }).catch((err)=>{
        console.log("error ", err)
      })
    }
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-violet-300 to-fuchsia-100 p-8">
      
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Manage Questions</h1>
        <Link to = '/admin'>
        <button className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition">
          <FaPlus /> Add Question
        </button>
        </Link>
      </div>

      {/* Questions Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {apidata.map((item) => (
          <div 
            key={item._id} 
            className="backdrop-blur-md bg-white/80 shadow-md p-6 rounded-xl border border-gray-200 relative hover:shadow-lg transition"
          >
            {/* Edit/Delete */}
            <div className="absolute top-3 right-3 flex gap-2 text-gray-500">
          
              <Link to = {`/adminedict/${item._id}`}>
              <button
              className="hover:text-violet-600 transition">
                <FaEdit size={16} />
              </button>
              </Link>

              <button 
              className="hover:text-red-500 transition"
              onClick={()=>{del(item._id)}}
              >
                <FaTrash size={16} />
              </button>
            </div>

            {/* Question & Answer */}
            <p className="text-base font-semibold text-gray-800 mb-2">Q: {item.question}</p>
            <p className="text-sm text-gray-600">A: <span className="font-medium text-violet-700">{item.options[item.correctAnswerIndex]}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}
