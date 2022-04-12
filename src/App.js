import "./App.css";
// import Login from './components/Login';
import Main from "./components/Main";
// import Navbar from './components/Navbar';
import {
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
// import Navbar from './components/Navbar';
import Login from "./components/Login";
import { useEffect, useRef } from "react";
// import DetailTable from './components/DetailTable'
// import OrderTable  from './components/OrderTable';

function App() {
  const navigate = useNavigate();
  const token = useRef(localStorage.getItem("token"));
  useEffect(() => {
    if (!token.current) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        {token && <Route path="/*" element={<Main />} />}
      </Routes>
    </div>
  );
}

export default App;
