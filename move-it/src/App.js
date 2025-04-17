import './css modules/App.css';
// import Titelbild from "./media/AufAchseTitlescreen.png"
// import Startseite from './js html modules/Startseite.js';
// import MultiplayerSelect from './js html modules/MultiplayerSelect';
// import SpielBeitreten from './js html modules/SpielBeitreten.js';
import SpielErstellen from './js html modules/SpielErstellen';

function App() {
  return (
    <div className="App">
      {/* <img src={Titelbild} alt="Titelbild" className="Titelbild"></img> */}
      {/* <Startseite></Startseite> */}
      {/* <MultiplayerSelect></MultiplayerSelect> */}
      {/* <SpielBeitreten></SpielBeitreten> */}
      <SpielErstellen></SpielErstellen>
    </div>
  );
}

export default App;
