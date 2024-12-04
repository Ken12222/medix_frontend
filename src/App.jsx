import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Sign_up from "./Pages/Sign_up";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/sign_up" exact element={<Sign_up />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
