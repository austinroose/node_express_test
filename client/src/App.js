import logo from './logo.svg';
import './App.css';
import ToDoList from './containers/ToDoList';

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
          <ToDoList />
        </a>
      </header>
    </div>
  );
}

export default App;
