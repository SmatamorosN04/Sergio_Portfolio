import * as React from "react";
import {useEffect, useState} from "react";
import {Code2, ExternalLink, Github} from "lucide-react";

const SkeletonCard = () => (
    <div className='flex flex-col w-full min-h-112.5 bg-white p-5 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-black animate-pulse'>
        <div className='w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg'></div>
        <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mt-4'></div>
        <div className='space-y-2 mt-3'>
            <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
            <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6'></div>
        </div>
        <div className='mt-auto pt-4'>
            <div className='h-6 bg-gray-200 dark:bg-gray-700 rounded w-20'></div>
        </div>
    </div>
);

interface RepoProps {
    topics: string[];
    id: number;
    name: string;
    description: string | null;
    language: string | null;
    languages_url: string;
    languages?: string[];
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
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=created&per_page=10`);

                if (!response.ok) {
                    throw new Error(`GitHub API respondió con status: ${response.status}`);
                }

                const data: RepoProps[] = await response.json();

                if (!Array.isArray(data)) {
                    throw new Error("La respuesta de GitHub no es un array válido.");
                }

                const reposWithTech = await Promise.all(
                    data.map(async (repo) => {
                        try {
                            const langRes = await fetch(repo.languages_url);
                            if (!langRes.ok) return { ...repo, languages: [repo.language || "Misc"] };

                            const langData = await langRes.json();
                            const combined = Array.from(new Set([...Object.keys(langData), ...(repo.topics || [])]));

                            return {
                                ...repo,
                                languages: combined.length > 0 ? combined : [repo.language || "Misc"]
                            };
                        } catch (e) {
                            return { ...repo, languages: [repo.language || "Misc"] };
                        }
                    })
                );

                setRepos(reposWithTech);
            } catch (error) {
                console.error('Error detallado al buscar repos:', error);
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

    return (
        <section className="w-full">
            <header className='flex flex-col sm:flex-row w-full justify-between items-start sm:items-center gap-4 mb-6'>
                <h1 className='text-3xl font-bold dark:text-white'>Projects</h1>
                <div className='flex flex-row gap-2 w-full sm:w-auto'>
                    <button
                        className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${sortType === 'recent' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700'}`}
                        onClick={() => {setSortType('recent'); setCurrentPage(1);}}
                    >
                        Newest
                    </button>
                    <button
                        className={`flex-1 sm:flex-none rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer ${sortType === 'oldest' ? 'bg-blue-600 text-white shadow-md' : 'bg-white dark:bg-black dark:text-white border border-gray-300 dark:border-gray-700'}`}
                        onClick={() => {setSortType('oldest'); setCurrentPage(1);}}
                    >
                        Oldest
                    </button>
                </div>
            </header>

            <section className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                {loading ? (
                    Array.from({ length: 4 }).map((_, i) => <SkeletonCard key={i} />)
                ) : (
                    currentRepos.map((repo) => (
                        <article
                            key={repo.id}
                            className='flex flex-col w-full min-h-[450px] bg-white p-5 rounded-xl shadow-sm border border-gray-200 dark:border-gray-800 dark:bg-black transition-transform hover:scale-[1.01]'
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
                            <div className="mb-6">
                                <div className="flex items-center gap-2 mb-3 text-gray-400">
                                    <Code2 size={14} />
                                    <span className="text-[10px] uppercase font-bold tracking-wider">Tech Stack</span>
                                </div>
                                <div className='flex flex-wrap gap-2'>
                                    {repo.languages?.map((lang) => (
                                        <span
                                            key={lang}
                                            className='px-2 py-1 text-[10px] font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-md'
                                        >
                                        {lang}
                                    </span>
                                    ))}
                                </div>
                            </div>

                            <div className='mt-6 pt-4 border-t border-gray-100 dark:border-gray-800'>
                                <a
                                    href={`https://github.com/${username}/${repo.name}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center gap-2 w-full py-2.5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-lg font-bold text-sm transition-transform active:scale-95 hover:opacity-90"
                                >
                                    <Github size={18} />
                                    View Repository
                                    <ExternalLink size={14} className="opacity-50" />
                                </a>
                            </div>
                        </article>
                    ))
                )}
            </section>

            {!loading && (
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
            )}
        </section>
    );
};

export default ProjectCard;