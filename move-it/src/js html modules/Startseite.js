import "../css modules/ControlButtons.css"
import SchrittNachVorne from "../logic modules/SchrittNachVorne.js";

function Startseite() {
    return (
        // Das ist die erste Seite, der tatsächliche Startscreen
        <div id="Startseite" className="ControlButtons Seite" style={{ display: "block" }}>

            <button
                NextPageId="MultiplayerSelect"
                className="StartseiteButton"
                onClick={SchrittNachVorne}>
                Spielen
            </button>

            <button
                NextPageId="Optionen"
                className="StartseiteButton"
                onClick={SchrittNachVorne}
                disabled>
                    {/* Muss später noch eingefügt werden */}
                Optionen
            </button>

            <button
                NextPageId="Regeln"
                className="StartseiteButton"
                onClick={SchrittNachVorne}
                disabled>
                    {/* Warten bis Regeln als Text da sind und dann muss Seite dafür erstellt werden */}
                Regeln
            </button>

        </div>
    )
}

export default Startseite;