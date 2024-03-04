import Name from "./name";
import ReseauSociaux from "./reseauxSociaux";
import SousTitle from "./sousTitle";
import Text from "./text";
import Title from "./title";

function Apropos() {
    return (
        <>
            <div className="apropos">
                <div className="container">
                    <Title style="apropos-title"><span>À </span>PROPOS DE MOI</Title>
                    <div className="box">
                        <SousTitle>Suivez-moi sur</SousTitle>
                        <ReseauSociaux />
                    </div>
                </div>
                <div className="apropos-box">
                    <div className="container">
                        <SousTitle style="apropos-name">Salut 🙌, je m'appelle</SousTitle>
                        <Name>Kevin Massongo</Name>
                    </div>
                    <Text style="apropos-text">Je suis un concepteur de sites web qualifié avec plus d'une année d'expérience dans l'industrie. Ma passion est de créer des sites web, des applications web et mobiles. Tout au long de ma carrière, j'ai développé une compréhension profonde des principes de l'expérience utilisateur (UX) et de l'interface utilisateur (UI). Je vis à Kinshasa</Text>
                </div>
            </div>
        </>
    )
}
export default Apropos;