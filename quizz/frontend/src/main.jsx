import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Category from './ADMIN/admincat'

import App from './ADMIN/App'
import Home from './home'
import Quiz from './quiz'
import Select from './select'
import Quest from './ADMIN/questions'
import Questons from './ADMIN/questions'
import {Route,Routes,BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(

  <StrictMode >

    <BrowserRouter>
    <Routes>

      <Route path='/admin' element={<App/>}/>
      <Route path='/admincat' element={<Category/>}/>
      <Route path='/adminquest' element={<Quest/>}/>
      <Route path='/' element={<Select/>}/>
      <Route path='/questions' element={<Questons/>}/>
      
      <Route path='/home' element={<Home/>}/>
      <Route path='/quiz' element={<Quiz/>}/>
      <Route path='/score' element={<Home/>}/>

    </Routes>
    </BrowserRouter>
    
  </StrictMode>
  
)
