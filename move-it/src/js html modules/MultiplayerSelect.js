import "../css modules/ControlButtons.css"
import SchrittNachVorne from "../logic modules/SchrittNachVorne";

function MultiplayerSelect() {
    return (
        //Zum Auswählen ob man eine Lobby erstellen oder beitreten möchte
        <div id="MultiplayerSelect" className="ControlButtons Seite" style={{ display: "none" }}>

            <button
                className="ZurueckButton">
                Zurück
            </button>

            <button
                className="MultiplayerButton"
                onClick={SchrittNachVorne}>
                Spiel beitreten
            </button>

            <button
                className="MultiplayerButton"
                onClick={SchrittNachVorne}>
                Spiel erstellen
            </button>
            
        </div>
    )
}

export default MultiplayerSelect;