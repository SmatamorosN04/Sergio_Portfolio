import * as React from "react";
import { useEffect, useState } from "react";

interface RepoProps {
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    created_at: string;
    updated_at: string;
}

interface RepolistProps {
    username: string;
}

const ProjectCard: React.FC<RepolistProps> = ({ username }) => {
    const [repos, setRepos] = useState<RepoProps[]>([]);
    const [sortType, setSortType] = useState<'recent' | 'oldest'>('recent');
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const reposPerPage = 4;

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos`);
                const data: RepoProps[] = await response.json();
                setRepos(data);
            } catch (error) {
                console.error('error fetching repos', error);
            } finally {
                setLoading(false);
            }
        };
        fetchRepos();
    }, [username]);

    const sortedRepos = [...repos].sort((a, b) => {
        if (sortType === 'recent') {
            return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
        }
        if (sortType === 'oldest') {
            return new Date(a.created_at).getTime() - new Date(b.created_at).getTime();
        }
        return 0;
    });

    const indexofLastrepo = currentPage * reposPerPage;
    const indexOffFirstRepo = indexofLastrepo - reposPerPage;
    const currentRepos = sortedRepos.slice(indexOffFirstRepo, indexofLastrepo);
    const totalPages = Math.ceil(sortedRepos.length / reposPerPage);

    if (loading) return <p className='text-3xl font-bold dark:text-white'>Loading Repos...</p>;

    return (
        <section className="w-full">
            {/* Responsive Header: Stacks vertically on mobile */}
            <header className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 mb-6'>
                <h1 className='text-3xl font-bold dark:text-white'>Projects</h1>
                <div className='flex flex-row gap-2 w-full sm:w-auto'>
                    <button
                        className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${sortType === 'recent' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700'}`}
                        onClick={() => {setSortType('recent'); setCurrentPage(1);}}
                    >
                        Newest
                    </button>
                    <button
                        className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${sortType === 'oldest' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700'}`}
                        onClick={() => {setSortType('oldest'); setCurrentPage(1);}}
                    >
                        Oldest
                    </button>
                </div>
            </header>

            {/* Responsive Grid: 1 column on mobile, 2 columns on sm: (640px+) */}
            <section className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {currentRepos.map((repo) => (
                    <article
                        key={repo.id}
                        className='flex flex-col w-full min-h-112.5 bg-white p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 dark:bg-black transition-transform hover:scale-[1.01]'
                    >
                        <img
                            src='https://i.pinimg.com/736x/6c/99/6b/6c996bf860ccbd7c0d2511093edee0bf.jpg'
                            alt={repo.name}
                            className='w-full h-48 object-cover rounded-lg'
                        />
                        <h3 className='font-bold mt-4 text-xl dark:text-white'>
                            {repo.name.replaceAll('_', " ")}
                        </h3>
                        <p className='text-sm text-gray-600 mt-2 dark:text-gray-300 grow'>
                            {repo.description ?? "No description available for this repository."}
                        </p>

                        <div className='mt-4 flex flex-wrap gap-2'>
                            <span className='px-3 py-1 text-xs font-semibold text-white bg-sky-700 rounded-md'>
                                {repo.language ?? "Misc"}
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <footer className='flex flex-wrap justify-center items-center gap-2 mt-10'>
                <button
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage((prev) => prev - 1)}
                    className='px-4 py-2 bg-white dark:bg-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-50 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer'
                >
                    Previous
                </button>

                <div className="flex flex-wrap gap-1 justify-center">
                    {Array.from({ length: totalPages }, (_, i) => (
                        <button
                            key={i + 1}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`w-10 h-10 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                                currentPage === i + 1
                                    ? 'bg-blue-600 text-white shadow-md'
                                    : 'bg-white dark:bg-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                </div>

                <button
                    disabled={currentPage === totalPages}
                    onClick={() => setCurrentPage((prev) => prev + 1)}
                    className='px-4 py-2 bg-white dark:bg-black dark:text-white rounded-lg border border-gray-300 dark:border-gray-700 disabled:opacity-50 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-900 cursor-pointer'
                >
                    Next
                </button>
            </footer>
        </section>
    );
};

export default ProjectCard;