import * as React from "react";

type aboutProp = {
    title: string;
    text: string;
}

const AboutMeInfo: React.FC<aboutProp> = ({title, text}) => {
    return (
        <section className='w-full flex flex-col text-wrap dark:text-white'>
            <h1 className='text-3xl font-bold mb-3'>{title}</h1>
            <p className='text-lg font-medium text-gray-600 dark:text-gray-300'>{text}</p>
        </section>
    )
}
export default AboutMeInfo