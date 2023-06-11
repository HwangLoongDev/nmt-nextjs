import React from "react";
import Image from "next/image";

type Props = {
  open: boolean;
  closeOnClickOutside?: boolean;
  onClose: () => void;
  content: React.ReactNode;
  width?: string;
};

const DialogComponent = ({
  open,
  closeOnClickOutside,
  onClose,
  content,
  width,
}: Props) => {
  return (
    <div
      onClick={() => closeOnClickOutside && onClose()}
      id="myModal"
      className={`modal ${
        open ? "flex" : "hidden"
      } z-20 fixed top-0 left-0 justify-center items-center`}
    >
      {/* <!-- Modal content --> */}
      <div
        style={{ maxWidth: width ? width : "unset" }}
        className="modal-content rounded shadow-md 2xl:w-5/6 w-full relative"
        onClick={(event) => event.stopPropagation()}
      >
        <span
          className="close absolute right-3 top-0"
          onClick={() => onClose()}
        >
          &times;
        </span>
        {content}
      </div>
    </div>
  );
};

export default DialogComponent;
