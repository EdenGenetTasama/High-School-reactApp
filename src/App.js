import logo from "./logo.svg";
import "./App.css";
import Router from './Components/Router'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/Students">Students</Link>
        <Link to="/Teacher">Teacher</Link>
        <Link to="/Parents">Parents</Link>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
