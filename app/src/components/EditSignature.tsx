import React from "react";
import UserInterface from "../interfaces/UserInterface";

interface EditSignatureProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: UserInterface;
}

function EditSignature(props: EditSignatureProps) {
  const { setIsEditing, selectedUser } = props;
  const [selectedFont, setSelectedFont] =
    React.useState<string>("Cedarville Cursive");
  const [userPin, setUserPin] = React.useState<number>();

  function handlePinChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    // Ensure that the input is numeric and is not longer than 6 characters
    if (!isNaN(parseInt(value)) && value.length <= 6) {
      setUserPin(parseInt(value));
    } else if (value === "") {
      setUserPin(undefined);
    }
  }

  function handleSave() {
    console.log(userPin);
  }

  if (!selectedUser) {
    return null;
  }

  return (
    <div className="flex flex-col p-5">
      <h3 className="text-[20px]">Add a custom signature</h3>
      <form action="POST" className="flex flex-col mt-2">
        <label className="text-[14px]" htmlFor="pin">
          Signature PIN (6 Digits)
        </label>
        <input
          value={userPin}
          onChange={handlePinChange}
          className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
          type="number"
        />
        <label className="text-[14px]" htmlFor="font">
          Signature Font Style
        </label>
        <select
          className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
          name="font"
          id=""
          onChange={(e) => setSelectedFont(e.target.value)}
        >
          <option value="Cedarville Cursive">Cedarville Cursive</option>
          <option value="Great Vibes">Great Vibes</option>
          <option value="Tangerine">Tangerine</option>
        </select>
      </form>
      <h5 className="text-[14px]">Signature Preview</h5>
      <div className="bg-[#D2D2D2] rounded-[6px] py-5 flex justify-center mt-3 text-black">
        <p
          className="text-[48px]"
          style={{
            fontFamily: selectedFont,
          }}
        >
          {selectedUser.name}
        </p>
      </div>
      <div className="flex items-center justify-end gap-6 mt-5">
        <button
          onClick={() => setIsEditing(false)}
          className="text-ritten-blue"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="bg-ritten-blue px-4 py-2 rounded-[6px] text-black shadow-user-shadow"
        >
          Add Signature
        </button>
      </div>
    </div>
  );
}

export default EditSignature;
