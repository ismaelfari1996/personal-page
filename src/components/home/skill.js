import React from "react";
import HardHability from "../../configfiles/skill-hard.json";
import SoftHability from "../../configfiles/skill-soft.json";
export default function Skill() {
    function setVisibiltySoftSkill() {
        document.getElementById("tab-pane-skill-hard").className = "tab-pane ";
        document.getElementById("tab-pane-skill-soft").className = "tab-pane active"
        document.getElementById("tab-header-hard-skill").className = "skills-tab lead nav-item nav-link"
        document.getElementById("tab-header-soft-skill").className = "skills-tab lead nav-item nav-link active"

    }
    function setVisibiltyHardSkill() {
        document.getElementById("tab-pane-skill-hard").className = "tab-pane active"
        document.getElementById("tab-pane-skill-soft").className = "tab-pane"
        document.getElementById("tab-header-hard-skill").className = "skills-tab lead nav-item nav-link active"
        document.getElementById("tab-header-soft-skill").className = "skills-tab lead nav-item nav-link"
    }
    return (
        <div id="skills" className="m-0 bg-light" >
            <div className="p-5 container bg-light " >
                <h2 className="display-4 pb-5 text-center">Habilidades</h2>
                <nav className="skill-tab nav nav-tabs" role="tablist">
                    <a id="tab-header-hard-skill" onClick={setVisibiltyHardSkill} className="skills-tab lead nav-item nav-link active" role="tab" data-toggle="tab" href="#skills">
                        Competencias técnicas
                    </a>
                    <a id="tab-header-soft-skill" onClick={setVisibiltySoftSkill} className="skills-tab lead nav-item nav-link " role="tab" data-toggle="tab" href="#skills">
                        Habilidades sociales
                    </a>
                </nav>
                <div className="tab-content">
                    <div id="tab-pane-skill-hard" className="tab-pane active" >
                        <div className="fade tab-pane active show">
                            <div className="pt-3 px-1 row">
                                <div className="col-md-6 col-12">
                                    {HardHability.slice(0, Math.floor(HardHability.length / 2)).map((skill, index) => {
                                        return (

                                            <div style={{ width: "95%" }}>
                                                <p className="lead mb-1 mt-2">
                                                    {skill.skill}
                                                </p>
                                                <div className=" progress-bar-animation progress">
                                                    <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={skill.percent} role="progressbar" style={{ width: skill.percent }}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="col-md-6 col-12">
                                    {HardHability.slice(Math.floor(HardHability.length / 2), HardHability.length).map((skill, index) => {
                                        return (
                                            <div style={{ width: "95%" }}>
                                                <p className="lead mb-1 mt-2">
                                                    {skill.skill}
                                                </p>
                                                <div className=" progress-bar-animation progress">
                                                    <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={skill.percent} role="progressbar" style={{ width: skill.percent }}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                            </div>
                        </div>

                    </div>
                    {/* --------------- */}
                    <div id="tab-pane-skill-soft" className="tab-pane " >
                        <div className="tab-pane fade active show" >
                            <div className="pt-3 px-1 row">
                                <div className="col-md-6 col-12">
                                    {SoftHability.slice(0, Math.floor(SoftHability.length / 2)).map((skill, index) => {
                                        return (
                                            <div style={{ width: "95%" }}>
                                                <p className="lead mb-1 mt-2">
                                                    {skill.skill}
                                                </p>
                                                <div className=" progress-bar-animation progress">
                                                    <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={skill.percent} role="progressbar" style={{ width: skill.percent }}></div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                                <div className="col-md-6 col-12">
                                    {SoftHability.slice(Math.floor(SoftHability.length / 2), SoftHability.length).map((skill, index) => {
                                        return (
                                            <div style={{ width: "95%" }}>
                                                <p className="lead mb-1 mt-2">
                                                    {skill.skill}
                                                </p>
                                                <div className=" progress-bar-animation progress">
                                                    <div className="progress-bar" aria-valuemax="100" aria-valuemin="0" aria-valuenow={skill.percent} role="progressbar" style={{ width: skill.percent }}></div>
                                                </div>
                                            </div>
                                        );
                                    })} 
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* ------------- */}

                </div>



            </div>
        </div>
    );
}

