import { Link } from "react-router-dom";
import trackEvent from "../../helpers/trackEvent";

export default function MenuPrivate() {
  return (
    <>
      <Link
        to="/orders"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
        onClick={() => {
          trackEvent("dropdown:orders", {});
        }}
      >
        Orders
      </Link>
      <a
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
        onClick={() => {
          localStorage.removeItem("token");
          trackEvent("dropdown:logout", {});
          window.location.href = "/";
        }}
      >
        Logout
      </a>
    </>
  );
}
