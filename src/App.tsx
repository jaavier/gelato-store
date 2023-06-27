import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ResumeShoppingCart from "./components/shopping-cart/resume";

function App() {
  return (
    <>
      <Navbar />
      <ResumeShoppingCart />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
