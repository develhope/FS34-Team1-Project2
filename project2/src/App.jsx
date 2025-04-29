import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Registrazione from "./components/Registrazione";
import Carrello from "./components/Carrello";
import Audio from "./components/Audio";
import Gaming from "./components/Gaming";
import Mobile from "./components/Mobile";
import Tv from "./components/Tv";
import Login from "./components/Login";
import AuthProvider from "./context/authContext";
import Privacy from "./context/privateContext";
import Profilo from "./components/Profilo";
import CheckOut from "./components/CheckOut";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/profilo"
            element={
              <Privacy>
                <Profilo />
              </Privacy>
            }
          ></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/registrazione" element={<Registrazione />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/carrello" element={<Carrello />}>
          <Route path="checkout" element={<CheckOut />}></Route>
          </Route>
          <Route path="/audio" element={<Audio />}></Route>
          <Route path="/gaming" element={<Gaming />}></Route>
          <Route path="/mobile" element={<Mobile />}></Route>
          <Route path="/tv" element={<Tv />}></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
