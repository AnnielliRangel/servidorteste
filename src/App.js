
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/HomePage"
import LoginPage from './Pages/LoginPage';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage /> }> </Route>
        <Route path="/login" element={<LoginPage /> }></Route>
      </Routes>
      
    </div>
  );
}

export default App;
