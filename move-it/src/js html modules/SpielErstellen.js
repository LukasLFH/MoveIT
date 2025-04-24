import "../css modules/InputFelder.css"
import SchrittZurueck from "../logic modules/SchrittZurueck";

function SpielErstellen() {
    return (
        <div id="SpielErstellen" className="InputForm Seite" style={{ display: "none" }}>

            <button
                PrevPageId="MultiplayerSelect"
                className="ZurueckButton"
                onClick={SchrittZurueck}>
                Zurück
            </button>

            <form action="/LINK ZUR LOBBY">

                {/* Username eingeben */}
                <label for="Nutzername">Username:</label>
                <br></br>
                <input type="text" id="Nutzername" name="Nutzername"></input>
                <br></br>
                <br></br>

                {/* Max Anzahl von Spieler auswählern
                    - muss später noch implementiert werden */}
                <label for="MaxNumber">Max. Anzahl von Spielern</label>
                <br></br>
                <select id="MaxNumber" name="MaxNumber">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                </select>
                <br></br>
                <br></br>

                {/* Lobby erstellen */}
                <input type="submit" value="Spiel erstellen"></input>
            </form>
        </div>
    )
}

export default SpielErstellen;