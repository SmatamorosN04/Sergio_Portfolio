type ExperiencesProps = {
    title: string;
    name: string;
    mail: string;
    description: string;
    time: string;
}

const ExperiencesCard: React.FC<ExperiencesProps> = ({title, name, mail, description, time }) => {

return(
    <section className='mt-10'>
        <h1 className='text-3xl font-bold dark:text-white'> {title}</h1>

        <article className='w-full mt-5  border  border-gray-800 p-4 rounded-lg bg-white h-45 dark:bg-black dark:border-gray-200'>
            <div className='grid grid-cols-5 grid-rows-2 h-20'>
                <h1 className='text-2xl col-start-1 col-end-3
                font-bold text-black dark:text-white'>{name}</h1>
                <p className='text-lg col-start-3 col-end-3 hidden
                font-light text-gray-500 text-start align-middle dark:text-gray-100'>{mail}</p>
                <p className='text-lg font-light col-start-4 col-end-6
                text-gray-500 text-center dark:text-gray-100'>{time}</p>
                <p className='text-lg font-medium row-start-2 col-start-1 col-end-6
                text-gray-600 dark:text-gray-100'>{description}</p>
            </div>
        </article>
    </section>
)
    }
export default ExperiencesCard