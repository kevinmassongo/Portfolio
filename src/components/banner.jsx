import Name from "./name";
import SousTitle from "./sousTitle";
import Text from "./text";
import Links from "./link";
import Picture from "./picture";
import ReseauSociaux from "./reseauxSociaux";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <SousTitle>Salut 🙌, je m'appelle</SousTitle>
                    <Name>Kevin Massongo</Name>
                    <SousTitle>Et je suis un <span className="text">Développeur FullStack</span></SousTitle>
                    <Text style="text-banner">Je suis un concepteur de sites web avec une expérience depuis plus d'une année, mon expertise est de créer et de concevoir des sites web, frontend design et backend design.</Text>
                    <div className="download">
                        <Links href="https://cvdesignr.com/p/64dcc6db113c4" style="downloadCV">Télecharger CV</Links>
                        <Links href="mailto:kevinmassongo2001@gmail.com" style="callMe">Ecrivez-moi</Links>
                    </div>
                    <div className="reseauxSociaux">
                        <SousTitle>Réseaux sociaux</SousTitle>
                        <ReseauSociaux/>
                    </div>
                    <div className="proverb">
                        <Text>« Choisissez un travail que vous aimez et vous n’aurez jamais à travailler un seul jour de votre vie. » - Confucius</Text>
                    </div>
                </div>
                <div className="picture-container">
                    <Picture src="./src/images/picture.jpg" style="picture" />
                </div>
            </div>
        </>
    )
}
export default Banner;