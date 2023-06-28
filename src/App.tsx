import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import ResumeShoppingCart from "./components/shopping-cart/resume";
import { ContextProvider } from "./context";
import OrderSent from "./pages/order-sent";
import Login from "./pages/user/login";
import Register from "./pages/user/register";

function App() {
  return (
    <ContextProvider>
      <Router>
        <div className="flex justify-center bg-gray-100 min-h-screen">
          <div className="lg:w-1/3 md:w-1/2 w-11/12 min-h-screen pb-32">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order" element={<OrderSent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
            <ResumeShoppingCart />
          </div>
        </div>
      </Router>
    </ContextProvider>
  );
}

export default App;
