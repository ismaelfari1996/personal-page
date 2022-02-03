import axios from "axios";
import { useState, useEffect } from "react";
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
    const data = projects.map((project, index) => {
        console.log(project.name);
    });

    

    return (
        <div className="container" >
            <h2 className="display-4 text-center p-5">Proyectos desarrollados</h2>
            <div className="row">
                {
                    projects.map((project, index) => {
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
                                        <a href={project.clone_url} className="btn btn-outline-secondary mr-3">
                                            <i className="fab fa-github"></i> Clone Repository
                                        </a>
                                        <hr />
                                        <div className="pb-3">
                                            Languages:
                                            <a href="#" className="badge badge-light card-link" _blank>
                                                JavaScript: 100%
                                            </a>
                                            <a href="#" className="badge badge-light card-link">
                                                Java: 10%
                                            </a>
                                        </div>
                                        <p className="card-text">
                                            <a href="https://github.com/hashirshoaeb/home/stargazers" target=" _blank" className="text-dark text-decoration-none">
                                                <span className="text-dark card-link mr-4">
                                                    <i className="fab fa-github"></i> Stars
                                                    <span className="badge badge-dark">571</span>
                                                </span>
                                            </a>
                                            <small className="text-muted">{project.updated_at}</small>
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