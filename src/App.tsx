import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ResumeShoppingCart from "./components/shopping-cart/resume";

function App() {
  return (
    <div className="flex justify-center bg-gray-100 min-h-screen">
      <div className="lg:w-1/3 md:w-1/2 w-11/12 min-h-screen pb-32">
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
