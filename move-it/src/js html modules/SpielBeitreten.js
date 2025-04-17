import "../css modules/InputFelder.css"

function SpielBeitreten() {
    return (
        <div>
            <form action="/LINK ZUR LOBBY">
                <label for="Username">Username:</label> 
                <br></br>
                <input type="text" id="Username" name="Username"></input>
                <br></br>
                <br></br>
                <label for="Passwort">Passwort:</label> 
                <br></br>
                <input type="text" id="Passwort" name="Passwort"></input>
                <br></br>
                <br></br>
                <input type="submit" value="Spiel Beitreten"></input>
            </form>
        </div>
    )
}

export default SpielBeitreten;