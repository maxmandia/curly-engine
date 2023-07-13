import React from "react";

interface PrimaryButtonProps {
  text: string;
}

function PrimaryButton(props: PrimaryButtonProps) {
  const { text } = props;

  if (!text) {
    return null;
  }

  return (
    <button className="bg-ritten-blue text-black py-[6px] px-[20px] rounded-[6px]">
      Add New User
    </button>
  );
}

export default PrimaryButton;
