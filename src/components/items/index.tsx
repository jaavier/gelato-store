import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { Modal } from "../modal";
import IceCreamList from "./list";
import One from "./one";

export default function Items() {
  const [icecreams, setIcecreams] = useState<Record<string, IceCream[]>>({});
  const [isOpen, setIsOpen] = useState<Record<string, boolean>>({});
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [currentIceCream, setCurrentIceCream] = useState<IceCream>();

  const loadIcecreams = async () => {
    try {
      const response = await fetch("/api/icecreams");
      const json = await response.json();
      setIcecreams(json);
    } catch (error) {
      console.log("Error loading icecreams:", error);
    }
  };

  const handleClick = (icecream: IceCream) => {
    setCurrentIceCream(icecream);
    setModalIsOpen(true);
  };

  useEffect(() => {
    loadIcecreams();
  }, []);

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onClose={() => setModalIsOpen(false)}
        children={
          <div className="">
            <One
              icecream={currentIceCream}
              showCounter={true}
              handleClick={() => setModalIsOpen(false)}
            />
          </div>
        }
      />
      {Object.keys(icecreams).map((category: string, index: number) => (
        <div
          className="pl-5 py-5 border mt-3 rounded-xl bg-white shadow-sm"
          key={index}
        >
          <div className="text-3xl font-bold font-pacific tracking-wide flex justify-between">
            <div>{category}</div>
            <div
              className="text-xl pr-5"
              onClick={() =>
                setIsOpen({ ...isOpen, [category]: !isOpen[category] })
              }
            >
              <FontAwesomeIcon
                icon={isOpen[category] ? faAngleDown : faAngleUp}
              />
            </div>
          </div>
          <div className={`${!isOpen[category] ? 'block' : 'hidden'}`}>
            <IceCreamList
              icecreams={icecreams}
              category={category}
              isOpen={isOpen}
              handleClick={handleClick}
            />
          </div>
        </div>
      ))}
    </>
  );
}
