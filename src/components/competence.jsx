import Text from "./text";
import Title from "./title";

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
                            <img src="src/components/icons/html-5.svg" alt="" />
                            <div className="text-box">
                                <Text>HTML</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/css-3.svg" alt="Css" />
                            <div className="text-box">
                                <Text>CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/javascript.svg" alt="Javascript" />
                            <div className="text-box">
                                <Text>JavaScript</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/react.svg" alt="React js" />
                            <div className="text-box">
                                <Text>React Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/vuejs.svg" alt="Vue js" />
                            <div className="text-box">
                                <Text>Vue Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/sass.svg" alt="Sass" />
                            <div className="text-box">
                                <Text>Sass</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/nodejs.svg" alt="Node js" />
                            <div className="text-box">
                                <Text>Node Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/express.svg" alt="Express JS" />
                            <div className="text-box">
                                <Text>Express JS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/tailwind.svg" alt="Tailwind css" />
                            <div className="text-box">
                                <Text>Tailwind CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/asana.svg" alt="Asana" />
                            <div className="text-box">
                                <Text>Asana</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/vscode.svg" alt="VS Code" />
                            <div className="text-box">
                                <Text>VS Code</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/figma.svg" alt="Figma" />
                            <div className="text-box">
                                <Text>Figma</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/wordpress.svg" alt="Wordpress" />
                            <div className="text-box">
                                <Text>Wordpress</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/git.svg" alt="Git" />
                            <div className="text-box">
                                <Text>Git</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src/components/icons/github.svg" alt="GitHub" />
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