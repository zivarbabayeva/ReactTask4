import './App.css';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
   <Index />
    </div>
  );
}

export default App;
