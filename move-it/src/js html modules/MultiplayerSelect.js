import "../css modules/ControlButtons.css"

function MultiplayerSelect(){
    return(
        //Zum Auswählen ob man eine Lobby erstellen oder beitreten möchte
        <div className="ControlButtons">
            <button className="ZurueckButton">Zurück</button>
            <button className="MultiplayerButton">Spiel beitreten</button>
            <button className="MultiplayerButton">Spiel erstellen</button>
        </div>
    )
}

export default MultiplayerSelect;