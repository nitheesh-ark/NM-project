import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import { createContext } from 'react';
import { useState } from 'react';

import './index.css'

import Category from './ADMIN/admincat'
import Form from './ADMIN/Form'
import Home from './home'
import Quiz from './quiz'
import Select from './select'
import Quest from './ADMIN/adminquestions'
import {Route,Routes} from 'react-router-dom'
import Edict from './ADMIN/edict';
import Resultpage from './result';


export const createscore = createContext();
function App() {
    const [score,setScore] = useState(0);
    return (

         <createscore.Provider value={{score,setScore}}>
           <BrowserRouter>
            <Routes>
           
              <Route path='/admin' element={<Form/>}/>
              <Route path="/adminedict/:id" element={<Edict />}/>
              <Route path='/admincat' element={<Category/>}/>
              <Route path='/adminquest' element={<Quest/>}/>
              <Route path='/' element={<Select/>}/>
              <Route path='/questions' element={<Quest/>}/>
              <Route path='/questions/:category' element={<Quest/>}/>
              
              <Route path='/home/:id' element={<Home/>}/>
              <Route path='/quiz/:category' element={<Quiz/>}/>
              <Route path='/result' element={<Resultpage/>}/>

           
            </Routes>
            
            </BrowserRouter>
           <ToastContainer />
          </createscore.Provider>
            
    
    )
}
export default App;