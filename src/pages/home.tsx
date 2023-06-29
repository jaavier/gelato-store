import IceCreamLogo from "../assets/icecream-logo.svg";
import Items from "../components/items";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-center items-center bg-white shadow-sm">
        <div className="w-full">
          <div className="w-full flex justify-center py-5 bg-pink-200">
            <img src={IceCreamLogo} className="w-1/3" />
          </div>
          <div className="w-full text-justify border-t py-5 px-4">
            Discover pure bliss at our artisanal ice cream parlor. Indulge in
            delightful flavors crafted with love. Classic favorites, adventurous
            combos, and endless happiness 🍧
          </div>
        </div>
      </div>
      <div className="bg-white rounded-b-xl p-4 border-t">
        <div className="flex justify-between text-sm">
          <div className="">
            Welcome back <b>demo</b>
          </div>
          <div className="flex gap-3">
            <div>Orders</div>
            <div>Profile</div>
          </div>
        </div>
      </div>
      <div>
        <Items />
      </div>
    </div>
  );
}
