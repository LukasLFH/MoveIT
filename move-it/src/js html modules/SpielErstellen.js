import "../css modules/InputFelder.css"

function SpielErstellen() {
    return (
        <div className="InputForm">
            <button className="ZurueckButton">Zurück</button>
            <form action="/LINK ZUR LOBBY">
                {/* Username eingeben */}
                <label for="Username">Username:</label>
                <br></br>
                <input type="text" id="Username" name="Username"></input>
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