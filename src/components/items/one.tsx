import { useState } from "react";
import useApp from "../../context/useApp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function generateID(): string {
  const characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";

  for (let i = 0; i < 20; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters.charAt(randomIndex);
  }

  return id;
}

export default function One({
  icecream,
  handleClick,
  showCounter = false,
  deletable = false,
  onDelete = (data?: any) => {},
}: any) {
  const { shoppingCart, setShoppingCart } = useApp();
  const [counter, setCounter] = useState<number>(1);
  const [sauceSelected, setSauceSelected] = useState<string>("");

  const addToCart = () => {
    const newItems = [];
    for (let i = 0; i < counter; i++) {
      const tmpIceCream = {
        ...icecream,
        id: generateID(),
        sauceSelected: sauceSelected,
      };
      newItems.push(tmpIceCream);
    }

    const updatedCartItems = [...shoppingCart, ...newItems];
    setShoppingCart(updatedCartItems);

    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));

    setCounter(1);
    setSauceSelected("");
    handleClick && handleClick();
  };

  return (
    icecream && (
      <>
        <div
          className={`flex gap-5 justify-between items-center font-nunito hover:cursor-pointer mt-3`}
          onClick={() => {
            handleClick && handleClick(icecream);
          }}
        >
          <div className="w-3/4 pr-4 flex flex-col justify-center">
            <div className="text-lg font-extrabold hover:cursor-pointer">
              {icecream.name}
            </div>
            <div className="">{icecream.description}</div>
            {icecream.sauceSelected.length > 0 ? (
              <div className="flex gap-1 font-extrabold">
                <div>Sauce: {icecream.sauceSelected}</div>
              </div>
            ) : null}
            {!showCounter ? (
              <div className="font-bold font-pacific text-xl">
                <div>
                  ${icecream.price}{" "}
                  {deletable && (
                    <button
                      className="text-xl"
                      onClick={() => {
                        const newShoppingCart = shoppingCart.filter(
                          (_icecream: IceCream) => _icecream.id !== icecream.id
                        );
                        setShoppingCart(newShoppingCart);
                        window.localStorage.setItem(
                          "cartItems",
                          JSON.stringify(
                            shoppingCart.filter(
                              (_icecream: IceCream) =>
                                _icecream.id !== icecream.id
                            )
                          )
                        );
                        if (newShoppingCart.length === 0) onDelete();
                      }}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
          <div
            className={`w-28 lg:w-32 hover:cursor-pointer bg-pink-50 lg:p-4 p-2 rounded-md ${
              showCounter ? "mr-0" : "mr-4"
            } lg:mt-1`}
          >
            <img src={icecream.image} alt={icecream.name} />
          </div>
        </div>
        <div className={`${!showCounter && "hidden"}`}>
          <div className="font-pacific text-2xl mt-3">Choose Sauce</div>
          <div>
            {icecream.sauces.map((sauce: string, index: number) => (
              <div className="py-2 flex justify-between" key={index}>
                <div>{sauce}</div>
                <div>
                  <input
                    type="radio"
                    className="w-5 h-5 text-pink-100"
                    value={1}
                    checked={sauceSelected === sauce}
                    onClick={() => setSauceSelected(sauce)}
                    onChange={() => {}}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          {showCounter && (
            <>
              <div className="flex items-center justify-start mt-4 mb-4">
                <div
                  className="px-3 text-2xl h-9 rounded-l-md bg-gray-200 outline-none"
                  onClick={() => {
                    if (counter > 1) setCounter(counter - 1);
                  }}
                >
                  -
                </div>
                <div className="">
                  <input
                    value={counter}
                    className="w-10 px-1 outline-none h-9 text-center text-sm bg-gray-200"
                    disabled
                  />
                </div>
                <div
                  className="px-3 text-2xl h-9 rounded-r-md bg-gray-200 outline-none"
                  onClick={() => setCounter(counter + 1)}
                >
                  +
                </div>
              </div>
              <button
                className="bg-pink-500 w-full py-3 font-nunito font-bold text-lg text-pink-50 rounded-lg"
                onClick={addToCart}
              >
                Add {counter} to cart · ${counter * icecream.price}
              </button>
            </>
          )}
        </div>
      </>
    )
  );
}
