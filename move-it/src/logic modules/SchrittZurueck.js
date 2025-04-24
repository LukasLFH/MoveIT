function SchrittZurueck(event) {
    // finde den gedrückten Button & dadurch die aktuelle Seite
    // sowie die ID für die vorherige Seite
    const Button = event.target
    const AktuelleSeite = Button.closest(".Seite")
    const PrevPageId = Button.getAttribute("PrevPageId")

    // Wenn es eine Aktuelle Seite && eine ID für die vorherige gibt, blende die aktuelle aus
    if (AktuelleSeite && PrevPageId) {
        AktuelleSeite.style.display = "none"
        const VorherigeSeite = document.getElementById(PrevPageId)

        //wenn es eine vorherige Seite gibt blende sie ein
        if (VorherigeSeite && VorherigeSeite.classList.contains("Seite")) {
            VorherigeSeite.style.display = "block"
        }
    }
}

export default SchrittZurueck;