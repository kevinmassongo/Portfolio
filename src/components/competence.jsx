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
                            <img src="src\images\html-5.svg" alt="" />
                            <div className="text-box">
                                <Text>HTML</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\css-3.svg" alt="Css" />
                            <div className="text-box">
                                <Text>CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\javascript.svg" alt="Javascript" />
                            <div className="text-box">
                                <Text>JavaScript</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\react.svg" alt="React js" />
                            <div className="text-box">
                                <Text>React Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\vuejs.svg" alt="Vue js" />
                            <div className="text-box">
                                <Text>Vue Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\sass.svg" alt="Sass" />
                            <div className="text-box">
                                <Text>Sass</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\nodejs.svg" alt="Node js" />
                            <div className="text-box">
                                <Text>Node Js</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\wordpress.svg" alt="Wordpress" />
                            <div className="text-box">
                                <Text>Wordpress</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\tailwind.svg" alt="Tailwind css" />
                            <div className="text-box">
                                <Text>Tailwind CSS</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\asana.svg" alt="Asana" />
                            <div className="text-box">
                                <Text>Asana</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\vscode.svg" alt="VS Code" />
                            <div className="text-box">
                                <Text>VS Code</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\figma.svg" alt="Figma" />
                            <div className="text-box">
                                <Text>Figma</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\git.svg" alt="Git" />
                            <div className="text-box">
                                <Text>Git</Text>
                            </div>
                        </div>
                        <div className="box">
                            <img src="src\images\github.svg" alt="GitHub" />
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