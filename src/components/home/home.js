export default function MainBody() {
    return (
        <div id="home" className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 " 
        >
            <div id="stars">
            </div>
            <div className="text-center container">
                <h1 className="display-1">Ismael Farinango</h1>
                <div className="Typist lead typist">
                    Apasionado por la tecnologia y la programacion.
                </div>
                <div className="p-5">
                    <a className="p-2" target="_blank" rel="noopener noreferrer" href="https://github.com/ismaelfari1996" aria-label="My github">
                        <i className="fab fa-github  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/abel.farianago" aria-label="My facebook">
                        <i className="fab fa-facebook  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/ismaelfari96/" aria-label="My instagram">
                        <i className="fab fa-instagram  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/abel-farinango-40021321a/" aria-label="My linkedin">
                        <i className="fab fa-linkedin  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/hashirshoaeb/" aria-label="My twitter">
                        <i className="fab fa-twitter  fa-3x social-icons"></i>
                    </a>
                </div>
                <a className="btn btn-outline-light btn-lg " href="#about" role="button" aria-label="Learn more about me">
                    Mas sobre mi
                </a>
            </div>
        </div>
    );
}