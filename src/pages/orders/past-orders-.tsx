// import IceCreamLogo from "../assets/icecream-logo.svg";
// import Items from "../components/items";

import { useEffect } from "react";
import One from "../../components/items/one";
import useApp from "../../context/useApp";

export default function PastOrders() {
  const { orderReceived } = useApp();

  useEffect(() => {
    localStorage.removeItem("cartItems");
  }, []);

  if (orderReceived.length === 0) {
    window.location.href = "/";
  } else {
    return (
      <div className="">
        <div className="flex justify-center items-center bg-white shadow-sm rounded-b-xl">
          <div className="w-full">
            {/* <div className="w-full flex justify-center py-5 bg-violet-100">
            <img src={IceCreamLogo} className="w-1/3" />
          </div> */}
            <div className="w-full px-4 text-justify border-t py-5 border-b bg-slate-50">
              <div className="font-pacific text-3xl">Order received</div>
            </div>
            <div className="">
              <div className="">
                <div className="pl-4 mb-4">
                  {orderReceived.map((icecream: IceCream, index: number) => (
                    <div key={index} className="my-2">
                      <One icecream={icecream} />
                    </div>
                  ))}
                </div>
                <div className="border-t mt-2 h-18">
                  <div className="flex justify-start gap-1 border-gray-200 px-4 h-14 items-center">
                    <div className="font-nunito text-xl">Subtotal:</div>
                    <div className="font-pacific text-2xl mb-2">
                      $
                      {orderReceived
                        .map((icecream: IceCream) => icecream.price)
                        .reduce(
                          (acc: number, current: number) => acc + current,
                          0
                        )
                        .toFixed(2)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div>
        <Items />
      </div> */}
      </div>
    );
  }
}
