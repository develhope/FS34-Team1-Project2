import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Registrazione from "./components/Registrazione";
import Carrello from "./components/Carrello";
import Beauty from "./components/Beauty";
import MenShoes from "./components/MenShoes";
import Sunglasses from "./components/Sunglasses";
import Watches from "./components/Watches";
import WomenJewellery from "./components/WomenJewellery";
import Login from "./components/Login";
import AuthProvider from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/registrazione" element={<Registrazione />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/carrello" element={<Carrello />}></Route>
          <Route path="/beauty" element={<Beauty />}></Route>
          <Route path="/menshoes" element={<MenShoes />}></Route>
          <Route path="/sunglasses" element={<Sunglasses />}></Route>
          <Route path="/watches" element={<Watches />}></Route>
          <Route path="/womenjewellery" element={<WomenJewellery />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
