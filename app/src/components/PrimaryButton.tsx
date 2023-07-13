import React from "react";

interface PrimaryButtonProps {
  text: string;
  setShowModal: (showModal: boolean) => void;
}

function PrimaryButton(props: PrimaryButtonProps) {
  const { text, setShowModal } = props;

  function handleClick() {
    setShowModal(true);
  }

  if (!text) {
    return null;
  }

  return (
    <button
      onClick={handleClick}
      className="bg-ritten-blue text-black py-[6px] px-[20px] rounded-[6px]"
    >
      Add New User
    </button>
  );
}

export default PrimaryButton;
