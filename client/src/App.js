import logo from './logo.svg';
import './App.css';
import LilyPadContainer from './containers/LilyPadContainer';
import "./App.css";
import LilyPad from "./containers/LilyPadContainer";

function App() {
  return (
    <div className="App">
      <LilyPadContainer />
    </div>

    <section>
      <LilyPad />
    </section>
  );
}

export default App;
