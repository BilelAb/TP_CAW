import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Blogs from "./blogs";
import MyContacts from "./contacts";
import Header from "./header";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<MyContacts />} />
          <Route path="/blog" element={<Blogs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
