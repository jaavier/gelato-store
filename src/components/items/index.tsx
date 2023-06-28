import { useEffect, useState } from "react";
import IceCream1 from "../../assets/icecream-1.svg";

interface Icecream {
  name: string;
  price: number;
  description: string;
  likes: number;
  image: string;
}

const IceCream = (icecream: Icecream) => (
  <div>
    <div>{icecream.name}</div>
    <div>{icecream.price}</div>
  </div>
);

export default function Items() {
  const [icecreams, setIcecreams] = useState<Record<string, Icecream[]>>({});

  const loadIcecreams = async () => {
    try {
      const response = await fetch("/api/icecreams");
      const json = await response.json();
      setIcecreams(json);
      console.log("🚀 ~ file: index.tsx:29 ~ loadIcecreams ~ json:", json);
    } catch (error) {
      console.log("Error loading icecreams:", error);
    }
  };

  useEffect(() => {
    loadIcecreams();
  }, []);

  return Object.keys(icecreams).map((category: string, index: number) => (
    <div className="px-8 py-5 border mt-5 rounded-xl bg-white shadow-sm" key={index}>
      <div className="text-3xl font-bold font-pacific tracking-wide">
        {category}
      </div>
      <div>
        {icecreams[category].map((icecream: Icecream, index: number) => {
          return (
            <div
              className="flex justify-between items-center font-nunito"
              key={index}
            >
              <div className="h-32 w-3/4 pr-4 flex flex-col justify-center">
                <div className="text-lg font-extrabold hover:cursor-pointer">{icecream.name}</div>
                <div className="">{icecream.description}</div>
                <div className="mt-1 font-bold font-pacific text-xl">
                  ${icecream.price}{" "}
                  {/* <span className="ml-2 font-nunito text-sm bg-gray-200 px-2 py-1 rounded font-normal">
                    {vegan}
                  </span> */}
                </div>
              </div>
              <div className="w-16 lg:w-24 hover:cursor-pointer">
                <img src={icecream.image} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  ));
}
