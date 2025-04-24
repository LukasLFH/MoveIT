function SchrittNachVorne(event) {
    // finde den gedrückten Button & dadurch die aktuelle Seite
    // sowie die ID für die nächste Seite
    const Button = event.target
    const AktuelleSeite = Button.closest(".Seite")
    const NextPageId = Button.getAttribute("NextPageId")

    // Wenn es eine Aktuelle Seite && eine ID für die nächste gibt, blende die aktuelle aus
    if (AktuelleSeite && NextPageId) {
        AktuelleSeite.style.display = "none"
        const NaechsteSeite = document.getElementById(NextPageId)

        //wenn es eine nächste Seite gibt blende sie ein
        if (NaechsteSeite && NaechsteSeite.classList.contains("Seite")) {
            NaechsteSeite.style.display = "block"
        }
    }
}

export default SchrittNachVorne;