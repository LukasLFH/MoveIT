import "../css modules/ControlButtons.css"

function MultiplayerSelect(){
    return(
        <div className="ControlButtons">
            <button className="MultiplayerButton">Spiel beitreten</button>
            <button className="MultiplayerButton">Spiel erstellen</button>
        </div>
    )
}

export default MultiplayerSelect;