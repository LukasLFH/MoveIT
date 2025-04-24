// import Startseite from "./HtmlElemente.js"
// import MultiplayerSelect from "./HtmlElemente.js"
// import SpielBeitreten from "./HtmlElemente.js"
// import SpielErstellen from "./HtmlElemente.js"

function SchrittNachVorne(event) {
    // finde den gedrückten Button & dadurch die aktuelle Seite
    const Button = event.target
    const AktuelleSeite = Button.closest(".Seite")

    // Wenn es eine Aktuelle Seite gibt, blende sie aus
    if (AktuelleSeite) {
        AktuelleSeite.style.display = "none"
        const NaechsteSeite = AktuelleSeite.nextElementSibling

        //wenn es eine nächste Seite gibt blende sie ein
        if (NaechsteSeite && NaechsteSeite.classList.contains("Seite")) {
            NaechsteSeite.style.display = "block"
        }
    }
}

export default SchrittNachVorne;