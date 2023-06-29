import { Link } from "react-router-dom";

export default function MenuPrivate() {
  return (
    <>
      <Link
        to="/orders"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Orders
      </Link>
      <a
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.href = "/";
        }}
      >
        Logout
      </a>
    </>
  );
}
