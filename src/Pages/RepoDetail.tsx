import { useParams } from "react-router";
import {useEffect, useState} from "react";

interface Repo {
    id: number;
    name: string;
    description: string;
    created_at: string;
    stargazers_count: number;
   language: string;
    html_url: string;
}



function RepoDetail() {
    const {id} = useParams();
    const [repo, setRepo] = useState<Repo | null>(null);

    useEffect(() => {
        fetch(`https://api.github.com/repos/SmatamorosN04/${id}`)
            .then((res) => res.json())
            .then((data) => setRepo(data));
    }, [id]);

    if (!repo) return  <p> Cargando...</p>


    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold">{repo.name}</h2>
            <p className="mt-2">{repo.description || "Sin descripción"}</p>
            <p className="mt-2">Creado en: {new Date(repo.created_at).toLocaleDateString()}</p>
            <p className="mt-2">⭐ {repo.stargazers_count} estrellas</p>
            <p className="mt-2">Lenguaje principal: {repo.language}</p>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline"> Ver en GitHub </a>
        </div>
    )
}

export default RepoDetail