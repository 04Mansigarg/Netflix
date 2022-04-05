import logo from "./logo.svg";
import "./App.css";
import SignUp3 from "./components/SignUp3";
import { Routes, Route } from "react-router-dom";
import SignUp1 from "./components/SignUp1";
import SignUp2 from "./components/SignUp2";
import Login from "./components/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={"Homepage"} />
        <Route path="signup1" element={<SignUp1 />} />
        <Route path="signup2" element={<SignUp2 />} />
        <Route path="signup3" element={<SignUp3 />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
