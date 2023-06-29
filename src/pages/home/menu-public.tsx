import { Link } from "react-router-dom";
import trackEvent from "../../helpers/trackEvent";

export default function MenuPublic() {
  return (
    <>
      <Link
        to="/login"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        onClick={() => {
          trackEvent("btn:home:login", {});
        }}
      >
        Login
      </Link>
      <Link
        to="/register"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        onClick={() => {
          trackEvent("btn:home:register", {});
        }}
      >
        Sign Up
      </Link>
    </>
  );
}
