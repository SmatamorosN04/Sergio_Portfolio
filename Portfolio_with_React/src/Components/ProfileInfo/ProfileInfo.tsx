import * as React from "react";
import RedirectButton from "../RedirectButton/RedirectButton.tsx";
type infoProps = {
    name: string;
    location: string;
    abilities: string;
}

const ProfileInfo: React.FC<infoProps> = ({name, location, abilities}) => {
    return(
    <section className='w-150 h-full flex flex-col justify-around'>
        <h1 className='text-4xl leading-6 text-black font-bold mb-3'>{name}</h1>
        <h2 className='text-2xl leading-4 text-blac font-medium mb-3'>{abilities}</h2>
        <p className='text-gray-600 text-xl font-light'>{location}</p>
        <section className='flex flex-row'>
            <RedirectButton name={'GitHub'} redirect={'https://github.com/SmatamorosN04'}></RedirectButton>
            <RedirectButton name={'LinkedIn'} redirect={'https://www.linkedin.com/in/sergio-matamoros-6a75a026a/'}></RedirectButton>
            <RedirectButton name={'Email'} redirect={'mail.google.com/mail/u/0/?utm_source=copilot.com'}></RedirectButton>
        </section>
    </section>
    )
}
 export default ProfileInfo
