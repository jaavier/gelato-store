import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResumeShoppingCart() {
  return (
    <div className="fixed bottom-10 lg:w-1/3 md:w-1/2 w-11/12 px-14">
      <div className="rounded-full bg-pink-600 text-white p-2">
        <div className="flex justify-between items-center">
          <div className="w-full text-center ml-12">
            <FontAwesomeIcon icon={faShoppingBasket} /> view order
          </div>
          <div className="bg-white flex rounded-full">
            <div className="w-12 h-12 text-center rounded-full text-black">
              <div className="mt-3 overflow-hidden">1</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
