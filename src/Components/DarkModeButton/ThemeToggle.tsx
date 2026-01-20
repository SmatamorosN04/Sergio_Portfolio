import {useEffect, useState} from "react";
import * as React from "react";

const ThemeToggle: React.FC = () => {
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('theme');
        return saved === 'dark';

    });


    useEffect(() => {
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme','dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [darkMode]);

    return (
        <button
        onClick={() => setDarkMode(!darkMode)}
        className='bg-white text-black absolute top-5 left-5 p-2 border border-black rounded-l-full dark:bg-gray-800 dark:text-white dark:border-white'
        >
            {darkMode ? 'Light' : 'Dark'}
        </button>
    )

}
export default ThemeToggle