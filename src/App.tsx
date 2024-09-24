import React, { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Login from "./pages/login"; 
import { TemaContext } from "./context/TemaContext";
import { TodoContext } from "./context/TodoContext";
import { TodoService } from "./utils/TodoService";

function App() {
  const tema = useContext(TemaContext);
  const todoService: TodoService = new TodoService();

  return (
    <TemaContext.Provider value={tema}>
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/login">Login</Link></li> 
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/dashboard" 
              element={
                <TodoContext.Provider value={{ todoService }}>
                  <Dashboard /> 
                </TodoContext.Provider>
              } 
            />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/login" element={<Login />} /> 
          </Routes>
        </div>
      </Router>
    </TemaContext.Provider>
  );
}

export default App;
