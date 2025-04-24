import "../css modules/ControlButtons.css"
import SchrittNachVorne from "../logic modules/SchrittNachVorne.js";

function Startseite() {
    return (
        // Das ist die erste Seite, der tatsächliche Startscreen
        <div id="Startseite" className="ControlButtons Seite" style={{ display: "block" }}>

            <button
                id="SpielenButton"
                className="StartseiteButton"
                onClick={SchrittNachVorne}>
                Spielen
            </button>

            <button
                id="OptionenButton"
                className="StartseiteButton"
                onClick={SchrittNachVorne}>
                Optionen
            </button>

            <button
                id="RegelnButton"
                className="StartseiteButton"
                onClick={SchrittNachVorne}>
                Regeln
            </button>

        </div>
    )
}

export default Startseite;