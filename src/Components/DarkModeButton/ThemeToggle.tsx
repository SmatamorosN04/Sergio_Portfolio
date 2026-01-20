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
        <label
            className="relative
             mt-5
             inline-flex items-center cursor-pointer">

            <input type="checkbox" value=""
                   onChange={() => setDarkMode(!darkMode)}
                   className="sr-only peer"/>
            <div
                className="group peer ring-0
                 bg-linear-to-bl from-neutral-800
                 via-neutral-700 to-neutral-600  rounded-full
                  outline-none duration-1000 after:duration-300 w-24
                   h-12  shadow-md  peer-focus:outline-none
                   after:content-[''] after:rounded-full after:absolute
                   after:[background:#0D2B39]   peer-checked:after:rotate-180
                    after:[background:conic-gradient(from_135deg,_#b2a9a9,_#b2a8a8,_#ffffff,_#d7dbd9_,_#ffffff,_#b2a8a8)]  after:outline-none after:h-10 after:w-10 after:top-1 after:left-1   peer-checked:after:translate-x-12 peer-hover:after:scale-95 peer-checked:bg-gradient-to-r peer-checked:from-emerald-500 peer-checked:to-emerald-900">

            </div>
        </label>
    /*<button
        onClick={() => setDarkMode(!darkMode)}
        className='bg-white text-black absolute top-5 left-5 p-2 border border-black rounded-l-full dark:bg-gray-800 dark:text-white dark:border-white'
    >
        {darkMode ? 'Light' : 'Dark'}
    </button>*/
)

}
export default ThemeToggle