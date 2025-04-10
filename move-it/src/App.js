import './css modules/App.css';
// import Titelbild from "./media/AufAchseTitlescreen.png"
import Startseite from './js html modules/Startseite.js';
// import MultiplayerSelect from './js html modules/MultiplayerSelect';

function App() {
  return (
    <div className="App">
      {/* <img src={Titelbild} alt="Titelbild" className="Titelbild"></img> */}
      <Startseite></Startseite>
      {/* <MultiplayerSelect></MultiplayerSelect> */}
    </div>
  );
}

export default App;
