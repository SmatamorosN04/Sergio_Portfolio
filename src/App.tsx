import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import './App.css';
import Home from "./Pages/Home.tsx";
import RepoDetail from "./Pages/RepoDetail.tsx";

function App() {
    return (
        <ThemeProvider>
            <div className='bg-white dark:bg-gray-800 min-h-screen overflow-x-hidden transition-colors duration-300'>
                <Router>
                    <main className="w-full">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/repos/:id' element={<RepoDetail />} />
                        </Routes>
                    </main>
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
