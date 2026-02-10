import ProfileImage from "../Components/ProfileImage/ProfileImage.tsx";
import ProfileInfo from "../Components/ProfileInfo/ProfileInfo.tsx";
import yo from '../assets/yo.png'
import AboutMeInfo from "../Components/AboutMeInfo/AboutMeinfo.tsx";
import ExperiencesCard from "../Components/ExperiencesCard/ExperiencesCard.tsx";
import ProjectCard from "../Components/ProjectsCard/ProjectCard.tsx";
import SkillCards from "../Components/HabilitiesCard/SkillCards.tsx";




function Home() {

    return (
        <>

        <div className='bg-gray-100 w-175 mx-auto dark:bg-gray-800'>
        <header className='w-full h-50 mt-7.5'>
            <section className='w-175 h-full mx-auto flex flex-row justify-between items-start'>
                <ProfileInfo name={'Sergio Matamoros'} abilities={'Junior FullStack developer'} location={'Managua, Nicaragua'}></ProfileInfo>
                <section className='w-50 h-50'>
                    <ProfileImage resource={yo}></ProfileImage>
                </section>
            </section>
        </header>
        <main className='w-full mx-auto mt-12.5'>
            <AboutMeInfo title={'About Me'} text={'My name is Sergio Armando Matamoros Nuñez' +
                ', and I a' +
                'm currently a Computer Engineering student. I have a strong passion for software development, artificial intelligence' +
                '. What excites me the most about technology is its potential to transform the way we learn' +
                ', communicate, and solve real-world problems.'}></AboutMeInfo>

            <ExperiencesCard title={'Experiences'} name={'Aceitera el Real'} mail={'@none'}
                             time={'march 2025 - september 2025'}
                             description={'I completed an internship in the IT Department as part of the technical support team, respon' +
                                 'sible for fixing hardware problems on various technological equipment, managing devices assigned to employees, and network management.'
                             }
            ></ExperiencesCard>
            <ProjectCard username='SmatamorosN04'></ProjectCard>
        </main>
        <footer className='w-full mx-auto mt-12.5'>
            <SkillCards Skills={["HTML5", 'CSS3', 'JAVASCRIPT' , 'SQL' , 'GIT' , 'VITE.JS' , 'NODE.JS' , 'PHP' , 'TYPESCRIPT' , 'REACT.JS' , 'TAILWINDCSS']}></SkillCards>
        </footer>
        </div>
        </>
    )

}
export default Home