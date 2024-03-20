import Text from "./text";
import Title from "./title";
import html from "./icons/html-5.svg";
import css from "./icons/css-3.svg";
import javascript from "./icons/javascript.svg";
import react from "./icons/react.svg";
import vuejs from "./icons/vuejs.svg";
import sass from "./icons/sass.svg";
import nodejs from "./icons/nodejs.svg";
import express from "./icons/express.svg";
import tailwind from "./icons/tailwind.svg";
import asana from "./icons/asana.svg";
import vscode from "./icons/vscode.svg";
import figma from "./icons/figma.svg";
import wordpress from "./icons/wordpress.svg";
import git from "./icons/git.svg";
import github from "./icons/github.svg";

function Competence() {
    return (
        <>
            <div className="competence">
                <div className="title-box-competence">
                    <Title style="title-competence">TECHNOLOGIES</Title>
                    <Text style="text-competence">Voici quelques technologies avec lesquelles j'ai travaillé récemment</Text>
                </div>
                <div className="technic">
                    <div className="firstContainer">
                        <div className="box">
                            <img src={html} alt="" />
                            <div className="text-box">
                                <Text>HTML</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={css} alt="Css" />
                            <div className="text-box">
                                <Text>CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={javascript} alt="Javascript" />
                            <div className="text-box">
                                <Text>JavaScript</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={react} alt="React js" />
                            <div className="text-box">
                                <Text>React Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={vuejs} alt="Vue js" />
                            <div className="text-box">
                                <Text>Vue Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={sass} alt="Sass" />
                            <div className="text-box">
                                <Text>Sass</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={nodejs} alt="Node js" />
                            <div className="text-box">
                                <Text>Node Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={express} alt="Express JS" />
                            <div className="text-box">
                                <Text>Express JS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={tailwind} alt="Tailwind css" />
                            <div className="text-box">
                                <Text>Tailwind CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={asana} alt="Asana" />
                            <div className="text-box">
                                <Text>Asana</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={vscode} alt="VS Code" />
                            <div className="text-box">
                                <Text>VS Code</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={figma} alt="Figma" />
                            <div className="text-box">
                                <Text>Figma</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={wordpress} alt="Wordpress" />
                            <div className="text-box">
                                <Text>Wordpress</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={git} alt="Git" />
                            <div className="text-box">
                                <Text>Git</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src={github} alt="GitHub" />
                            <div className="text-box">
                                <Text>GitHub</Text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Competence;