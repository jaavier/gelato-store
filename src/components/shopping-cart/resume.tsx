import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useApp from "../../context/useApp";
import { Modal } from "../modal";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ModalCart from ".";
import trackEvent from "../../helpers/trackEvent";

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
          children={<ModalCart setModalIsOpen={setModalIsOpen} />}
        />
        {location.pathname === "/" && shoppingCart.length && (
          <div className="fixed bottom-10 lg:w-1/3 md:w-1/2 w-11/12 px-14">
            <div className="rounded-full bg-pink-600 opacity-90 text-lg text-white p-2 cursor-pointer">
              <div className="flex justify-between items-center">
                <div
                  className="w-full text-center ml-6 lg:ml-12 font-bold"
                  onClick={() => {
                    if (shoppingCart.length) setModalIsOpen(true);
                    trackEvent("btn:view-order", {});
                  }}
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
