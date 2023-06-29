import { Link } from "react-router-dom";
import "./style.css";

export default function Navbar() {
  return (
    <div className="w-full bg-pink-100 text-pink-500">
      <div className="px-3 py-5 text-3xl font-pacific font-extrabold tracking-wider">
        <div className="flex justify-center">
          <Link to="/">Gelato</Link>
        </div>
      </div>
    </div>
  );
}
