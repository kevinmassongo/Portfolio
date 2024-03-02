import Name from "./name";
import Paragraph from "./paragraph";
import Text from "./text";
import Links from "./link";
import Picture from "./picture";

function Banner() {
    return (
        <>
            <div className="banner">
                <div className="container">
                    <Paragraph>Salut 🙌, je m'appelle</Paragraph>
                    <Name>Kevin Massongo</Name>
                    <Paragraph>Et je suis un <span className="text">Développeur FullStack</span></Paragraph>
                    <Text style="text-banner">Je suis un concepteur de sites web avec une expérience depuis plus d'une année, mon expertise est de créer et de concevoir des sites web, frontend design et backend design.</Text>
                    <div className="download">
                        <Links href="https://cvdesignr.com/p/64dcc6db113c4" style="downloadCV">Télecharger CV</Links>
                        <Links href="mailto:kevinmassongo2001@gmail.com" style="callMe">Ecrivez-moi</Links>
                    </div>
                    <div className="reseauxSociaux">
                        <Paragraph>Réseaux sociaux</Paragraph>
                        <div className="box">
                            <div className="container">
                                <Picture src="./src/images/github.png" style="reseauSocial" />
                                <Picture src="./src/images/linkedin-icon.png" style="reseauSocial" />
                            </div>
                        </div>
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