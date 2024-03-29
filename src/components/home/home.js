import React from "react";
import SocialNetwork from "../../configfiles/social-network.json";
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
                    {
                        SocialNetwork.map((social, index) => {
                            return (
                            <a className="p-2" target="_blank" rel="noopener noreferrer" href={social.url} aria-label={"My "+social.name}>
                                <i className={social.icon}></i>
                            </a>    
                            );
                        })

                    }

                </div>
                <a className="btn btn-outline-light btn-lg " href="#about" role="button" aria-label="Learn more about me">
                    Mas sobre mi
                </a>
            </div>
        </div>
    );
}