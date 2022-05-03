import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Initiative from './routes/initiative/Initiative';
import { Nav } from 'react-bootstrap';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
          <Routes>
            <Route path="/" element={
              <>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <Link
                  className="App-link"
                  to="initiative"
                >
                  Go To Initiative
                </Link>
              </>
            }/>
            <Route path="initiative" element={<Initiative/>}/>
          </Routes>
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
