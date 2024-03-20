import Picture from "./picture";
import firstProject from "./images/first_project.png"
import Title from "./title";

function FirstProject() {
    return (
        <>
        <Title style="title-project">Projets récents</Title>
            <div class="firstProject">
                <Picture src={firstProject} alt="" />
                <div class="paragraph-project">
                    <p class="paragraph-project-one"> "Une application permettant de voir toutes les informations d'un pays de votre choix"</p>

                    <li><a href="https://kevinmassongo.github.io/CountryAPI_App/" target="_blank">Voir le site</a></li>
                </div>
            </div>
        </>
    )
}

export default FirstProject;