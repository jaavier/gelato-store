import { Link } from "react-router-dom";

export default function MenuPublic() {
  return (
    <>
      <Link
        to="/login"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Login
      </Link>
      <Link
        to="/register"
        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
      >
        Sign Up
      </Link>
    </>
  );
}
