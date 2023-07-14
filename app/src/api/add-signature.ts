import SignatureInterface from "../interfaces/SignatureInterface";

export default async function addSignature(
  signature: SignatureInterface,
  id: number,
  dob: string
) {
  // make sure fields are not empty
  if (signature.pin === "" || signature.fontStyle === "" || !id) {
    throw new Error("Incorrect fields");
  }

  // make sure the pin does not match the user's birthday
  let formattedDate: string[] | string = dob.split("/");
  formattedDate[0] = formattedDate[0].padStart(2, "0"); // Ensure the month is 2 digits
  formattedDate[1] = formattedDate[1].padStart(2, "0"); // Ensure the day is 2 digits
  formattedDate[2] = formattedDate[2].slice(-2); // Only keep the last two digits of the year
  formattedDate = formattedDate.join("");

  if (signature.pin === formattedDate) {
    throw new Error("dob conflict");
  }

  try {
    let resp = await fetch(`http://localhost:3001/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        signature: signature,
      }),
    });
    let data = await resp.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
