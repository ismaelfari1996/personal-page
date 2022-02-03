export default function Projects() {
    return (
        <div className="container" >
            <h2 className="display-4 text-center p-5">Projects</h2>
            <div className="row">
                <div className="col-md-6">
                    <div className="card shadow-lg p-3 mb-5 bg-white rounded card">
                        <div className="card-body">
                            <h5 className="card-title">Project 1</h5>
                            <p className="card-text">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Quisquam, quidem.
                            </p>
                            <a href="#" className="btn btn-outline-secondary mr-3">
                                <i className="fab fa-github"></i> Repository
                            </a>
                            <a href="#" className="btn btn-outline-secondary mr-3">
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
                            <p class="card-text">
                                <a href="https://github.com/hashirshoaeb/home/stargazers" target=" _blank" class="text-dark text-decoration-none">
                                    <span class="text-dark card-link mr-4">
                                        <i class="fab fa-github"></i> Stars
                                        <span class="badge badge-dark">571</span>
                                    </span>
                                </a>
                                <small class="text-muted">Updated on December 28, 2021</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}