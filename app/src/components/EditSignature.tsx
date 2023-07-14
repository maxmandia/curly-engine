import React from "react";

interface EditSignatureProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
}

function EditSignature(props: EditSignatureProps) {
  const { setIsEditing } = props;

  return (
    <div className="flex flex-col p-5">
      <h3 className="text-[20px]">Add a custom signature</h3>
      <form action="POST" className="flex flex-col mt-4">
        <label htmlFor="pin">Signature PIN (6 Digits)</label>
        <input
          className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
          type="number"
        />
        <label htmlFor="font">Signature Font Style</label>
        <select
          className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
          name="font"
          id=""
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </form>
      <h5>Signature Preview</h5>
      <div className="bg-[#D2D2D2] rounded-[6px] py-10 flex justify-center mt-3 text-black">
        <p>Signature</p>
      </div>
      <div className="flex items-center justify-end gap-6 mt-5">
        <button
          onClick={() => setIsEditing(false)}
          className="text-ritten-blue"
        >
          Cancel
        </button>
        <button className="bg-ritten-blue px-4 py-2 rounded-[6px] text-black shadow-user-shadow">
          Add Signature
        </button>
      </div>
    </div>
  );
}

export default EditSignature;
