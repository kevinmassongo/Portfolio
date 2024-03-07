import { NavLink } from "react-router-dom";
import Title from "./title";
import ReseauSociaux from "./reseauxSociaux";
import Text from "./text";

function Oeuvre() {
    return (
        <>
            <div className="oeuvre">
                <Title style="title-oeuvre"><span>" </span>voulez-vous voir mes projets récents<span> "</span></Title>
                <NavLink to="/projet">
                    <button className="button" data-text="Awesome">
                        <span className="actual-text">&nbsp;Cliquez ici&nbsp;</span>
                        <span aria-hidden="true" className="hover-text">&nbsp;Cliquez&nbsp;ici&nbsp;</span>
                    </button>
                </NavLink>
                <div className="logo-oeurvre">
                    <Text style="text-oeuvre">Suivez-moi sur</Text>
                    <ReseauSociaux />
                </div>
            </div>
        </>
    )
}
export default Oeuvre;