import { faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ResumeShoppingCart() {
  return (
    <div className="border-b p-4">
      <div className="flex justify-between">
        <div>
          <FontAwesomeIcon icon={faShoppingBasket} /> 4 items
        </div>
        <div className="rounded-full bg-pink-100 px-3 py-1 text-sm">Pay</div>
      </div>
    </div>
  );
}
