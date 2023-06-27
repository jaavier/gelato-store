import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ResumeShoppingCart from "./components/shopping-cart/resume";

function App() {
  return (
    <div className="flex justify-center">
      <div className="w-1/3">
      <Navbar />
      <ResumeShoppingCart />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      </div>
    </div>
  );
}

export default App;
