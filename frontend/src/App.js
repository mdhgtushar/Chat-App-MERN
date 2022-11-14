import './App.css';
import { Routes, Route, Link } from "react-router-dom"
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Regsiter</Link>
      <Routes>
        <Route path='/' element="Home" />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
