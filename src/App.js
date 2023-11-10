import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error404 from "./Pages/Error404";
import Listing from "./Pages/Listing";
import "./scss/app.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/listing" element={<Listing />}></Route>
        <Route path="/*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
