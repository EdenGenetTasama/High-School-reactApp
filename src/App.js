import logo from "./logo.svg";
import "./App.css";
import Router from './Components/Router'
import navBar from './Components/navBar.commponent/navBar'
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <navBar/>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
