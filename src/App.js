import './App.css';
import { titles } from './content'
import { text } from './content'

function App() {
  return (
    <div className="App">
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
