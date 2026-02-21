import * as React from "react";
import RedirectButton from "../RedirectButton/RedirectButton.tsx";

type infoProps = {
    name: string;
    location: string;
    abilities: string;
}

const ProfileInfo: React.FC<infoProps> = ({ name, location, abilities }) => {
    return (
        <section className='w-full flex flex-col items-center md:items-start space-y-3 dark:text-white'>

            <h1 className='text-3xl md:text-5xl text-black font-bold dark:text-white text-center md:text-left'>
                {name}
            </h1>

            <h2 className='text-xl md:text-2xl text-black dark:text-white font-medium text-center md:text-left'>
                {abilities}
            </h2>

            <p className='text-gray-600 text-lg md:text-xl font-light dark:text-gray-100 text-center md:text-left'>
                {location}
            </p>

            <section className='flex flex-wrap justify-center md:justify-start gap-3 pt-2'>
                <RedirectButton
                    name={'GitHub'}
                    redirect={'https://github.com/SmatamorosN04'}
                />
                <RedirectButton
                    name={'LinkedIn'}
                    redirect={'https://www.linkedin.com/in/sergio-matamoros-6a75a026a/'}
                />
                <RedirectButton
                    name={'Email'}
                    redirect={'mailto:smatamorosn12@gmail.com'}
                />
            </section>
        </section>
    );
}

export default ProfileInfo;