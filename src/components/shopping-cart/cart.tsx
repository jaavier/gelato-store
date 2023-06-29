import { useCallback } from "react";
import useApp from "../../context/useApp";
import One from "../items/one";
import { Link } from "react-router-dom";

type Step = "cart" | "login" | "register";
interface Cart {
  setModalIsOpen: (boolean: any) => void;
  setStep?: (step: Step) => void;
  step?: string;
}

export default function Cart({ setModalIsOpen, setStep, step }: Cart) {
  console.log("🚀 ~ file: cart.tsx:14 ~ Cart ~ step:", step);
  const { setOrderReceived, shoppingCart, setShoppingCart, token } = useApp();

  const onDelete = useCallback(() => {
    setModalIsOpen(false);
  }, []);

  return (
    <div className="">
      <div className="font-pacific text-3xl">Cart</div>
      {shoppingCart?.map((icecream: IceCream, index: number) => (
        <div key={index} className="my-2">
          <One icecream={icecream} deletable={true} onDelete={onDelete} />
        </div>
      ))}
      <div className="flex justify-start gap-1 border-t border-gray-200 mt-5 h-14 items-center">
        <div className="font-nunito text-xl">Subtotal:</div>
        <div className="font-pacific text-2xl mb-2">
          ${" "}
          {shoppingCart
            .map((icecream: IceCream) => icecream.price)
            .reduce((acc: number, current: number) => acc + current, 0)
            .toFixed(2)}
        </div>
      </div>
      <div className="flex justify-start">
        <div className="rounded-full bg-pink-600 text-white py-2 px-4 cursor-pointer w-fit text-center">
          {token && token.length ? (
            <Link
              to="/order"
              onClick={() => {
                setOrderReceived(shoppingCart);
                localStorage.setItem("shoppingCart", "[]");
                localStorage.setItem(
                  "orderReceived", // cambiar luego por multiples ordenes
                  JSON.stringify(shoppingCart)
                );
                setShoppingCart([]);
                setModalIsOpen(false);
              }}
            >
              Continue
            </Link>
          ) : (
            <a
              className="cursor-pointer"
              onClick={() => {
                // setModalIsOpen(false);
                if (setStep) setStep("login");
              }}
            >
              Login
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
