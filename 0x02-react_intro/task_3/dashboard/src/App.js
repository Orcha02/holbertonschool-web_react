import "./App.css";
import logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <>
      <header className="App-header">
        <img src={logo} />
        <h1>School dashboard</h1>
      </header>
      <body className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" />
        <button>OK</button>
      </body>
      <footer className="App-footer">
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </footer>
    </>
  );
}

export default App;