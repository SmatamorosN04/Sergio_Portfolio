import { useEffect, useState } from "react";
import * as Icons from "lucide-react";

interface Repo {
    id: number;
    name: string; 
    description: string;
    html_url: string;
    stargazers_count: number;
    forks_count: number;
    language: string;
    visibility: string;
}

export default function Projects(){
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        fetch("https://api.github.com/users/SmatamorosN04/repos?sort=updated&per_page=6")
        .then((res) => {
            if(!res.ok) throw new Error("Error al cargar repositorios");
            return res.json();
        })
        .then((data) => {
            setRepos(data);
            setLoading(false);
        })
        .catch((err) => {
            console.error(err);
            setLoading(false);
        });
    },[]);

    const getLanguageColor = (lang: string) => {
        switch (lang?.toLowerCase()){
            case "typescript": return "bg-[#3178c6]";
            case "javascript": return "bg-[#f1e05a]";
            case "html": return "bg-[#e34c26]";
            case "css": return "bg-[#563d7c]";
            case "python": return "bg-[#3572a5]";
            default: return "bg-slate-400";
        }
    };

    if(loading){
        return(
            <div className="flex flex-col items-center justify-center h-48 w-full gap-2 font-sans text-slate-600">
                <Icons.Loader2 className="animate-spin text-[#0a60ff]" size={24}/>
                <span className="text-xs font-medium">Conecting with repos</span>
            </div>
        );
    }

    return(
        <div className="font-sans text-xs text-slate-950 w-full h-full flex flex-col gap-4 select-text p-1">

            <div className="flex items-center justify-between pb-3 border-b border-slate-300">
                <div className="flex items-center gap-2">
                    <Icons.GitBranchPlus size={18} className="text-slate-800"/>
                    <span className="font-bold text-sm text-slate-900">Sergio Matamoros</span>
                    <span className="bg-slate-200 text-slate-700 font-medium px-2 py-0.5 rounded-full text-xs border border-slate-300">
                        Public Repositories
                    </span>
                </div>
                <a
                href="https://github.com/SmatamorosN04"
                target="_blank"
                rel="noreffer"
                className="text-[#0a60ff] font-semibold hover:underline flex items-center gap-1"
                >
                    View Complete perfil <Icons.ExternalLink size={11}/>
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 overflow-y-auto max-h-95 pr-1">
                {repos.map((repos) => (
                    <div 
                    key={repos.id}
                    className="bg-white border border-slate-300 rounded-sm p-3 flex flex-col justify-between shadow-[1px_1px_2px_rgba(0,0,0,0.05)] hover:border-slate-400 transition-colors"
                    >
                        <div>
                            <div className="flex items-center justify-between gap-2">
                                <div className="flex items-center gap-1.5 min-w-0">
                                    <Icons.FolderGit2 size={14} className="text-slate-500 shrink-0" />
                                    <a
                                    href={repos.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-[#0a60ff] font-bold text-xs hover:underline truncate"
                                    >
                                        {repos.name}
                                    </a>
                                </div>
                                <span className="text-xs text-slate-500 bg-slate-100 border border-slate-200 px-1.5 py-0.2 rounded-full capitalize shrink-0 font-medium">
                                    {repos.visibility || "public"}
                                </span>
                            </div>

                            <p className="text-slate-600 font-medium my-2 text-xs line-clamp-2 leading-normal">
                                {repos.description || "no description provided for this repository"}
                            </p>
                        </div>

                        <div className="flex items-center gap-4 text-xs text-slate-500 font-medium pt-2 mt-auto border-t border-slate-100">
                            {repos.language &&(
                                <div className="flex items-center gap-1.5">
                                    <span className={`w-2.5 h-2.5 rounded-full ${getLanguageColor(repos.language)}`}/>
                                    <span> {repos.language}</span>
                                </div>
                            )}

                            <div className="flex items-center gap-1 hover:text-[#0a60ff] cursor-pointer">
                                <Icons.Star size={12}/>
                                <span>{repos.stargazers_count}</span>
                            </div>

                            <div className="flex items-center gap-1 hover:text-[#0a60ff] cursor-pointer">
                                <Icons.GitFork size={12}/>
                                <span>{repos.forks_count}</span>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}