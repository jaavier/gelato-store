import { faCheck, faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApp from "../../context/useApp";
import { Modal } from "../modal";
import { useState } from "react";
import One from "../items/one";
import { Link, useLocation } from "react-router-dom";

export default function ResumeShoppingCart() {
  const { shoppingCart } = useApp();
  const location = useLocation();
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

  return (
    shoppingCart.length > 0 && (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onClose={() => setModalIsOpen(false)}
          children={
            <div className="">
              <div className="font-pacific text-3xl">Cart</div>
              {shoppingCart?.map((icecream: IceCream, index: number) => (
                <div key={index} className="my-2">
                  <One icecream={icecream} />
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
                  <Link to="/order" onClick={() => setModalIsOpen(false)}>
                    <FontAwesomeIcon icon={faCheck} /> Send Order
                  </Link>
                </div>
              </div>
            </div>
          }
        />
        {location.pathname !== "/order" && (
          <div className="fixed bottom-10 lg:w-1/3 md:w-1/2 w-11/12 px-14">
            <div className="rounded-full bg-pink-600 text-lg text-white p-2 cursor-pointer">
              <div className="flex justify-between items-center">
                <div
                  className="w-full text-center ml-6 lg:ml-12 font-bold"
                  onClick={() => shoppingCart.length && setModalIsOpen(true)}
                >
                  <FontAwesomeIcon icon={faShoppingBasket} /> View order
                </div>
                <div className="bg-white flex rounded-full">
                  <div className="w-12 h-12 text-center rounded-full text-black">
                    <div className="mt-3 overflow-hidden text-base">
                      {shoppingCart.length}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
}
