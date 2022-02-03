export default function MainBody() {
    return (
        <div id="home" className="title bg-transparent bgstyle text-light min-vh-100 d-flex align-content-center align-items-center flex-wrap m-0 " 
        style={{"background": "linear-gradient(136deg, rgb(68, 132, 206), rgb(26, 215, 192), rgb(255, 155, 17), rgb(155, 89, 182), rgb(255, 127, 127), rgb(236, 240, 241)) 0% 0% / 1200% 1200%"}}>
            <div id="stars">
            </div>
            <div className="text-center container">
                <h1 className="display-1">Ismael Farinango</h1>
                <div className="Typist lead typist">
                    Apasionado por la tecnologia y la programacion.
                </div>
                <div className="p-5">
                    <a className="p-2" target="_blank" rel="noopener noreferrer" href="https://github.com/hashirshoaeb" aria-label="My github">
                        <i className="fab fa-github  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/hashirshoaeb" aria-label="My facebook">
                        <i className="fab fa-facebook  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/hashirshoaeb/" aria-label="My instagram">
                        <i className="fab fa-instagram  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/hashirshoaeb/" aria-label="My linkedin">
                        <i className="fab fa-linkedin  fa-3x social-icons"></i>
                    </a>
                    <a className="p-2"  target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/hashirshoaeb/" aria-label="My twitter">
                        <i className="fab fa-twitter  fa-3x social-icons"></i>
                    </a>
                </div>
                <a className="btn btn-outline-light btn-lg " href="#aboutme" role="button" aria-label="Learn more about me">
                    More about me
                </a>
            </div>
        </div>
    );
}