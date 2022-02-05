export default function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top bg-transparent">
            <div className="container-fluid">
                <a className="brand navbar-brand" href="#"> / Ismael */ </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link lead active" aria-current="page" href="#about">Acerca</a>
                        <a className="nav-link lead nav-link" href="#projects">Proyectos</a>
                        <a className="nav-link lead" href="#skills">Habilidades</a>
                        <a className="nav-link lead" rel="noopener noreferrer" target={"_blank"} href="https://drive.google.com/file/d/1sh69l-dXehLJ7G-j92ymNpNjMbpcmR-a/view?usp=sharing">Curriculum</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}