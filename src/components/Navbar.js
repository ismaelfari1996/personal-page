export default function Navigation(props) {
    window.onscroll = function() {
        let y = window.scrollY;
        if(y>500){
            document.getElementById("navbar").classList.remove("bg-transparent");
            document.getElementById("navbar").classList.add("bg-light");
        }else{
            document.getElementById("navbar").classList.remove("bg-light");
            document.getElementById("navbar").classList.add("bg-transparent");
        }
      };
     
    return (
        <nav id="navbar" className="navbar navbar-expand-lg navbar-light fixed-top bg-transparent">
            <div className="container-fluid">
                <a className="brand navbar-brand" href="#"> / Ismael */ </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {
                            props.NavItems.map((item, index) => {
                                return (
                                    <a className={item.active?"nav-link lead active":"nav-link lead"}
                                     aria-current={item.ariacurrent?"page":""}
                                     rel="noopener noreferrer"
                                     target={item.target}
                                     href={item.url}
                                     key={index}>{item.name}</a>
                                );
                            }
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}