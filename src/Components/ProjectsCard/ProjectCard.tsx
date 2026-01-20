import * as React from "react";
import {useEffect, useState} from "react";

interface RepoProps {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    created_at: string;
    updated_at: string
}

interface RepolistProps {
    username: string;
}


const ProjectCard: React.FC<RepolistProps> = ({ username }) => {
    const [repos, setRepos] = useState<RepoProps[]>([]);
    const [sortType, setSortType] = useState<'recent' | 'oldest' | 'az' | 'za'>('recent');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const reposPerPage = 4;

    useEffect(() => {
        const fetchRepos = async () => {
            try{
                const response= await fetch(`https://api.github.com/users/${username}/repos`)
                const data: RepoProps[] = await  response.json();
                setRepos(data);
            } catch (error){
                console.error('error fetching repos', error);
            } finally {
                {
                    setLoading(false);
                }
            }
        }
        fetchRepos();

    }, [username]);

    const sortedRepos = [...repos].sort((a,b) => {
       if (sortType ==='recent') {
           return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
    }
       if (sortType === 'oldest'){
           return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
       }
       return 0;

    });

    const indexofLastrepo = currentPage * reposPerPage;
    const indexOffFirstRepo = indexofLastrepo - reposPerPage;
    const currentRepos = sortedRepos.slice(indexOffFirstRepo, indexofLastrepo);

    const totalPages = Math.ceil(sortedRepos.length / reposPerPage);

    if (loading) return <p className='text-3xl font-bold'> Cargando Repos</p>;

    return (
        <section >

            <section className='flex flex-row w-full justify-between'>
                <h1 className='text-3xl font-bold mt-7 mb-5 dark:text-white'> Projects</h1>
                <div className='flex flex-row items-center'>
                    <button className=' bg-white dark:bg-black dark:text-white rounded-lg mr-3 p-2 text-center cursor-pointer focus:bg-gray-400' onClick={() => setSortType('recent')}> Newest</button>
                    <button className='bg-white dark:bg-black  dark:text-white rounded-lg mr-3 p-2 text-center cursor-pointer focus:bg-gray-400' onClick={() => setSortType('oldest')}> Oldest</button>

                </div>

            </section>
            <section className='grid  sm:grid-cols-2 gap-4'>

                {currentRepos.map((repo) => (
                    <article key={repo.id} className='w-full h-112.5 bg-white p-5 rounded-lg cursor-pointer dark:bg-black'>
                        <img
                            src='https://i.pinimg.com/1200x/85/dd/b3/85ddb3e7732c3ea6bf1a21dda3d87cbd.jpg'
                            alt={repo.name}
                            className='w-full h-45 object-cover rounded-lg'
                        />
                        <h3 className='font-bold mt-4 text-lg dark:text-white'>
                            {repo.name.replaceAll('_', " ")}
                        </h3>
                        <p className='text-sm text-gray-600 mt-3 dark:text-gray-100'>{repo.description ?? "description not exist"}</p>
                        <div className='w-[90%] h-auto mt-3 flex flex-wrap justify-start content-start align-top'>
                    <span className=' w-auto h-auto text-center text-white bg-sky-700 mt-0.75 mr-0.75 ml-0.75 p-1.25 rounded-lg'>
                        {repo.language ?? "Technologies not identified"}
                    </span>
                        </div>
                    </article>
                ))
                }
            </section>

            <div className='flex justify-center gap-2 mt-6'>
                <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev -1)}
                className='px-3 py-1 bg-white dark:bg-black dark:text-white rounded disabled:opacity-50 cursor-pointer active:bg-gray-600 active:text-white'
                >previous</button>
                {Array.from({ length: totalPages}, (_, i) => (
                    <button
                    key={i + 1}
                    onClick={() => setCurrentPage((i + 1))}
                    className={`px-3 py-1 rounded  cursor-pointer  ${currentPage === i + 1 ? 'bg-blue-500 text-white border border-gray-800' : 'bg-white'} `}
                    >{i + 1}</button>
                ))}

                <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className='px-3 py-1 bg-white rounded disabled:opacity-50 cursor-pointer  dark:bg-black dark:text-white active:bg-gray-600 active:text-white'
                >next</button>
            </div>

        </section>

    )
}

export default ProjectCard




