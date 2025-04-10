import "../css modules/ControlButtons.css"

function Startseite() {
    return (
        // Das ist die erste Seite, der tatsächliche Startscreen
        <div className="ControlButtons">
            <button className="StartseiteButton">Spielen</button>
            <button className="StartseiteButton">Optionen</button>
            <button className="StartseiteButton">Regeln</button>
        </div>
    )
}

export default Startseite;