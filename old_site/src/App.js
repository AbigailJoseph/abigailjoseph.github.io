//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './components/HomePage'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Home/>
    </Router>
      
    </>
  );
}

export default App;
