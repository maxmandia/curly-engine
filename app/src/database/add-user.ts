import UserInterface from "../interfaces/UserInterface";

export default async function addUser(user: UserInterface) {
  if (
    typeof user.id !== "number" ||
    user.name === "" ||
    user.dob === "" ||
    user.phone === "" ||
    user.email === ""
  ) {
    throw new Error("missing fields");
  }

  // if a user uses dashes in dob, remove and replace with slashes
  const date = new Date(user.dob);
  const formattedDate = `${
    date.getMonth() + 1
  }/${date.getDate()}/${date.getFullYear()}`;
  user.dob = formattedDate;

  try {
    let resp = await fetch("http://localhost:3001/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    let data = await resp.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
