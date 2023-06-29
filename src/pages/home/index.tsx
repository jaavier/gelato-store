import IceCreamLogo from "../../assets/icecream-logo.svg";
import Items from "../../components/items";
import useApp from "../../context/useApp";
import Dropdown from "../dropdown";
import MenuPrivate from "./menu-private";
import MenuPublic from "./menu-public";

export default function Home() {
  const { token } = useApp();

  return (
    <div className="">
      <div className="flex justify-center items-center bg-white shadow-sm rounded-b-xl">
        <div className="w-full">
          <div className="w-full flex justify-center py-5 bg-pink-200">
            <img src={IceCreamLogo} className="w-1/3" />
          </div>
          <div className="w-full text-justify py-5 px-4">
            Discover pure bliss at our artisanal ice cream parlor. Indulge in
            delightful flavors crafted with love. Classic favorites, adventurous
            combos, and endless happiness 🍧
          </div>
        </div>
      </div>
      {
        <div className="bg-white rounded-xl shadow p-4 mt-2 border-t">
          <div className="flex justify-between items-center">
            <div className="">
              {token ? "Welcome back demo" : "Sign up now and start enjoying"}
            </div>
            <Dropdown label="Account">
              {token ? <MenuPrivate /> : <MenuPublic />}
            </Dropdown>
          </div>
        </div>
      }
      <div>
        <Items />
      </div>
    </div>
  );
}
