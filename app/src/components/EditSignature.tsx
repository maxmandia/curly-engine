import React from "react";
import UserInterface from "../interfaces/UserInterface";
import addSignature from "../api/add-signature";
import toast from "react-hot-toast";

interface EditSignatureProps {
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  selectedUser: UserInterface;
  setUsers: React.Dispatch<React.SetStateAction<UserInterface[]>>;
}

function EditSignature(props: EditSignatureProps) {
  const { setIsEditing, selectedUser, setUsers } = props;
  const [selectedFont, setSelectedFont] =
    React.useState<string>("Cedarville Cursive");
  const [userPin, setUserPin] = React.useState<string>("");

  function handlePinChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    if (value.length <= 6) {
      setUserPin(value);
    }
  }

  async function handleSave() {
    if (!userPin) {
      toast.error("Please enter a valid PIN");
      return;
    }

    if (userPin.length < 6) {
      toast.error("PIN must be 6 digits");
      return;
    }

    let signature = {
      pin: userPin,
      fontStyle: selectedFont,
    };

    try {
      let resp = await addSignature(
        signature,
        selectedUser.id,
        selectedUser.dob
      );
      setUsers((prev) => {
        return prev.map((user) => {
          if (user.id === selectedUser.id) {
            let newUserInfo = { ...user, signature: resp.signature };
            return newUserInfo;
          }
          return user;
        });
      });
      setIsEditing(false);
      toast.success("Signature added successfully");
    } catch (error: any) {
      if (error.message === "Incorrect fields") {
        toast.error("Incorrect fields");
        return;
      } else if (error.message === "dob conflict") {
        toast.error("Cannot use DOB as PIN");
      } else {
        console.log(error);
      }
    }
  }

  if (!selectedUser) {
    return null;
  }

  return (
    <>
      {selectedUser.signature ? (
        <div className="flex flex-col p-5">
          <h5 className="text-[14px]">Signature Preview</h5>
          <div className="bg-[#D2D2D2] rounded-[6px] py-5 flex justify-center mt-3 text-black">
            <p
              className="text-[48px]"
              style={{
                fontFamily: selectedUser.signature.fontStyle,
              }}
            >
              {selectedUser.name}
            </p>
          </div>
          <div className="flex items-center justify-end gap-6 mt-5">
            <button
              onClick={() => setIsEditing(false)}
              className="bg-ritten-blue px-4 py-2 rounded-[6px] text-black shadow-user-shadow"
            >
              Go Back
            </button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col p-5">
          <h3 className="text-[20px]">Add a custom signature</h3>
          <form action="POST" className="flex flex-col mt-2">
            <label className="text-[14px]" htmlFor="pin">
              Signature PIN (6 Digits)
            </label>
            <input
              placeholder="Signature PIN"
              value={userPin}
              onChange={handlePinChange}
              className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
              type="number"
            />
            <label className="text-[14px]" htmlFor="font">
              Signature Font Style
            </label>
            <select
              placeholder="Cedarville Cursive"
              className="bg-[#0A0C13] p-1 border-solid border-[#50535E] border-[1px] rounded-[4px] my-3 text-[#D1D4DC]"
              name="font"
              id=""
              onChange={(e) => setSelectedFont(e.target.value)}
            >
              <option value="Cedarville Cursive">Cedarville Cursive</option>
              <option value="Great Vibes">Great Vibes</option>
              <option value="Tangerine">Tangerine</option>
              <option value="Dancing Script">Dancing Scrip</option>
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
      )}
    </>
  );
}

export default EditSignature;
