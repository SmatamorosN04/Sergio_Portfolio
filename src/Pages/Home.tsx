import ProfileImage from "../Components/ProfileImage/ProfileImage.tsx";
import ProfileInfo from "../Components/ProfileInfo/ProfileInfo.tsx";
import yo from '../assets/yo.png'
import AboutMeInfo from "../Components/AboutMeInfo/AboutMeinfo.tsx";
import ExperiencesCard from "../Components/ExperiencesCard/ExperiencesCard.tsx";
import ProjectCard from "../Components/ProjectsCard/ProjectCard.tsx";
import SkillCards from "../Components/HabilitiesCard/SkillCards.tsx";
import FeaturedProject from "../Components/FeaturedProjects/FeaturedProjects.tsx";
import PersonalSkills from "../Components/PersonalSkills/PersonalSkills.tsx";
import Education from "../Components/EducationCards/Education.tsx";
import {Reveal} from "../Components/Reveal/Reveal.tsx";



function Home() {
    return (
        <div className='bg-gray-100 min-h-screen dark:bg-gray-900 transition-colors duration-300'>
            <div className='max-w-4xl mx-auto px-6 py-10'>
                <Reveal><header className='w-full'>
                    <section className='flex flex-col-reverse md:flex-row justify-between items-center gap-8'>
                        <div className="text-center md:text-left">
                            <ProfileInfo
                                name={'Sergio Matamoros'}
                                abilities={'Junior FullStack Developer'}
                                location={'Managua, Nicaragua'}
                            />
                        </div>
                        <section className='w-40 mb-4 sm:mb-0 h-40 md:w-50 md:h-50 shrink-0'>
                            <ProfileImage resource={yo}/>
                        </section>
                    </section>
                </header></Reveal>


                <main className='mt-12 space-y-16'>
                 <Reveal>
                     <AboutMeInfo
                     title={'About Me'}
                     text={"Junior Fullstack Developer with a strong focus on building scalable, high-performance web applications using Next.js and TypeScript. Currently mastering Web3 and advanced backend logic."}
                 />
                 </Reveal>

                    <Reveal>
                        <FeaturedProject />
                    </Reveal>

                    <Reveal>
                        <section>
                        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white  w-fit">
                            Experience
                        </h2>
                        <ExperiencesCard
                            title={'IT Internship'}
                            name={'Aceitera el Real'}
                            time={'March 2025 - September 2025'}
                            description={'Responsible for hardware maintenance, device management, and network infrastructure.'}
                        />
                    </section>
                    </Reveal>

                   <Reveal>
                       <section>
                       <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white  w-fit">
                           Featured Project
                       </h2>
                       <ExperiencesCard
                           title={'ArielCalendar - Management System'}
                           name={'Freelance Project'}
                           time={'Jan 2026 - Feb 2026 [cite: 23]'}
                           description={'Fullstack architecture using Next.js 16, TypeScript, and MongoDB. Features Server Actions for CRUD and a secure Admin Dashboard.'}
                       />
                   </section>
                   </Reveal>

                    <Reveal>
                        <section className="w-full overflow-hidden">
                        <ProjectCard username='SmatamorosN04' />
                    </section>
                    </Reveal>


                </main>

                <Reveal>
                    <footer className='mt-16 pb-10'>
                    <Education/>
                    <PersonalSkills/>
                    <SkillCards Skills={["Next.js", "TypeScript", "Node.js", "MongoDB", "Python", "Java Spring", "Tailwind CSS", "JavaScript" , "CSS" , "PostgresSQL" ]} />
                </footer>
                </Reveal>


            </div>
        </div>
    )
}
export default Home