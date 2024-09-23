import './App.css'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar'
import { TbHexagonPlusFilled } from "react-icons/tb";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';


function App() {

  return (
    <div className=' bg-[#111827] dark:bg-[#111827]  text-white w-full h-full relative flex flex-col'>

<Navbar></Navbar>
<div className='w-full flex '></div>
<Sidebar></Sidebar>
<Router>
<Routes>
  <Route path='/' element={<Home/>}></Route>
</Routes>
</Router>
  
</div>



    
 
  )
}

export default App
