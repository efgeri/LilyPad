import logo from "./logo.svg";
import "./App.css";
import LilyPad from "./containers/LilyPadContainer";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1>WELCOME TO LILYPAD 12345678</h1>
    //   </header>
    // </div>
    <section>
      <LilyPad />
    </section>
  );
}

export default App;
