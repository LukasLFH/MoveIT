import "../css modules/ControlButtons.css"
import SchrittNachVorne from "../logic modules/SchrittNachVorne";
import SchrittZurueck from "../logic modules/SchrittZurueck";

function MultiplayerSelect() {
    return (
        //Zum Auswählen ob man eine Lobby erstellen oder beitreten möchte
        <div id="MultiplayerSelect" className="ControlButtons Seite" style={{ display: "none" }}>

            <button
                PrevPageId="Startseite"
                className="ZurueckButton"
                onClick={SchrittZurueck}>
                Zurück
            </button>

            <button
                NextPageId="SpielBeitreten"
                className="MultiplayerButton"
                onClick={SchrittNachVorne}>
                Spiel beitreten
            </button>

            <button
                NextPageId="SpielErstellen"
                className="MultiplayerButton"
                onClick={SchrittNachVorne}>
                Spiel erstellen
            </button>

        </div>
    )
}

export default MultiplayerSelect;