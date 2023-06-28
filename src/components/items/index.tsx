import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

export default function Items() {
  const [icecreams, setIcecreams] = useState<Record<string, IceCream[]>>({});
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});

  const loadIcecreams = async () => {
    try {
      const response = await fetch("/api/icecreams");
      const json = await response.json();
      setIcecreams(json);
    } catch (error) {
      console.log("Error loading icecreams:", error);
    }
  };

  useEffect(() => {
    loadIcecreams();
  }, []);

  return Object.keys(icecreams).map((category: string, index: number) => (
    <div
      className="px-8 py-5 border mt-3 rounded-xl bg-white shadow-sm"
      key={index}
    >
      <div className="text-3xl font-bold font-pacific tracking-wide flex justify-between">
        <div>{category}</div>
        <div
          className="text-xl"
          onClick={() =>
            setIsOpen({ ...isOpen, [category]: !isOpen[category] })
          }
        >
          <FontAwesomeIcon icon={isOpen[category] ? faAngleDown : faAngleUp} />
        </div>
      </div>
      <div>
        {icecreams[category].map((icecream: IceCream, index: number) => {
          return (
            <div
              className={`flex justify-between items-center font-nunito mt-3 ${
                isOpen[category] && "hidden"
              }`}
              key={index}
            >
              <div className="h-32 w-3/4 pr-4 flex flex-col justify-center">
                <div className="text-lg font-extrabold hover:cursor-pointer">
                  {icecream.name}
                </div>
                <div className="">{icecream.description}</div>
                <div className="mt-1 font-bold font-pacific text-xl">
                  ${icecream.price}{" "}
                </div>
              </div>
              <div className="w-16 lg:w-32 hover:cursor-pointer bg-pink-50 p-2 lg:p-4 rounded-md">
                <img src={icecream.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ));
}
