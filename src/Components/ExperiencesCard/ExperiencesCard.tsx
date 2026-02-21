type ExperiencesProps = {
    title: string;
    name: string;
    mail?: string;
    description: string;
    time: string;
}

const ExperiencesCard: React.FC<ExperiencesProps> = ({ title, name, mail, description, time }) => {
    return (
        <section className='mt-10 w-full'>
            <h1 className='text-2xl md:text-3xl font-bold dark:text-white mb-5'>
                {title}
            </h1>

            <article className='w-full border border-gray-800 p-5 rounded-lg bg-white dark:bg-black dark:border-gray-200 shadow-sm'>
                <div className='flex flex-col sm:flex-row justify-between items-start gap-2 mb-4'>
                    <div className="flex flex-col">
                        <h2 className='text-xl md:text-2xl font-bold text-black dark:text-white leading-tight'>
                            {name}
                        </h2>
                        {mail && (
                            <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                                {mail}
                            </p>
                        )}
                    </div>

                    <p className='text-sm md:text-base font-medium text-gray-500 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full'>
                        {time}
                    </p>
                </div>

                <p className='text-base md:text-lg font-normal text-gray-600 dark:text-gray-200 leading-relaxed'>
                    {description}
                </p>
            </article>
        </section>
    )
}

export default ExperiencesCard;