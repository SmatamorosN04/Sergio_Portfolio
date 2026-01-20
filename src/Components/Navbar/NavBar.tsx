import {Link} from "react-router-dom";

import ThemeToggle from "../DarkModeButton/ThemeToggle.tsx";

function NavBar() {
    return(
        <nav className="bg-neutral-primary w-175 mx-auto">
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
                <ThemeToggle/>
                <div className="flex items-center space-x-6 rtl:space-x-reverse">
                    <Link className='text-black dark:text-white text-2xl' to='/'>Home </Link>
                    <Link  className='text-black dark:text-white text-2xl' to='/repos/1'>Example of Repo</Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar