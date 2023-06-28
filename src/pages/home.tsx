import IceCreamLogo from "../assets/icecream-logo.svg";
import Items from "../components/items";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-white shadow-sm rounded-b-xl">
        <div className="w-full">
          <div className="w-full flex justify-center py-5 bg-violet-100">
            <img src={IceCreamLogo} className="w-1/3" />
          </div>
          <div className="w-full px-8 text-justify border-t py-5">
            Discover pure bliss at our artisanal ice cream parlor. Indulge in
            delightful flavors crafted with love. Classic favorites, adventurous
            combos, and endless happiness 🍧
          </div>
        </div>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
