type Lenguage= "HTML5" | 'CSS3'| 'JAVASCRIPT' | 'SQL' | 'GIT' | 'VITE.JS' | 'NODE.JS' | 'PHP' | 'TYPESCRIPT' | 'REACT.JS' | 'TAILWINDCSS'

type skillProps = {
    Skills: Lenguage[]
}
const SkillCards: React.FC<skillProps> = ({ Skills }) => {

    return (
        <section className=' w-full justify-between'>
            <h1 className='text-3xl font-bold mt-7 mb-3 dark:text-white'>Skills</h1>
            <article >
                <ul className='flex flex-row space-x-3   flex-wrap'>
                    {Skills.map((skill) => (
                        <li
                            className='list-nonw bg-black text-white dark:bg-white dark:text-black p-1.5 rounded-lg mb-3'
                        key={skill}
                        >
                            {skill}
                        </li>
                    ))
                    }
                </ul>
            </article>
        </section>
    )
}
export default SkillCards