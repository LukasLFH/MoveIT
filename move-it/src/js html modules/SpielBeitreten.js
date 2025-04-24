import "../css modules/InputFelder.css"

function SpielBeitreten() {
    return (
        <div id="SpielBeitreten" className="InputForm Seite" style={{ display: "none" }}>
            <button className="ZurueckButton">Zurück</button>
            <form action="/LINK ZUR LOBBY">

                {/* Username eingeben */}
                <label for="Username">Username:</label>
                <br></br>
                <input type="text" id="Username" name="Username"></input>
                <br></br>
                <br></br>

                {/* Passwort eingeben */}
                <label for="Passwort">Passwort:</label>
                <br></br>
                <input type="text" id="Passwort" name="Passwort"></input>
                <br></br>
                <br></br>
                
                {/* Lobby beitreten */}
                <input type="submit" value="Spiel Beitreten"></input>
            </form>
        </div>
    )
}

export default SpielBeitreten;