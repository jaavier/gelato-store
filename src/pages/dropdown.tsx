import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function Dropdown({ label, children }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center gap-1 bg-transparent border border-transparent px-2 py-1 rounded focus:outline-none"
        onClick={toggleDropdown}
      >
        {label} <FontAwesomeIcon icon={faCaretDown} />
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white border rounded shadow">
          {children}
        </div>
      )}
    </div>
  );
}
