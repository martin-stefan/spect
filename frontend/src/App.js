import logo from './logo.svg';
import './App.css';

function App() {

  callBackend() {
    fetch("http://localhost:9000/index")
      .then(res => res.text())
      .then(res => th)
  }

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
