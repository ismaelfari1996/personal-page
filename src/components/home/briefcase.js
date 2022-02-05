import axios from "axios";
import { useState, useEffect, useCallback } from "react";
export default function Projects() {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        axios.get("https://api.github.com/users/ismaelfari1996/repos?sort=updated&direction=desc")
            .then(res => {
                setProjects(res.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <div id="projects" className="container" >
            <h2 className="display-4 text-center p-5">Últimos Proyectos</h2>
            <div className="row">
                {
                    projects.slice(0,3).map((project, index) => {
                        return (
                            <div className="col-md-6">
                                <div className="card shadow-lg p-3 mb-5 bg-white rounded card">
                                    <div className="card-body">
                                        <h5 className="card-title"> {project.name}</h5>
                                        <p className="card-text">
                                            {project.description}
                                        </p>
                                        <a href={project.html_url} className="btn btn-outline-secondary mr-3">
                                            <i className="fab fa-github"></i> Repositorio
                                        </a>
                                        <a href={project.svn_url + "/archive/master.zip"} className="btn btn-outline-secondary mr-3">
                                            <i className="fab fa-github"></i> Clonar
                                        </a>
                                        <hr />
                                        
                                            <Languages languages_url={project.languages_url} />
                                        
                                        <p className="card-text">
{/*                                             <a href="https://github.com/hashirshoaeb/home/stargazers" target=" _blank" className="text-dark text-decoration-none">
                                                <span className="text-dark card-link mr-4">
                                                    <i className="fab fa-github"></i> Stars
                                                    <span className="badge badge-dark">571</span>
                                                </span>
                                            </a> */} 
                                            <LastUpdate updated_at={project.pushed_at} />

                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                }

            </div>
        </div>

    );
}

const LastUpdate = ({ updated_at }) => {
    const [updated, setUpdated] = useState("0 mis")
    const handleUpdatetime = useCallback(() => {
        const date = new Date(updated_at);
        const nowdate = new Date();
        const diff = nowdate.getTime() - date.getTime();
        const hours = Math.trunc(diff / 1000 / 60 / 60);

        if (hours < 24) {
            if (hours < 1) return setUpdated("just now");
            let measurement = hours === 1 ? "hour" : "hours";
            return setUpdated(`${hours.toString()} ${measurement} ago`);
        } else {
            const options = { day: "numeric", month: "long", year: "numeric" };
            const time = new Intl.DateTimeFormat("es-EC", options).format(date);
            return setUpdated(`Última actualización ${time}`);
        }
    }, [updated_at]);

    useEffect(() => {
        handleUpdatetime();
    }, [handleUpdatetime]);

    return (
        <small className="text-muted">{updated}</small>
    );
}

const Languages = ({ languages_url }) => {
    const [data, setData] = useState([]);
    const defaultLanguages = useCallback(async() => {
        try {
            const response = await axios.get(languages_url);
            return setData(response.data);
        } catch (err) {
            console.log(err);
        }
    }, [languages_url]);

    useEffect(() => {
        defaultLanguages();
    }, [defaultLanguages]);

    const array = [];
    let total = 0;
    for (let i in data) {
        array.push(i);
        console.log(i)
        total += data[i];
    }
    return (
        <div className="pb-3">
            Lenguajes:{" "}
            {
                array.length ?
                    array.map((item) => (
                        <a className="badge badge-light card-link" href="#" __blank>
                            {item==="Hack"?"Otros":item}:{" "}{Math.trunc(((data[item]/total))*1000)/10} %
                        </a>
                    )) : "No disponible"
            }
        </div>
    );
}

