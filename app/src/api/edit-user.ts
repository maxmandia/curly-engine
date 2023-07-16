import UserInterface from "../interfaces/UserInterface";

export default async function editUser(user: Partial<UserInterface>) {
  if (!user.id) {
    throw new Error("User id is required");
  }

  try {
    const response = await fetch(`http://localhost:3001/users/${user.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    throw Error;
  }
}
