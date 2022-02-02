export default function Skill() {
    return (
        <div className="bg-white m-0 jumbotron jumbotron-fluid">
            <div className="p-5 container">
                <h2 className="display-4 pb-5 text-center">Skills</h2>
                <nav className="nav nav-tabs" role="tablist">
                    <a className="skills-tab lead nav-item nav-link active" role="tab" data-toggle="tab" href="#html">
                        Habilidad tecnica
                    </a>
                    <a className="skills-tab lead nav-item nav-link " role="tab" data-toggle="tab" href="#css">
                        Habilidades sociales
                    </a>
                </nav>
                <div className="tab-content">
                    <div className="tab-pane active" id="html">
                        <div className="fade tab-pane active show">
                            <div className="pt-3 px-1 row">
                                <div className="col-md-6 col-12">
                                    <div style={{ width: "95%" }}>
                                        <p className="lead mb-1 mt-2">
                                            JavaScript
                                        </p>
                                        <div className=" progress-bar-animation progress">
                                            <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" role="progressbar" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: "95%" }}>
                                        <p className="lead mb-1 mt-2">
                                            Java
                                        </p>
                                        <div className=" progress-bar-animation progress">
                                            <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6 col-12">
                                    <div style={{ width: "95%" }}>
                                        <p className="lead mb-1 mt-2">
                                            Organizacion
                                        </p>
                                        <div className=" progress-bar-animation progress">
                                            <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="90" role="progressbar" style={{ width: "90%" }}></div>
                                        </div>
                                    </div>
                                    <div style={{ width: "95%" }}>
                                        <p className="lead mb-1 mt-2">
                                            Trabajo en equipo
                                        </p>
                                        <div className=" progress-bar-animation progress">
                                            <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow="70" role="progressbar" style={{ width: "70%" }}></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}