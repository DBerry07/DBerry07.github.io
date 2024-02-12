import logo from './logo.svg';
import './App.css';
import { titles } from './content'
import { text } from './content'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      { entry(0) }
      { entry(1) }
    </div>
  );
}

function entry(index) {
  return(
    <div>
      <h2>{ titles[index] }</h2>
      <div>
          {
            text[index].map( (item) => (
              <p> { item }</p>
            ) )
          }
      </div>
    </div>
  )
}


export default App;
