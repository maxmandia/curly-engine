export default async function deleteUser(id: number) {
  if (!id) throw new Error("Id is required");

  try {
    let resp = await fetch(`http://localhost:3001/users/${id}`, {
      method: "DELETE",
    });
    let data = await resp.json();
    return data;
  } catch (error: any) {
    throw new Error(error);
  }
}
