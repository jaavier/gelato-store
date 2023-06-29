import { useEffect, useState } from "react";
import trackEvent from "../../helpers/trackEvent";

export default function Categories({ icecreams }: any) {
  const [isMenuSticky, setIsMenuSticky] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("Classics");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      const scrollPercentage =
        (scrollPosition / document.documentElement.scrollHeight) * 100;
      const thresholdPercentage = 18;
      if (scrollPercentage > thresholdPercentage) {
        setIsMenuSticky(scrollPercentage >= thresholdPercentage);
      } else {
        setIsMenuSticky(false);
      }
      if (scrollPercentage >= 0 && scrollPercentage < 30) {
        setActiveCategory("Classics");
      } else if (scrollPercentage >= 30 && scrollPercentage < 50) {
        setActiveCategory("Fruits");
      } else if (scrollPercentage >= 50 && scrollPercentage < 60) {
        setActiveCategory("Nuts and Sweets");
      } else {
        setActiveCategory("Specials");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-white p-4 min-w-full mt-3 rounded-t-xl">
      <div
        className={`${
          isMenuSticky
            ? "fixed left-0 top-0 w-full bg-white py-4 border-b"
            : "hidden"
        }`}
      >
        <div
          className={`flex items-center text-sm overflow-x-scroll gap-6 justify-center`}
        >
          {Object.keys(icecreams).map((category: string, index: number) => (
            <a
              href={`#${category}`}
              className={`hover:cursor-pointer hover:font-bold w-30 ${
                activeCategory === category && "font-bold"
              }`}
              key={index}
              onClick={() => {
                trackEvent("category", {
                  category,
                });
              }}
            >
              {category}
            </a>
          ))}
        </div>
      </div>
      <div
        className={`${
          isMenuSticky ? "hidden" : "flex"
        } items-center text-sm overflow-x-scroll gap-6 justify-center`}
      >
        {Object.keys(icecreams).map((category: string, index: number) => (
          <a
            href={`#${category}`}
            className={`hover:cursor-pointer hover:font-bold w-30  ${
              activeCategory === category && "font-bold"
            }`}
            key={index}
            onClick={() => {
              trackEvent("category", {
                category,
              });
            }}
          >
            {category}
          </a>
        ))}
      </div>
    </div>
  );
}
