import { Link, Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Login from "./components/login/Login";

function App() {

  return (
    <>
      <Link to="/"> Home</Link>
      <Link to="/Login"> Login</Link>
      <Routes>
        <Route path="/" element={<Home />}>
        </Route>
        <Route path="/Login" element={<Login />}>
        </Route>
      </Routes>
    </>

  )
}

export default App;
