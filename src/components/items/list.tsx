import React from "react";
import One from "./one";

interface IceCreamListProps {
  icecreams: Record<string, IceCream[]>;
  category: string;
  isOpen: { [key: string]: boolean };
  handleClick: (icecream: IceCream) => void;
  [key: string]: any;
}

const IceCreamList: React.FC<IceCreamListProps> = ({
  icecreams,
  category,
  isOpen,
  handleClick,
}) => {
  return (
    <>
      {icecreams[category].map((icecream: IceCream, index: number) => {
        return (
          <One
            icecream={icecream}
            key={index}
            isOpen={isOpen}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};

export default IceCreamList;
