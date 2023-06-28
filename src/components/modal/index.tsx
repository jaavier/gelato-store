import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

type ModalType = {
  isOpen: boolean;
  onClose: () => void;
  children: unknown;
};

export function Modal({ isOpen, onClose, children }: ModalType) {
  const closeModal = () => {
    onClose();
  };

  return (
    <div
      className={`modal ${
        isOpen ? "block" : "hidden"
      } fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center z-10`}
    >
      <div className="modal-content bg-white p-6 rounded-lg relative lg:w-1/3 w-11/12">
        <span
          className="text-gray-600 hover:text-gray-800 cursor-pointer absolute right-4 top-3"
          onClick={closeModal}
        >
          <FontAwesomeIcon icon={faClose} />
        </span>
        {children as React.ReactElement}
      </div>
    </div>
  );
}
