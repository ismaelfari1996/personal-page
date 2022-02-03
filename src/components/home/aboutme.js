import ProfilePicture from "../../assets/img/profilePicture.jpg";
export default function AboutMe() {
    return (
        <div className="m-0 p-2 " style={{"background":"#f2f2f2"}}>
        <div className="container container-fluid">
            <div className="row">
                <div className="col-5 d-none d-lg-block align-self-center p-5">
                    <img src={ProfilePicture} alt="Abel Farinango"
                        className="border border-secondary rounded-circle"
                        width="375"
                        height="375" />
                </div>
                <div className="col-lg-7 p-5">
                    <h2 className="display-4 mb-5 text-center">About Me</h2>
                    <p className="lead text-center">
                        Mi nombre es Abel Farinango, me gradue en el año 2021 de la Universidad
                        Politécnica Salesiana como Ingeniero de Sistemas con mención en Informática 
                        para la Gestión. 
                    </p>
                    <p className="lead text-center">
                        <button className="btn btn-outline-dark btn-lg " href="#aboutme" role="button" aria-label="Learn more about me">
                        Learn more about me
                        </button>
                    </p>
                </div>

            </div>
        </div>
        </div>
    );

}