import React from "react";
import ProfilePicture from "../../assets/img/profilePicture.jpg";
export default function AboutMe() {
    return (
        <div id="about" className="m-0 p-2 " style={{"background":"#f2f2f2"}}>
        <div className="container container-fluid">
            <div className="row">
                <div className="col-5 d-none d-lg-block align-self-center p-5">
                    <img src={ProfilePicture} alt="Abel Farinango"
                        className="border border-secondary rounded-circle"
                        width="375"
                        height="375" />
                </div>
                <div className="col-lg-7 p-5">
                    <h2 className="display-4 mb-5 text-center">Acerca de mi</h2>
                    <p className="lead text-center">
                        Me llamo Ismael Farinango, graduado en el año 2021 de la Universidad
                        Politécnica Salesiana como Ingeniero de Sistemas con mención en Informática 
                        para la Gestión. Siempre estoy buscando aprender nuevas tecnologías y 
                        me gusta trabajar en equipo. Me considero una persona responsable, 
                        con una actitud positiva y una gran capacidad de adaptación. Mi objetivo
                        profesional es llegar a ser un gran desarrollador de software.  
                    </p>
                    <p className="lead text-center">
                        <button className="btn btn-outline-dark btn-lg " href="https://drive.google.com/file/d/1sh69l-dXehLJ7G-j92ymNpNjMbpcmR-a/view?usp=sharing" role="button" aria-label="Learn more about me">
                            Curriculum
                        </button>
                    </p>
                </div>

            </div>
        </div>
        </div>
    );

}