import Title from "./title";

function Oeuvre() {
    return (
        <>
            <div className="oeuvre">
                <Title style="title-oeuvre"><span>" </span>voulez-vous voir mes projets récents<span> "</span></Title>
                <button className="button" data-text="Awesome">
                    <span className="actual-text">&nbsp;Cliquez ici&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;Cliquez&nbsp;ici&nbsp;</span>
                </button>
            </div>
        </>
    )
}
export default Oeuvre;