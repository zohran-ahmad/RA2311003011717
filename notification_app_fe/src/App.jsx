import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Priority from "./pages/Priority";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar" style={{ padding: 10 }}>
        <Link to="/">Home</Link> |{" "}
        <Link to="/priority">Priority</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/priority" element={<Priority />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;