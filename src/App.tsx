import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from "./Pages/Home.tsx";
import RepoDetail from "./Pages/RepoDetail.tsx";
import NavBar from "./Components/Navbar/NavBar.tsx";


function App() {
return(
    <div className='bg-gray-100  dark:bg-gray-800'><Router>
        <NavBar></NavBar>
        <Routes>
            <Route path='/' element={< Home/>}/>
            <Route path='/repos/:id' element={< RepoDetail/>}/>
        </Routes>
    </Router>
    </div>

)
}

export default App
